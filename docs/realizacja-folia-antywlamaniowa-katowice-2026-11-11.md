# Folia antywłamaniowa w biurze – Katowice

## Zakres

- Nowa realizacja: `/realizacje/montaz-folii-antywlamaniowej-biuro-katowice`.
- Lokalizacja Katowice potwierdzona przez użytkownika. Model, klasa i data montażu nie zostały podane; nie przypisujemy ich do realizacji. Data publikacji: 2026-11-11.
- Zdjęcie użytkownika przekonwertowane do WebP: pełne 1448 × 1086, okładka 1200 × 900, miniatura 600 × 450. Bez kadrowania, zachowana cała grafika.
- Kolejność we wspólnym źródle danych: Grudziądz, zabezpieczenie biura w Katowicach, szafa w Katowicach, pozostałe realizacje. Obowiązuje też na stronie głównej i w schema indeksu.
- Realizacja dostępna przez filtry oraz strony folii antywłamaniowych, bezpiecznych HACCP, ochronnych i zabezpieczających. Treść wyjaśnia różnice zastosowań i nie sugeruje certyfikacji HACCP tego biura.
- Rozbudowane istniejące adresy `/folie-antywlamaniowe-krakow` i `/folie-antywlamaniowe-katowice`: różne treści, FAQ, dobór, organizacja prac i wycena, linki do kategorii i realizacji.
- Na stronie Krakowa przykład jest jednoznacznie oznaczony jako realizacja z Katowic. Opcjonalne `projectsTitle` i `projectsLead` pozwalają opisać kontekst bez przypisywania realizacji do innego miasta.
- Nowe bloki i lokalne linki w `filmStrengtheningData` dla haccp, protective i security.
- Wygenerowane sitemap, llms.txt i llms-full.txt przez istniejące generatory.

## Weryfikacja

- `npm.cmd run build` – poprawny build, 75 stron, postbuild generuje 73 URL-e sitemap oraz pliki LLM.
- `git diff --check` – bez błędów.
- Kontrola wygenerowanego HTML ośmiu stron: indeks, realizacja, dwie lokalizacje i cztery kategorie. Jedno H1, unikalne tytuły, description, canonical, linki do realizacji oraz poprawny JSON-LD; Article i FAQPage dla realizacji.
- Sprawdzone kolejność danych i wyróżnionych realizacji, cztery przypisania kategorii, istnienie zdjęć oraz obecność adresu w sitemap i obu plikach LLM.
- Przeglądarka: kolejność Grudziądz → biuro, cztery filtry, galeria i lightbox na widoku mobilnym, układ desktop, obie strony lokalne, CTA prowadzące do formularza z wybranym tematem „Folie antywłamaniowe”. Formularz nie był wysyłany.

## Publikacja i indeksacja

Zmiany przygotowane lokalnie, bez deployu. Po wdrożeniu sprawdzić produkcyjne URL-e, sitemap i canonical. W Search Console zgłosić nową realizację i dwie rozbudowane strony lokalne, potem obserwować zapytania dotyczące zabezpieczenia szyb oraz folii antywłamaniowych dla obu miast. Nie obiecujemy pozycji w wyszukiwarce.

Przyjęty kierunek: rozwój istniejących, użytecznych stron lokalnych zamiast tworzenia wielu podobnych adresów pod synonimy. Referencje: [Google – helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [Google – doorway abuse](https://developers.google.com/search/docs/essentials/spam-policies#doorway-abuse).
