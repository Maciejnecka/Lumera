# Demontaż folii z witryn lokalu usługowego – Kraków

- Adres podstrony: `/realizacje/demontaz-folii-z-witryn-krakow`.
- Lokalizacja: Kraków. Data publikacji: 2026-11-25; data wykonania nie została podana.
- Realizacja druga w danych, indeksie oraz wyróżnionych realizacjach strony głównej. Grudziądz pozostaje pierwszy.
- Galeria zawiera wszystkie 11 zdjęć w kolejności numerów plików źródłowych 1–11. WebP bez kadrowania: dłuższy bok do 2400 px, miniatury do 600 px, okładka z 1.jpg o szerokości 1600 px. Łącznie około 8,96 MiB zamiast około 90 MiB źródłowych JPG.
- Dwukierunkowe powiązanie z `/demontaz-folii-okiennych`, filtr „Demontaż folii okiennych”, temat formularza `film-removal`.
- Opcjonalne etykiety szablonu pozwalają opisać demontaż zamiast montażu, bez zmiany tekstów innych realizacji.
- SEO: title, description, canonical, Open Graph, Article, BreadcrumbList, FAQPage, opisy alt oraz zaktualizowane sitemap.xml, llms.txt i llms-full.txt.

## Weryfikacja

- `npm.cmd run build` zakończony poprawnie: 81 stron, 79 adresów sitemap.
- Sprawdzone HTTP 200: strona główna, indeks realizacji, nowa realizacja i oferta demontażu.
- Sprawdzone kolejność wyróżnionych realizacji, 11 zdjęć, wymiary wszystkich plików galerii, wzajemne linkowanie, jedno H1, metadane i JSON-LD oraz obecność nowego adresu w sitemap i plikach LLM.
- Podgląd przeglądarkowy: wybór zdjęcia 11, otwarcie i zamknięcie powiększenia, powrót do zdjęcia 1; kontrola wizualna w wąskim widoku.
- Podgląd lokalny działa na `http://localhost:3000`. Bez publikacji produkcyjnej, zgodnie z dotychczasowym lokalnym trybem projektu.

- Zdjęcie 8: obie widoczne twarze zamaskowane mocną mozaiką narzędziem ImageGen; osobne pliki `08-wnetrze-po-demontazu-anon.webp` i miniatura. Stare warianty usunięte z katalogu publicznego. Instrukcja edycji: zamaskować wszystkie widoczne twarze, zachowując kadr i resztę sceny.

## Końcowy audyt po anonimizacji

- Build produkcyjny: poprawny (81 stron, 79 URL-i sitemap).
- HTTP 200: nowa realizacja, indeks, strona główna, oferta oraz 39 unikalnych wewnętrznych celów linków z podstrony.
- Wszystkie 22 pliki galerii: dostępne HTTP 200, wymiary zgodne z danymi, kolejność 1–11.
- SEO: jeden H1, title, description, canonical, Open Graph, Article, FAQPage, BreadcrumbList; brak noindex oraz nazwy klienta i ulicy w HTML.
- Przeglądarka: wybór każdego zdjęcia 1–11, powiększenie zdjęcia 8, zamknięcie powiększenia, CTA z wybranym tematem demontażu, połączone filtry demontażu i Krakowa. Widok 319 px bez poziomego przepełnienia. Formularza nie wysyłano.
- Publiczna domena w dniu audytu: nowy URL zwraca 404; indeks, oferta i sitemap zwracają 200, ale nie zawierają nowej realizacji. Wymagane wdrożenie przed zgłoszeniem nowego adresu w Search Console.

## Optymalizacja zdjęć

- Zestaw 23 WebP zmniejszony z 8 805 856 do 3038078 bajtów (o 65.5%).
- Duże zdjęcia: dłuższy bok do 1800 px, jakość WebP 72; źródłem były oryginalne JPG, a dla zdjęcia 8 zanonimizowany PNG.
- Miniatury: dłuższy bok do 320 px, jakość 68. Okładka: 1200 × 900 px, jakość 72.
- Zachowano wszystkie kadry, kolejność 1–11 i maskowanie twarzy. Wymiary w danych zaktualizowane. Szczegółowe wagi w sąsiednim raporcie JSON.
