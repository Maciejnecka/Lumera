# Realizacja: oklejanie szafy w Katowicach

Adres: `/realizacje/oklejanie-szafy-folia-architektoniczna-katowice`.

## Treść i integracja

- Źródło treści: `src/data/projectPagesData.js`, istniejący routing realizacji i wspólna galeria.
- Pięć przekazanych zdjęć w WebP, osobne miniatury i okładka 1200 × 460 (około 52 KB). Zachowano proporcje, porównania i oryginalną zawartość zdjęć.
- Opis problemu, rozwiązania, efektu, zakresu prac i informacji potrzebnych do wyceny; sześć widocznych pytań FAQ.
- Lokalizacja Katowice pochodzi z polecenia użytkownika. Nazwa folderu źródłowego nie określa lokalizacji publikowanej realizacji.
- Nie podano niepotwierdzonego producenta, numeru dekoru, ceny, terminu prac ani daty wykonania. Daty publikacji i modyfikacji oznaczają przygotowanie podstrony.
- Drugie porównanie opisano jako element szafy ułożony poziomo podczas aplikacji, bez przypisywania realizacji dodatkowej renowacji stołu.
- Linki przychodzące: strona główna, katalog realizacji, główna usługa oklein i laminatów, oklejanie drzwi i mebli Katowice, okleiny i laminaty Katowice.
- Wspólny filtr „Laminaty architektoniczne” i obszar „Katowice i okolice”.
- Przycisk wyceny wybiera temat `architectural-wraps` w istniejącym formularzu kontaktowym.

## SEO

- Indywidualny title (52 znaki), description (150 znaków), canonical, Open Graph i Twitter z okładką.
- Jeden H1, opisowe nagłówki, podpisy i alty zdjęć.
- Schema Article z kategorią laminatów architektonicznych, BreadcrumbList i FAQPage zgodne z widoczną treścią.
- Sitemap i pliki LLM wygenerowane ze źródeł; generator opisuje również realizacje meblowe.
- Uzupełniono opisy katalogu i sekcji realizacji, aby obejmowały okleiny architektoniczne.

## Weryfikacja

- `npm.cmd run build` — sukces, 74 wygenerowane strony; postbuild wygenerował sitemap z 72 adresami i oba pliki LLM.
- HTTP 200: `/`, `/realizacje`, nowa realizacja, `/okleiny-i-laminaty-architektoniczne`, `/oklejanie-drzwi-i-mebli-katowice`, `/okleiny-i-laminaty-katowice`, `/kontakt`.
- Sprawdzono metadane i JSON-LD w HTML odpowiedzi serwera oraz linki przychodzące z pięciu powiązanych stron.
- Wymiary pięciu zdjęć i pięciu miniatur odpowiadają metadanym zapisanym w danych realizacji.
- Nowy adres występuje w `sitemap.xml`, `llms.txt` i `llms-full.txt`.
- Przeglądarka: galeria, wybór miniatur, lightbox, strzałka klawiatury i Escape; podgląd mobilny 390 × 844 bez poziomego przepełnienia strony i bez uszkodzonych obrazów.
- Połączone filtry laminatów i Katowic pokazują nową realizację. Przejście do kontaktu wybiera „Okleiny i laminaty architektoniczne”.
- Brak błędów i ostrzeżeń w odczytanym dzienniku przeglądarki.

## Podgląd lokalny

Podgląd działa na `http://localhost:3000`. Plik `podglad-realizacji-katowice.cmd` otwiera nową realizację przy działającym serwerze lub uruchamia `npm.cmd run open` i pokazuje adres do otwarcia po komunikacie Ready. Plik należy zachować w katalogu projektu.

## Po publikacji

Nie wykonano wdrożenia produkcyjnego. Po publikacji sprawdzić adres produkcyjny i zgłosić nową realizację oraz zaktualizowany katalog `/realizacje` w Google Search Console.
