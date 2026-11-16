# Pomiar formularza Google Ads

Implementacja: 16 listopada 2026. Kod przygotowany lokalnie; publikacja i odbiór zdarzeń przez Google Ads nie zostały potwierdzone.

## Konfiguracja i audyt

- Google tag: `AW-18125280330`.
- Konwersja „Przesłanie formularza kontaktowego”: `AW-18125280330/EipsCPOs2LkdEMqo58JD`.
- W kodzie istniał już Google tag tego konta, ładowany przez CookieNotice. Został uporządkowany, bez dodawania drugiego tagu. Nie znaleziono osobnej instalacji GA4 ani kontenera GTM w źródłach projektu.
- Jedynym formularzem wysyłającym zapytania jest ContactSection. Przejścia do wyceny, także z konfiguratora, prowadzą do tego formularza na `/kontakt`.
- Obecna konfiguracja korzysta z `/api/contact`. Jeżeli w przyszłości zostanie użyty zewnętrzny endpoint, musi zwracać ten sam kontrakt sukcesu, aby uruchamiał pomiar.

## Warunek konwersji

Serwer zwraca HTTP 200 i `{ success: true, submissionId: UUID }` dopiero po zaakceptowaniu wiadomości przez co najmniej jednego odbiorcę SMTP. Oznacza to przyjęcie przez SMTP, nie gwarancję doręczenia do skrzynki. Błędy walidacji, wysyłki i odrzucenie odbiorcy nie zwracają identyfikatora sukcesu.

Klient zgłasza `conversion` wyłącznie po otrzymaniu takiego potwierdzenia i przy aktualnej zgodzie. UUID jest losowy, nie pochodzi z danych klienta. Pamięć aplikacji, sessionStorage oraz `transaction_id` zabezpieczają przed powtórnym raportowaniem tego samego sukcesu. Druga, odrębna wysyłka otrzymuje nowy UUID. Blokada równoległego wysyłania formularza pozostaje aktywna.

Zdarzenie zawiera tylko `send_to`, `transaction_id` i oczyszczony kontekst strony. Nie zawiera wartości, waluty, danych kontaktowych, treści formularza ani danych do konwersji rozszerzonych. Z adresu strony usuwane są hash i parametry poza poprawnymi identyfikatorami kliknięcia `gclid`, `gbraid`, `wbraid`; referrer jest ograniczony do domeny. Jest to istotne dla linków z opisem doboru folii.

## Zgody

Zastosowano Basic Consent Mode. Przed wyborem użytkownika skrypt Google nie jest pobierany. Synchroniczna kolejka ustawia domyślnie `denied` dla `ad_storage`, `ad_user_data`, `ad_personalization`, `analytics_storage`.

Akceptacja obecnego banera pozwala na `ad_storage` i `ad_user_data`. Analityka i personalizacja reklam pozostają wyłączone. Jeden skrypt ładuje się z oficjalnego adresu `https://www.googletagmanager.com/gtag/js?id=AW-18125280330`. Przejścia między podstronami nie dodają kolejnych instalacji. Odrzucenie lub reset zgody blokuje nowe konwersje; wcześniej wysłanych zdarzeń nie można cofnąć. Sukces formularza bez zgody nie jest odtwarzany po późniejszej akceptacji.

## Wykonane testy

1. `node scripts/test-google-ads.cjs` — PASS. Kolejność i zmiany zgód, brak tagu przed akceptacją, pojedynczy loader/config, blokada błędów i niepełnych potwierdzeń, deduplikacja, brak odtwarzania po zgodzie, odporność na niedostępny storage, minimalny payload i oczyszczanie URL. Wywołania Google są atrapą, nie rzeczywistymi konwersjami.
2. Ten sam skrypt wykonuje rzeczywisty handler API z atrapą SMTP: 400 przy błędnej walidacji, 200 i UUID po sukcesie, 500 po błędzie lub odrzuceniu SMTP, 405 dla złej metody oraz powiązanie potwierdzenia z jednym zdarzeniem.
3. `npm run build` — PASS.
4. `node scripts/test-contact-http.cjs` — PASS. Prawdziwy serwer Next.js, parser multipart i Nodemailer komunikują się z lokalnym serwerem SMTP. Sprawdzono 400, 200 z UUID, 500 po błędzie DATA, 500 po odrzuceniu odbiorcy i 405. Skrypt wymaga wcześniejszego builda. Nie wysyła poczty na zewnętrzny serwer.
5. Przeglądarka na lokalnym serwerze testowym: pusty formularz pokazuje błędy; poprawna wysyłka danych syntetycznych pokazuje podziękowanie i czyści formularz. Przy odrzuconej zgodzie w obu przypadkach brak skryptu Google. Wiadomość odebrał wyłącznie lokalny SMTP.

Opcja `node scripts/test-contact-http.cjs --serve` pozostawia lokalną instancję do ręcznych testów. Wypisuje jej adres, kończy się przez Ctrl+C. Dane testowe mają fikcyjne adresy w domenie `.invalid`. Nie należy kierować takich testów na produkcyjny SMTP.

## Weryfikacja w Google Tag Assistant po publikacji

Ta część nie została wykonana. Nie potwierdzono rzeczywistego żądania konwersji do Google ani naliczenia w panelu Ads.

1. Otwórz [Tag Assistant](https://tagassistant.google.com/) i połącz opublikowaną stronę. Użyj nowej sesji bez zapisanej zgody albo przycisku zmiany zgody w polityce prywatności. Wyłącz blokery reklam na czas weryfikacji.
2. Przed wyborem zgody sprawdź domyślne cztery stany `denied` i brak pobrania `gtag/js`. Po „Tylko niezbędne” formularz powinien działać, ale bez konwersji Google.
3. Zaakceptuj pomiar. Sprawdź jeden tag AW-18125280330, prawidłowy adres `gtag/js`, `ad_storage` i `ad_user_data` jako `granted`; pozostałe dwa stany nadal `denied`. Samo wejście, akceptacja i przejścia SPA nie mogą zgłaszać zdarzenia `conversion`.
4. Błędne wysłanie formularza ma pokazać walidację bez konwersji. Błąd serwera/SMTP testuj na odizolowanym środowisku — również bez konwersji.
5. Poprawne wysłanie danych syntetycznych na środowisku z testowym SMTP ma zwrócić sukces i dokładnie jedno zdarzenie `conversion` z docelowym `send_to` oraz UUID w `transaction_id`. Sprawdź także dojście z konfiguratora do formularza. Ponowne przetworzenie tego samego potwierdzenia nie może dodać zdarzenia; kolejna odrębna wysyłka powinna mieć inny UUID.
6. W Tag Assistant i zakładce Network sprawdź faktyczny payload Google: brak imienia, e-maila, telefonu, wiadomości, parametrów doboru i hasha w URL/referrer; brak `value`, `currency` oraz `user_data`. Testy automatyczne potwierdzają argumenty gtag, ale nie zastępują kontroli rzeczywistego żądania biblioteki Google.
7. Zresetuj zgodę przez politykę prywatności. Kolejne wysyłki nie powinny generować konwersji. Późniejsza akceptacja nie powinna odtwarzać poprzednich sukcesów.
8. W koncie Ads sprawdź zgodność ID i etykiety oraz brak drugiej konwersji tego samego formularza przez regułę URL, GTM, GA4 lub automatyczne zdarzenia. Ustawienia konta i ewentualne równoległe pomiary poza repozytorium nie były dostępne do audytu.

Zdarzenie widoczne w Tag Assistant nie oznacza jeszcze przypisanej konwersji w Google Ads. Odbiór i atrybucję należy osobno potwierdzić w diagnostyce konta po publikacji; testy bez kliknięcia reklamy nie dowodzą naliczania konwersji reklamowej.

## Dokumentacja Google

- [Implementacja Consent Mode](https://developers.google.com/tag-platform/security/guides/consent).
- [Google tag i zdarzenia konwersji](https://developers.google.com/tag-platform/devguides/conversions).
- [Identyfikatory transakcji a duplikaty](https://support.google.com/google-ads/answer/6386790).
- [Dane osobowe w adresach URL](https://support.google.com/google-ads/answer/6389382).
