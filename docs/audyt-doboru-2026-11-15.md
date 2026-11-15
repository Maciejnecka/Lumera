# Audyt pracowni doboru folii Lumera — 15 listopada 2026

Audyt dotyczy aktualnego projektu lokalnego `/porownanie-folii-okiennych`, po dodaniu matowych kolorów. Obejmuje kod, gotowy HTML, testy logiki i ręczne sprawdzenie interfejsu. Nie jest raportem z Search Console, badaniem użytkowników ani pomiarem Core Web Vitals.

## Ocena

| Obszar | Ocena ekspercka | Wniosek |
| --- | --- | --- |
| Funkcjonalność | 8/10 | Spójny dobór potrzeb, rozdzielone podłoża, warianty, zapis wyniku i przekazanie do wyceny. Nadal potrzebna pełniejsza macierz ograniczeń konkretnych materiałów. |
| Użyteczność | 8/10 | Zwarta lista rekomendacji, wyróżniona wycena i przegląd kategorii są czytelniejsze. Całość pozostaje długa, a tabele wymagają uwagi na telefonie. |
| Gotowość techniczna SEO | 8/10 | Treść generowana w HTML, canonical, meta, linkowanie, mapa strony i uporządkowane dane są obecne. Publiczny adres zwraca obecnie 404. |
| Treść i przygotowanie do wyszukiwania AI | 7/10 | Dobre porównania i konkretne odpowiedzi. Warto mocniej wyeksponować autorstwo, aktualność i własne doświadczenie montażowe. Brak podstaw do oceny faktycznej widoczności. |

Oceny są heurystyczne, nie są wynikami Lighthouse ani prognozą pozycji w Google.

## Zmiany wykonane w tej turze

- Folie matowe pozostają jedną kategorią. Obok White Matte są Silver, Grey, Bronze, Yellow, Red i Green Matte — 7 wariantów, osobne wartości światła i redukcji energii oraz własne kolory podglądu.
- Karty i odczytane parametry zapisano w `analiza-katalogu-folii-2026-11-12/matte-parameters-2026-11-15.json`. Nie dodano fikcyjnego niebieskiego wariantu, którego nie ma na aktualnej liście produktów tej kategorii.
- Usunięto resetowanie wyniku przy przechodzeniu odnośnikami między sekcjami. Przy wejściu na sekcję przywracany jest także zapis sesji.
- Wyszukiwarka uwzględnia kolory oraz zapis bez polskich znaków, np. „zolty”.
- Dla Silver Matte uwzględniono potwierdzone wykluczenie pakietu trzyszybowego oraz opisano pozostałe ograniczenia z karty. Stary link z takim niedopuszczonym wyborem otrzymuje wariant zgodny z tym filtrem; pełna ocena szyby nadal jest potrzebna.

## Potwierdzone elementy

- Testy: 1776 kombinacji odpowiedzi, 96 kombinacji dekorów/powierzchni/stron, testy danych, linków i podsumowań. Weryfikacja kolorów, rozdzielenia balustrad od matów wewnętrznych oraz 58 unikalnych modeli.
- Ręcznie sprawdzono wybór Red Matte, zmianę barwy, zachowanie wyniku po odnośniku do sekcji i obecność Red Matte oraz wybranej powierzchni w formularzu. Nie wysyłano wiadomości do firmy.
- Sprawdzono przegląd 7 matów, responsywność i przewijanie tabeli na szerokości telefonu. W badanym stanie strona nie wychodziła poza viewport.
- Gotowy HTML zawiera 21 rozwiązań i wszystkie 58 nazw modeli. Treść nie jest uzależniona od klikania ani pobierania katalogu z zewnętrznej strony.
- Jest dokładnie jeden H1, opis meta, canonical do `https://folielumera.pl/porownanie-folii-okiennych`, `index, follow`, wpis w sitemapie i odnośniki z menu, strony głównej, stopki i stron usług.
- JSON-LD zawiera LocalBusiness, WebSite, BreadcrumbList, CollectionPage i FAQPage; FAQ ma 20 pytań. Nie stwierdzono brakujących lokalnych stron docelowych w linkach z wygenerowanego HTML.
- Nie ma linków odsyłających klienta do Amplus/Marketfolie. Pliki LLM uwzględniają nowe modele.
- Surowy HTML ma około 160 kB. Build raportuje około 250 kB First Load JS dla tej podstrony. To wskaźniki rozmiaru, nie wynik szybkości na telefonie.

Szczegóły automatycznych odczytów: `audyt-doboru-2026-11-15.json`; powtarzalny skrypt: `../scripts/audit-film-finder-page.cjs`.

## Najważniejsze dalsze działania

### P0 — publikacja i indeksacja

Sprawdzenie publicznego adresu podczas audytu zwróciło HTTP 404, bez konfiguratora. Projekt działa lokalnie. Dopóki nowa wersja nie zostanie opublikowana pod adresem canonical, nie ma podstaw, aby oczekiwać efektu SEO tej podstrony. Po publikacji trzeba sprawdzić HTTP 200, canonical, dostęp dla robotów, mapę strony i inspekcję URL w Search Console. Nie wykonano wdrożenia w ramach tego zadania.

### P1 — pełniejsza kwalifikacja techniczna modeli

Przewodnik dobrze dobiera funkcję i efekt, ale pola o rodzaju szyby i dostępie nie opisują wszystkich ograniczeń materiału. Potrzebna jest macierz: model, typ szyby, powłoki, powierzchnia tafli, ekspozycja, dopuszczona strona montażu i źródło ograniczenia. Znane wykluczenia powinny blokować model, a brak danych kończyć się statusem „wymaga sprawdzenia”. Nie wolno interpretować samego pojawienia się modelu jako potwierdzenia zgodności.

Przykład zweryfikowany podczas audytu: [karta Silver Matte](https://marketfolie.pl/pl/p/Folia-okienna-matowa-Silver-Matte-Lite-Solar/111) zawiera ograniczenia dla pakietów trzyszybowych, powierzchni i współczynnika U, z odrębnymi wyjątkami dla szkła hartowanego. Wdrożono filtr znanego pakietu trzyszybowego i opis ograniczeń; pozostałe wymagają dodatkowych danych. Tę samą pracę trzeba systematycznie wykonać dla innych modeli.

### P1 — pomiar, czy narzędzie pomaga klientom

W kodzie konfiguratora nie znalazłem zdarzeń mierzących jego ścieżkę. Istnieje integracja tagu Google Ads w komponencie zgód, ale to nie potwierdza pomiaru porzuceń doboru. Warto mierzyć rozpoczęcie, osiągnięcie kolejnych etapów, wybór wariantu, przejście do formularza i skuteczne wysłanie — bez treści opisów klientów. Po publikacji pozwoli to ocenić, czy problemem jest krok, tabela czy formularz. Ręczne badanie z kilkoma klientami będzie bardziej miarodajne niż dalsze zmiany wyłącznie według naszego gustu.

### P2 — mocniejszy pierwszy komunikat i rozdzielenie zadań

Obecny H1 „Twoja przestrzeń. Twój efekt. Dobrana folia.” jest estetyczny, lecz mało konkretny. Proponuję „Dobierz folię okienną lub okleinę do swojej przestrzeni”. Tytuł można doprecyzować do „Dobór folii okiennych — porównanie folii i oklein | Lumera”. Na początku warto dać krótkie skróty: „Pomóż mi wybrać”, „Porównaj rodzaje folii”, „Mam pytanie”. Wszystkie powinny zachowywać wynik.

### P2 — lepszy kontekst danych i porównania mobilne

Przy tabelach dodać datę ostatniej weryfikacji danej serii i informację, na jakim przeszkleniu określono parametry, jeśli karta ją podaje. Utrzymać wewnętrzny rejestr źródeł bez wysyłania klienta do dostawcy. Na telefonie przyda się nieruchoma kolumna nazw parametrów. Liczby dziesiętne warto formatować po polsku, np. 17,5%, a nie 17.5%. Kolory SVG pozostają ilustracją, nie wzornikiem produktu.

### P2 — własna wiedza zamiast dalszego mnożenia podstron

Dodać 3–5 krótkich, autorskich przykładów decyzji z praktyki: jasne mieszkanie, witryna, gabinet, balustrada i odnowienie drzwi. Każdy powinien wyjaśniać cel, kompromis i powód wyboru, bez wymyślonych realizacji, cen czy wyników temperatury. Podstrona powinna celować w dobór i porównanie, a istniejące strony usług w montaż i lokalizację. Nie tworzyłbym automatycznie osobnej strony dla każdego z 58 modeli.

### P2 — wydajność po publikacji

Zmierzyć LCP, INP i CLS na stronie produkcyjnej, na urządzeniach mobilnych. Następnie rozważyć opóźnienie ładowania interaktywnych scen i ograniczenie ciężaru skryptów współdzielonych, zachowując opisy i dane w HTML. W tym audycie nie wykonano Lighthouse ani badań danych terenowych i nie ma podstaw do przypisywania stronie wyniku Core Web Vitals.

## SEO, GEO i dane uporządkowane

Przygotowanie pod AI opiera się tutaj na czytelnym tekście, porównaniach, odpowiedziach i możliwości dotarcia do usług. To dobry kierunek. Potrzebne są jeszcze aktualność, autorstwo i własne doświadczenie; sam plik llms.txt nie stanowi przewagi rankingowej.

Google wskazuje, że do AI Overviews/AI Mode stosuje się podstawowe zasady SEO i nie są wymagane specjalne pliki ani specjalny schemat AI: [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features). Google opisuje także brak wpływu llms.txt na jego widoczność oraz zakończenie wyświetlania wyników rozszerzonych FAQ od maja 2026: [aktualizacje dokumentacji](https://developers.google.com/search/updates). FAQ pozostaje użyteczne dla ludzi; FAQPage można zachować jako opis treści, ale nie traktować go jako sposobu na dodatkowy format wyniku Google.

## Kolejność prac

1. Domknąć kwalifikację techniczną modeli i opublikować zatwierdzoną wersję pod właściwym adresem.
2. Potwierdzić indeksowalność, wdrożyć pomiar ścieżki i zebrać pierwsze obserwacje klientów.
3. Dopracować H1, skróty, daty parametrów i tabele mobilne.
4. Rozwijać własne przykłady decyzji oraz optymalizować wydajność według realnych pomiarów.
