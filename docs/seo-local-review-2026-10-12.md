# Rozbudowa SEO lokalnego — materiały do sprawdzenia przed deployem

Status: zmiany lokalne, bez publikacji na produkcji.

## Zakres

- Rozbudowa istniejących stron Krakowa i Katowic o dobór folii, zastosowania w biurach, koszt i organizację montażu.
- Na stronie Krakowa 7 pytań FAQ, na stronie Katowic 6. Widoczny FAQ i dane strukturalne korzystają z tych samych danych.
- Po 3 karty istniejących realizacji na stronach miast. Lokalizacje, galerie i pliki zdjęć pozostają zgodne z dotychczasowymi danymi.
- Rozbudowa folii przeciwsłonecznych w Katowicach: 4 sekcje i 5 pytań FAQ.
- Nowa strona o foliach do biura: słońce, odblaski, prywatność, ścianki szklane, dobór i wycena.
- Naprawa pomijanych linków z realizacji do głównych stron miast. Lokalne strony usług linkują również do strony swojego miasta.
- Odnośniki do nowego poradnika ze stron miast i obu lokalnych stron folii przeciwsłonecznych.
- Aktualizacja generowanych sitemap.xml, llms.txt i llms-full.txt.
- Poprawka generatora sitemap: uwzględnia wpisy zapisane zarówno z pojedynczymi, jak i podwójnymi cudzysłowami. Dzięki temu mapa zawiera również dotychczasowy zbiór realizacji laminatów. Daty zmian stron miast są odczytywane z ich danych treści.
- Wspólne źródło treści miast w `src/data/localWindowFilmsPagesData.js`: strona, FAQ i pełny eksport dla AI korzystają z tych samych opisów.

## Adresy lokalnego podglądu

http://localhost:3000/montaz-folii-okiennych-krakow

http://localhost:3000/montaz-folii-okiennych-katowice

http://localhost:3000/folie-przeciwsloneczne-katowice

http://localhost:3000/folie-okienne-do-biura

http://localhost:3000/realizacje/folie-przeciwsloneczne-szpital-murcki-katowice

http://localhost:3000/folie-przeciwsloneczne-krakow

## Co sprawdzić osobiście

1. Przeczytaj opis obszaru obsługi Katowic i organizacji dojazdu. Potwierdź, że odpowiada realnej ofercie.
2. Sprawdź treści o wycenie, demontażu i doborze folii. Nie dodano stałych cen, terminów ani gwarancji efektu.
3. Obejrzyj po 3 realizacje na stronach miast. Gliwice i Żelków są podpisane swoimi rzeczywistymi nazwami.
4. Otwórz nowy poradnik ze strony miasta i z lokalnej strony folii przeciwsłonecznych.
5. Na realizacji Szpital Murcki przejdź przez odnośnik do głównej strony Katowic.
6. Sprawdź przyciski cennika i kontaktu na komputerze oraz telefonie.
7. Porównaj dotychczasowe galerie, stronę główną i kontakt. Nie wysyłaj próbnego formularza bez potrzeby: może wysłać prawdziwy email.

## Kontrola techniczna

- `npm run build`: poprawna kompilacja i wygenerowanie 72 stron technicznych/publicznych; sitemap zawiera 70 publicznych adresów.
- Wszystkie 70 adresów: HTTP 200, jeden H1 i poprawny canonical wskazujący adres produkcyjny.
- 3276 wystąpień linków wewnętrznych: cele istnieją w routingu lub zasobach publicznych.
- 402 odwołania do zdjęć: pliki istnieją, parametry wersjonowania zdjęć uwzględnione w kontroli.
- FAQ na 4 rozbudowanych stronach: pytania i odpowiedzi z JSON-LD obecne także w widocznym HTML.
- Cztery rozbudowane strony: kontrola w przeglądarce przy szerokościach 1280, 390 i 320 px. Bez poziomego przepełnienia strony.
- Przejście z poradnika biurowego do kontaktu działa. Formularz renderuje się; podczas tej kontroli nie wysłano wiadomości ani nie testowano dostarczenia emaila.
- Galeria laminatów: otwarcie lightboxa, następne zdjęcie i zamknięcie działają. Nie zmieniono danych galerii ani plików zdjęć.
- Naprawiony odnośnik z realizacji Szpital Murcki sprawdzony kliknięciem w przeglądarce: prowadzi do głównej strony Katowic. Trzy nowe karty na tej stronie ładują zdjęcia i podają właściwe lokalizacje.
- Podczas pierwszej równoległej kompilacji dev jeden adres realizacji odpowiedział HTTP 500 z błędem odczytu JSON. Po zakończeniu kompilacji ponowny odczyt dał HTTP 200 i poprawną treść. Build produkcyjny zakończył się bez tego błędu.

Szczegółowy wynik: [seo-local-check-results-2026-10-12.json](./seo-local-check-results-2026-10-12.json).

## Zrzuty do przeglądu

| Strona | Komputer | Telefon |
| --- | --- | --- |
| Kraków | [Podgląd](./seo-preview-2026-10-12/krakow-desktop.jpg) | [Podgląd](./seo-preview-2026-10-12/krakow-mobile.jpg) |
| Katowice | [Podgląd](./seo-preview-2026-10-12/katowice-desktop.jpg) | [Podgląd](./seo-preview-2026-10-12/katowice-mobile.jpg) |
| Folie przeciwsłoneczne Katowice | [Podgląd](./seo-preview-2026-10-12/solar-katowice-desktop.jpg) | [Podgląd](./seo-preview-2026-10-12/solar-katowice-mobile.jpg) |
| Folie do biura | [Podgląd](./seo-preview-2026-10-12/biuro-desktop.jpg) | [Podgląd](./seo-preview-2026-10-12/biuro-mobile.jpg) |

[Sekcja realizacji na stronie Katowic](./seo-preview-2026-10-12/katowice-realizacje.jpg).

## Po zatwierdzeniu i wdrożeniu

Poproś o ponowne indeksowanie przede wszystkim poniższych adresów. Dopiero po publikacji mają one nową treść.

https://folielumera.pl/montaz-folii-okiennych-krakow

https://folielumera.pl/montaz-folii-okiennych-katowice

https://folielumera.pl/folie-przeciwsloneczne-katowice

https://folielumera.pl/folie-przeciwsloneczne-krakow

https://folielumera.pl/folie-okienne-do-biura

https://folielumera.pl/realizacje/folie-przeciwsloneczne-szpital-murcki-katowice

https://folielumera.pl/realizacje/folie-mrozone-przedszkole-swietochlowice

Zmiany ułatwiają wyszukiwarkom odczytanie i powiązanie treści. Pozycji nr 1 ani wzrostu wyświetleń nie można potwierdzić przed wdrożeniem i pomiarem w Search Console.
