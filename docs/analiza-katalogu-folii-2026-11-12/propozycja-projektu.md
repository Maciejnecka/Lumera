# Porównywarka i przewodnik po foliach Lumera

Stan analizy: 12 listopada 2026. To propozycja projektu; nie zmienia wdrożonej strony. Ocena oparta na lokalnej strukturze Lumery, publicznym katalogu Marketfolie/Amplus oraz wskazanych materiałach konkurencji i producentów. Nie obejmuje prywatnych ofert hurtowych ani nieopublikowanych wariantów dostawcy. Zawartość mapy witryny i kart sklepu może się zmieniać.

Odczytano 194/194 kart wskazanych w publicznej mapie produktów i 30/30 adresów list kategorii, bez błędów. Lista wszystkich produktów, źródeł i odczytanych parametrów znajduje się w `inwentaryzacja-amplus.md`. Sprawdzono opisy i tabele HTML; nie wykonano pełnego audytu załączników PDF i certyfikatów. Liczba kart obejmuje narzędzia, akcesoria, próbki i rolki.

## Rekomendacja

Utworzyć jeden nowy adres `/porownanie-folii-okiennych`, połączony z istniejącymi kategoriami. Strona ma tłumaczyć zależności, porównywać warianty i prowadzić do doboru z montażem. Modele, poziomy przyciemnienia, kolory i szerokości nie powinny automatycznie stawać się osobnymi podstronami SEO.

Kluczowy cel biznesowy: klient rozumie, dlaczego wskazane 2–3 rozwiązania odpowiadają jego potrzebie, i wysyła zapytanie zawierające wybrane modele oraz informacje o przeszkleniu. Sam dobór przez porównywarkę jest wstępny; zgodność z konkretnym szkłem zatwierdza monter.

## Wnioski z przeglądu rynku

| Źródło | Obserwacja | Wniosek projektowy dla Lumery |
| --- | --- | --- |
| Amplus / Marketfolie | Kategorie, karty modeli, tabele, materiały do pobrania, próbki i zakup materiału na wymiar | Wykorzystać identyfikację produktów i dokumentację. Wyjaśnić konsekwencje różnic, nie powielać katalogowych opisów ani cen detalicznych jako ceny montażu Lumery. |
| De Novo | Zbiorcze tabele modeli kilku producentów i informacja o szybie referencyjnej | Tabela jest potrzebna, lecz obok wartości musi być proste objaśnienie i informacja, czy wyniki można porównać. |
| PWJ | Poradnik wyboru pomiędzy neutralną a refleksyjną folią, uwzględniający zastosowanie i szkło | Zaczynać od celu klienta, potem pokazywać odpowiednie warianty. |
| Folie-expert | Objaśnienia VLT i TSER w obrębie kategorii, funkcja porównania produktów | Wyjaśnienia parametrów umieścić blisko tabeli. Nie zakładać, że użytkownik zna skróty. |
| Dekea | Pytania klientów, wygląd, prywatność w dzień i wieczorem | Dodać scenariusze użytkowania i zdjęcia. Twierdzenia liczbowe weryfikować w kartach technicznych. |
| LLumar | Udostępnia zasoby porównawcze, dokumentację i wizualizatory | Oddzielić orientacyjny podgląd wyglądu od danych pomiarowych. |

Ocena interfejsów dotyczy publicznie odczytanych treści i dostępnych odnośników. Nie oznacza przeprowadzenia pełnych testów interakcji lub ścieżki zakupu na każdej stronie.

## Taksonomia: różne osie, a nie rozłączne szuflady

Jedna folia może łączyć kilka cech. Przeciwsłoneczna to funkcja; zewnętrzna to miejsce aplikacji; lustrzana to efekt optyczny; ceramiczna to określenie technologii; selektywna opisuje relację przepuszczania różnych części widma; premium to nazwa handlowa serii. Zależności te nie tworzą jednej hierarchii.

Użytkownik powinien rozróżniać:

1. Funkcję: ograniczanie zysków słonecznych, prywatność, dekorację, ograniczanie skutków rozbicia, ochronę powierzchni, ograniczanie strat ciepła lub zastosowanie specjalne.
2. Podłoże: szkło pojedyncze, pakiet zespolony, szkło laminowane/hartowane, poliwęglan lub inna powierzchnia dopuszczona przez producenta.
3. Miejsce i warunki aplikacji: wewnątrz, na zewnątrz, szyba pionowa lub skośna, ekspozycja, dostęp i krawędzie.
4. Efekt wizualny: jasny, przyciemniony, refleksyjny, matowy, wzór, kolor.
5. Rodzinę handlową i model: np. Silver Comfort 20 albo Perfecta Duo Premium.
6. Wariant zamówienia: szerokość rolki, formatka, długość, kolor. Sam rozmiar nie jest nowym rodzajem folii.

Nazwy „matowa”, „mleczna”, „satynowa”, „szroniona” i „mrożona” częściowo się pokrywają. Nie tworzyć sztucznych technicznych różnic na podstawie samych nazw; decyduje produkt, wygląd próbki i karta.

## Struktura adresów i odpowiedzialność za temat

| Miejsce | Zadanie |
| --- | --- |
| Nowy `/porownanie-folii-okiennych` | Porównanie funkcji, zależności, filtracja modeli, słownik i wybór 2–3 wariantów. |
| Istniejący `/folie-przeciwsloneczne` | Główna oferta doboru i montażu, efekty, cena, realizacje; sekcja wyjaśniająca rodziny przeciwsłoneczne. |
| Istniejące kategorie folii | Samodzielna oferta danej usługi, najważniejsze warianty i link do odpowiedniej sekcji porównywarki. |
| Istniejące realizacje | Dowody wykonania: rzeczywisty zakres, zdjęcia, warunki aplikacji, model tylko wtedy, gdy jest potwierdzony. |
| Kontakt | Przeniesione wybrane warianty oraz zdjęcia, wymiary, lokalizacja i rodzaj szkła. |

Na start: jeden nowy indeksowalny adres. Sekcje `#przeciwsloneczne`, `#prywatnosc`, `#bezpieczenstwo`, `#dekoracyjne` i `#specjalistyczne` są fragmentami tego samego dokumentu. Nie tworzyć kombinacji modeli z Krakowem i Katowicami ani indeksowanych stron dla każdej kombinacji filtrów. Istniejących adresów nie scalać bez sprawdzenia ich roli i danych Search Console.

## Podział katalogu dla użytkownika

| Grupa | Podział wewnętrzny | Co porównywać |
| --- | --- | --- |
| Ograniczanie nagrzewania i olśnienia | Refleksyjne, neutralne, selektywne; w każdej właściwe modele wewnętrzne i zewnętrzne | Światło, energia słoneczna, odbicia, kolor, zastosowanie, warunki pomiaru. |
| Prywatność | Dzienna z zachowaniem widoku, stała matowa, przełączana LCD/PDLC | Widok w obu kierunkach, warunki oświetlenia, kontury, zasilanie, montaż. |
| Dekoracja | Maty i kolory, transparentne kolory, wzory i pasy | Przejrzystość, rozproszenie, wzór i jego skala, kolor, zastosowanie. |
| Bezpieczeństwo i ochrona | Utrzymanie odłamków, utrudnienie sforsowania, ochrona powierzchni | Dokumentacja systemu, cel, szkło, mocowanie, grubość, wymagania montażowe. |
| Zastosowania specjalne | Poliwęglan, ograniczanie strat ciepła, projekcja, ekrany/prywatność ekranów, ekranowanie i inne rzeczywiście oferowane rozwiązania | Parametry odpowiednie dla funkcji; żadnej jednej wspólnej oceny „najlepsza folia”. |

Anty-UV traktować również jako cechę przekrojową. Wiele modeli przeciwsłonecznych ma filtr UV, ale deklaracja UV sama nie opisuje ograniczenia zysków ciepła. Folie samochodowe, PPF, narzędzia, akcesoria, próbki i hurt z katalogu Amplus uwzględnić w inwentaryzacji, lecz nie przenosić automatycznie do oferty budowlanej Lumery. Podobnie nie rozszerzać oferty o każdą niszową folię tylko dlatego, że dostawca ją sprzedaje.

## Rodziny przeciwsłoneczne — proponowane grupowanie

- Silver Economic: warianty 20 i 40.
- Silver Comfort: warianty 20, 40 i 50.
- Silver Duo Premium: warianty 20 i 40.
- Neutral: warianty 25 i 40.
- Titan Duo Premium: warianty 25 i 40.
- Selektywne Perfecta oraz Perfecta Duo Premium.
- Refleksyjne kolorowe: Blue Silver, Green Silver, Bronze Silver.
- Wewnętrzne Silver: R20, R30, R50 i kolory — osobne pole miejsca montażu, nie zamienniki zewnętrznych z automatu.
- Rozwiązania do innych warunków, np. szyby skośne i poliwęglan: pokazywać oddzielnie, według dokumentacji konkretnego modelu.

To grupowanie do opracowania treści i interfejsu, a nie deklaracja, że Lumera oferuje obecnie wszystkie te materiały. Ostateczna lista powinna wynikać z rzeczywiście montowanych produktów i dostępnej dokumentacji.

Nie budować automatycznej drabiny „Economic < Comfort < Premium” we wszystkich cechach. Cena, jasność, redukcja energii, odbicia i gwarancja to osobne porównania. Nazwa produktu i liczba w modelu nie zastępują rzeczywistej wartości przepuszczalności.

Uzupełnienie na podstawie całej inwentaryzacji: wewnętrzne selektywne obejmują Invisible Comfort i Invisible Premium; Solar Glass wymaga odrębnego opisu według dokumentacji. Tetto 40, Aqua Silver i materiały Polycarbon/Plexifol należy prezentować według ich przeznaczenia, a fotochromatyczną według zmiennej charakterystyki. Folie do rolet Matrix nie są zwykłym wariantem naklejenia na szybę.

W matowych/mrożonych ważne są również różnice aplikacji: klej kanalikowy, mikroadhezja, wersja długookresowa i deklarowane użycie wewnątrz/zewnątrz. Karta White Matte opisuje zastosowanie wewnętrzne, podczas gdy osobna folia balkonowa ma deklarację wew/zew. Nie przypisywać całej kategorii identycznej odporności.

W kategoriach bezpieczeństwa są modele przezroczyste, matowe oraz srebrne. Pokazuje to nakładanie się funkcji prywatności, optyki i bezpieczeństwa; nie oznacza zamienności produktów o podobnym wyglądzie. LCD z klejem i LCD do laminowania należy odróżnić od transformatorów, sterowników i próbek. Polaryzacja i filtr do monitora nie są automatycznie rozwiązaniem prywatności okna. Antygraffiti, osłony remontowe, materiały podłogowe, folia przeciwparowaniu i projekcyjna wymagają własnych kryteriów, a nie oceny przez jedną tabelę przeciwsłoneczną.

## Konkretne pułapki widoczne w danych dostawcy

| Przykład | Co wynika z publicznej karty | Konsekwencja dla narzędzia |
| --- | --- | --- |
| Silver 20 Comfort | Przepuszczalność światła 16%, mimo liczby 20 w nazwie | Przechowywać nazwę modelu i rzeczywisty parametr jako osobne pola. |
| Silver 50 Comfort | Przepuszczalność światła 55% | Nie wyliczać wartości z cyfr w nazwie. |
| Titan 25 / Titan 40 | Podane przepuszczalności to odpowiednio 19% i 36% | Nie tworzyć jednego filtra na podstawie oznaczenia handlowego. |
| Perfecta Duo Premium | IR 95%, całkowita redukcja promieni słonecznych 59%, światło 75% | Wyjaśnić trzy różne wielkości; nie podpisywać IR jako ogólnej redukcji ciepła. |
| Mirror 20 / Silver 20 Comfort | Karty pokazują te same wartości światła i redukcji energii; Mirror 20 ma też opis rodzaju Silver Comfort | Oznaczyć do potwierdzenia możliwą wspólną rodzinę/alias. Nie utożsamiać produktów tylko po podobnych liczbach. |
| PDLC — folia, próbka, transformator | Karty pokazują różne opisy napięcia i funkcji elementów zestawu | Przed publikacją parametrów zestawu potwierdzić zgodność elementów; nie łączyć automatycznie danych z różnych kart. |

Źródła szczegółowe: odnośniki do odpowiednich kart w inwentaryzacji. Są to dane i nazwy dostawcy wymagające potwierdzenia przed wykorzystaniem do doboru Lumery.

## Układ doświadczenia klienta

1. Krótka odpowiedź: jak wybrać folię i czym różnią się główne rodzaje.
2. Wejścia: „Mam za gorąco”, „Chcę prywatności”, „Chcę zachować światło”, „Chcę zabezpieczyć szkło”, „Znam model”.
3. Pytania o priorytet, oczekiwany wygląd, rodzaj przeszklenia i dostęp. Opcja „nie wiem” musi być pełnoprawna; nie zgadywać zgodności szkła.
4. Wynik: 2–3 rodziny lub modele z krótkim uzasadnieniem oraz informacją, co wymaga potwierdzenia.
5. Porównanie maksymalnie trzech modeli. Widok podstawowy: światło, ograniczanie energii, wygląd, prywatność i warunki montażu. Widok techniczny: reszta parametrów i źródła.
6. „Dlaczego te modele się różnią?” — opis kompromisów, np. jaśniejszy efekt kosztem części skuteczności albo większe odbicie elewacji.
7. Rzeczywiste zdjęcia, próbki i powiązane realizacje.
8. „Wyślij te warianty do wyceny” — wybór trafia do formularza; klient nie przepisuje nazw.

Na telefonie porównanie jako czytelne karty lub tabela z kontrolowanym przewijaniem, z identycznymi etykietami. Podstawowa treść i główne porównania muszą być dostępne bez przechodzenia kreatora. Wyszukiwarka rozpoznaje nazwy modeli i synonimy, np. mleczna/matowa i PDLC/LCD.

Symulacje wyglądu podpisywać jako orientacyjne. Nie generować pozornie pomiarowego zdjęcia przez przyciemnienie jednego obrazu o wartość VLT; wygląd zależy również od widma, refleksji, szkła i oświetlenia. Najlepszy materiał to fotografie próbek na tym samym przeszkleniu przy kontrolowanych ustawieniach aparatu i porównywalnym świetle.

## Wzorzec treści dla rodziny i modelu

Rodzina: czym jest; co zmienia; dla kogo; najważniejszy kompromis; kiedy rozważyć inną rodzinę; potwierdzone warianty; realizacja/próbka; link do porównania. Zamiast obowiązkowej długości tekstu — komplet odpowiedzi, bez powtarzania akapitów.

Model:

- producent, seria, dokładny model i identyfikator;
- zastosowanie i dopuszczone podłoża;
- opis wyglądu z obu stron;
- parametry z jednostkami i znaczeniem dla użytkownika;
- najważniejsze ograniczenia oraz braki danych;
- różnica względem najbliższego wariantu;
- dokumentacja i data sprawdzenia;
- warunki gwarancji potwierdzone dla oferty Lumery;
- możliwość poproszenia o próbkę/dobór;
- zdjęcie realnego efektu, jeśli dostępne.

Przykład redakcyjny: „Perfecta jest propozycją do rozważenia, gdy ważne jest zachowanie dużej ilości światła i ograniczenie widocznej zmiany szyby. Porównaj ją z folią refleksyjną pod kątem przepuszczalności światła oraz redukcji energii. Zastosowanie na konkretnym pakiecie i ustawienie szyby wymagają potwierdzenia.” Wartości liczbowe dołączać dopiero z przypisanego źródła i warunków pomiaru.

## Standard danych

Wspólne pola: model, aliasy, rodzina, producent, funkcje, wygląd, montaż, podłoże, ograniczenia, źródła, daty weryfikacji, realizacje, status faktycznej oferty.

Dla folii przeciwsłonecznych: przepuszczalność światła widzialnego, odbicie światła po obu stronach, przepuszczanie/odbicie/absorpcja energii słonecznej, g/SHGC i TSER jeśli określone, UV oraz IR z zakresem pomiarowym. Osobno szkło referencyjne, standard/metoda i jednostki. Zachować oryginalną nazwę pola dostawcy; nie zmieniać automatycznie „całkowitej redukcji” na TSER bez potwierdzenia definicji.

Dla folii bezpieczeństwa: badana konfiguracja, raport/klasyfikacja, grubość w µm, rodzaj szkła i wymagane mocowanie. Dla PDLC: zasilanie, tryb działania, haze/przejrzystość, rozmiar, krawędzie, sterowanie. Dla dekoracyjnych: wygląd, przepuszczalność, krycie, skala wzoru i przeznaczenie. Dla ekranowania: zakres częstotliwości, tłumienie i metoda badania; nie zastępować tych danych ogólną etykietą „antypodsłuchowa”.

Gdy brakuje danych: „brak potwierdzonej wartości” lub „wymaga konsultacji”. Nigdy 0, domyślne 99%, uniwersalna zgodność ani wnioskowanie z nazwy.

Porównywać liczby tylko w zgodnych warunkach. TSER, odbicie energii, IR i procent spadku temperatury pomieszczenia to różne wielkości. VLT nie jest dosłowną prognozą, o ile ciemniejszy będzie cały pokój. U/g i ochrona przed słońcem opisują odmienne aspekty cieplne. Gwarancja widoczna w sklepie dostawcy nie jest automatycznie gwarancją usługi Lumery.

Hierarchia źródeł: aktualna karta i dokumentacja producenta/dostawcy, dokumentacja zgodności, potwierdzenie handlowo-techniczne, następnie opis sklepu jako materiał pomocniczy. Sprzeczności zapisywać do wyjaśnienia, nie wybierać wygodniejszej liczby. Zalecenia zastosowania zatwierdza osoba techniczna.

## SEO i widoczność w odpowiedziach AI

Wartość projektu: samodzielna odpowiedź na pytania porównawcze i czytelne połączenie kategorii. Przykładowe tematy: rodzaje folii okiennych, porównanie folii przeciwsłonecznych, folia neutralna a lustrzana, Perfecta a Silver, Comfort a Duo Premium, co oznacza przepuszczalność światła, IR a redukcja energii. To hipotezy tematyczne, nie zweryfikowane wolumeny wyszukiwania.

- Jedna intencja główna nowej strony: porównywanie i zrozumienie. Ofertę montażu i lokalizacje prowadzić przez obecne strony usług.
- Ważne objaśnienia i tabele renderować w HTML, dostępne również bez kliknięcia kreatora.
- Z kategorii linkować kontekstowo do właściwej części porównania; z narzędzia wracać do kategorii, realizacji i kontaktu.
- Filtry i wybór modeli utrzymywać jako stan/fragment, bez produkowania stron indeksowanych dla każdej kombinacji. Adres kanoniczny nowego dokumentu wskazuje na niego; obecne kategorie zachowują własne canonicale.
- Dane strukturalne dobierać do widocznej zawartości: np. CollectionPage, ItemList i BreadcrumbList. Nie tworzyć fikcyjnych cen, ocen, rankingów ani ofert produktowych.
- Krótkie odpowiedzi pod konkretnymi nagłówkami, opisane tabele, pełne nazwy, autor weryfikujący technicznie, data aktualizacji i źródła pomagają jasno odczytać wiedzę.
- Zdjęcia i własne doświadczenia montażowe powinny uzupełniać dane katalogowe.
- Nie obiecywać cytowania przez LLM. Pliki llms nie zastępują dostępnej strony, dokumentacji ani indeksacji; Google nie wymaga ich dla AI Overviews/AI Mode.

## Wdrożenie w etapach

1. Uzgodnienie modeli rzeczywiście oferowanych przez Lumerę i weryfikacja dokumentacji. Przygotowanie danych i opisów rodzin. Wybranie odpowiedzialnej osoby do aktualizacji.
2. Pierwsza wersja: jeden przewodnik, pełne porównanie rzeczywiście oferowanych przeciwsłonecznych, podstawowa mapa pozostałych funkcji, porównanie trzech modeli, formularz z wyborem. Bez osobnych kart URL dla każdego produktu.
3. Rozszerzenie o prywatność, dekorację i bezpieczeństwo według właściwych parametrów. Dalsze specjalizacje tylko tam, gdzie Lumera ma ofertę i potwierdzone dane. Osobna strona modelu dopiero wtedy, gdy wnosi samodzielną wartość i uzasadnia ją popyt oraz materiały.

## Pomiar efektu

Punkt odniesienia przed wdrożeniem: zapytania i strony w Search Console, liczba zapytań ofertowych oraz ich jakość. Po wdrożeniu: wejścia na tematy porównawcze, kliknięcia z kategorii, wybory modeli, przejścia do wyceny i wysłane formularze z porównaniem. Rejestrować rzeczywiste zdarzenia zgodnie z ustawieniami zgód strony. Osobno sprawdzać, czy kilka adresów zamienia się w wynikach na te same zapytania.

Oceny po 4/8/12 tygodniach traktować jako przeglądy, nie termin gwarantowanych wyników; uwzględnić sezonowość folii przeciwsłonecznych. Dla widoczności AI użyć dostępnych raportów Bing Webmaster Tools oraz źródeł ruchu, z zastrzeżeniem niepełnego pokrycia i atrybucji. Sukces biznesowy to trafniejsze zapytania o montaż, nie sama liczba odwiedzanych modeli.

## Źródła

- [Marketfolie / Amplus — katalog](https://marketfolie.pl/)
- [Zewnętrzne przeciwsłoneczne — lista modeli](https://marketfolie.pl/pl/c/2.-Folie-przeciwsloneczne-zewnetrzne/6)
- [Mapa produktów Amplus](https://marketfolie.pl/console/integration/execute/name/GoogleSitemap/list/products/locale/pl_PL/page/1)
- [De Novo — tabele parametrów](https://denovo.com.pl/folie-przeciwsloneczne/parametry/)
- [PWJ — neutralna czy refleksyjna](https://sklep.pwj.net.pl/pl/n/Folia-przeciwsloneczna-na-okna-neutralna-czy-refleksyjna/9)
- [Folie-expert — kategoria i parametry](https://www.folie-expert.pl/folia-przeciwsloneczna)
- [Dekea — pytania i odpowiedzi](https://www.dekea.pl/pl/strona/folie-przeciwsloneczne-pytania-i-odpowiedzi)
- [LLumar — zasoby porównawcze](https://llumar.com/en/resources/window-film-performance-comparison/)
- [LLumar — arkusz danych z warunkami pomiaru](https://llumar.com/content/dam/eastman/performance-films/llumar/documents/LL0113NAEN_ArchSolarSpecs_screen.pdf)
- [3M — różne parametry dla różnych konfiguracji szkła](https://multimedia.3m.com/mws/media/1256354O/3m-sun-control-window-film-exterior-solar-series.pdf?fn=Solar-Exterior.pdf)
- [Google — funkcje AI](https://developers.google.com/search/docs/appearance/ai-features)
- [Google — nawigacja filtrowana](https://developers.google.com/crawling/docs/faceted-navigation)
- [Bing — wytyczne dla webmasterów](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)
- [Bing — pomiar widoczności AI](https://blogs.bing.com/search/2026/6/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare/)
