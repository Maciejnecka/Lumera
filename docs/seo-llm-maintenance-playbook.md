# Lumera SEO / LLM Maintenance Playbook

Ten dokument jest instrukcją utrzymania SEO, LLM SEO i plików indeksujących po każdej zmianie treści na stronie Lumera. Ma pomóc kolejnemu chatowi lub agentowi nie zgubić żadnego kroku.

## Najważniejsza Zasada

Nie edytuj ręcznie `public/sitemap.xml`, `public/llms.txt` ani `public/llms-full.txt`, jeśli zmiana wynika z treści strony. Te pliki są artefaktami generowanymi.

Źródłem prawdy są dane, komponenty i generatory:

- `src/data/filmsData.js` - główne usługi i typy folii.
- `src/data/filmSeoData.js` - SEO, FAQ, efekty i informacje rozszerzone dla usług.
- `src/data/filmDecisionData.js` - logika wyboru, alternatywy i pielęgnacja usług.
- `src/data/filmExtraFaqData.js` - dodatkowe FAQ usług.
- `src/data/filmStrengtheningData.js` - bloki SEO, linki problemowe i lokalne dla usług.
- `src/data/problemPagesData.js` - strony problemowe.
- `src/data/localServicePagesData.js` - lokalne landing pages.
- `src/data/pricingPageData.js` - cennik, gwarancje i czynniki wyceny.
- `pages/[slug].js` - dynamiczne routowanie usług, problemów i stron lokalnych.
- `src/seo/pageSeo.js` - meta title, description, canonical i globalne schema.
- `scripts/generate-sitemap.cjs` - generator sitemap.
- `scripts/generate-llms.cjs` - generator `llms.txt` i `llms-full.txt`.
- `public/robots.txt` - sygnały dla crawlerów i linki do sitemap/llms.

## Dlaczego Tak

Google dla funkcji AI w wyszukiwarce nadal zaleca klasyczne fundamenty SEO: pozwolić na crawl, zadbać o linkowanie wewnętrzne, mieć tekst dostępny w HTML, dopasować dane strukturalne do widocznej treści i utrzymywać profil firmy. Google nie wymaga specjalnych plików AI do AI Overviews / AI Mode, ale `llms.txt` może działać jako dodatkowa mapa kontekstu dla modeli i agentów.

Referencje:

- Google AI features: https://developers.google.com/search/docs/appearance/ai-features
- llms.txt proposal: https://llmstxt.org/
- OpenAI crawlers: https://platform.openai.com/docs/bots
- Anthropic crawlers: https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
- Perplexity crawlers: https://docs.perplexity.ai/docs/resources/perplexity-crawlers

## Zawsze Po Zmianie

Po każdej zmianie, która dodaje lub modyfikuje treść publiczną:

1. Sprawdź, czy treść ma jedno źródło prawdy w `src/data` albo w dedykowanym komponencie.
2. Sprawdź, czy strona ma poprawny URL, tytuł, opis SEO, canonical i widoczny tekst.
3. Sprawdź, czy strona jest linkowana wewnętrznie z minimum jednego sensownego miejsca.
4. Sprawdź, czy nowy URL trafi do `public/sitemap.xml`.
5. Sprawdź, czy nowa treść trafi do `public/llms.txt` albo `public/llms-full.txt`.
6. Sprawdź, czy dane strukturalne pasują do widocznej treści.
7. Uruchom generatory i build.
8. Po deployu sprawdź URL-e produkcyjne i zgłoś najważniejsze nowe adresy w Search Console.

Komendy na Windows / PowerShell:

```powershell
npm.cmd run llms
node scripts\generate-sitemap.cjs
npm.cmd run build
```

Uwaga: używaj `npm.cmd`, jeśli `npm` blokuje się przez politykę PowerShell dla `npm.ps1`.

## Dodanie Nowej Usługi Lub Typu Folii

Przykład: nowa kategoria folii, nowa specjalistyczna usługa, osobna usługa oklein.

1. Dodaj bazowy wpis w `src/data/filmsData.js`.

Wymagane pola:

- `id` - stabilny identyfikator, używany też w cenniku i formularzu.
- `path` - publiczny slug, np. `/folie-przeciwsloneczne-zewnetrzne`.
- `name` - nazwa widoczna w menu, formularzu i stronie.
- `shortDescription` - krótki opis do kart/linków.
- `lead` - główny opis strony.
- `highlights` - korzyści.
- `parameters` - parametry, ograniczenia, przygotowanie.
- `usage` - zastosowania.
- `image` - grafika usługi.

2. Dodaj lub uzupełnij wpis w `src/data/filmSeoData.js`.

Sprawdź:

- `seoDescription`
- `effectTitle`
- `effectLead`
- `effectDetails`
- `bestFor`
- `beforeInstall`
- `faq`

3. Dodaj wpis w `src/data/filmDecisionData.js`.

Sprawdź:

- `decisionIntro`
- `chooseWhen`
- `betterAlternative`
- `maintenance`

4. Jeśli usługa potrzebuje dodatkowych pytań, dodaj je w `src/data/filmExtraFaqData.js`.

5. Jeśli usługa ma być silniej połączona z problemami i lokalizacjami, dodaj wpis w `src/data/filmStrengtheningData.js`.

Sprawdź:

- `seoContentBlocks`
- `problemLinks`
- `localLinks`
- opcjonalnie `featuredNote`

6. Jeśli usługa ma cenę, dodaj ją w `src/data/pricingPageData.js`.

Sprawdź, czy `filmId` odpowiada `id` z `filmsData.js`.

7. Sprawdź automatyczne podpięcia.

Po dodaniu do `filmsData` usługa automatycznie trafia do:

- dynamicznego routingu w `pages/[slug].js`,
- sitemap przez `scripts/generate-sitemap.cjs`,
- `llms.txt` i `llms-full.txt` przez `scripts/generate-llms.cjs`,
- menu `src/components/Navigation/Navigation.js`,
- formularza kontaktowego `src/components/ContactSection/ContactSection.js`,
- cennika, jeśli ma wpis w `pricingPageData.js`.

8. Sprawdź, czy SEO jest poprawne.

`src/seo/pageSeo.js` generuje dla filmów tytuł według wzoru:

```txt
{film.name} Kraków i Katowice | Lumera
```

Jeżeli nowa usługa wymaga innego tytułu SEO, trzeba rozważyć rozbudowę `getSeoForPath`, aby obsługiwać indywidualny `seoTitle` dla usług.

9. Po zmianie uruchom:

```powershell
npm.cmd run llms
node scripts\generate-sitemap.cjs
npm.cmd run build
```

10. Sprawdź:

```powershell
Select-String -Path public\llms-full.txt -Pattern "Nazwa nowej usługi"
Select-String -Path public\sitemap.xml -Pattern "nowy-slug"
```

## Dodanie Nowej Strony Problemowej

Przykład: „folia zamiast rolet”, „jak ograniczyć odblaski na monitorze”, „folia do pokoju dziecka”.

1. Dodaj wpis w `src/data/problemPagesData.js`.

Wymagane pola:

- `slug`
- `path`
- `title`
- `eyebrow`
- `seoTitle`
- `seoDescription`
- `lead`
- `sections`
- `recommendedFilms`
- `localLinks`
- `faq`

2. Dopilnuj linkowania.

Dodaj link do nowej strony przynajmniej z jednego miejsca:

- `src/components/WindowFilmsSection/WindowFilmsSection.js`, jeśli to problem główny,
- `problemLinks` w `src/data/filmStrengtheningData.js`, jeśli problem dotyczy konkretnej folii,
- `relatedProblems` w `src/data/localServicePagesData.js`, jeśli ma lokalny sens.

3. Sprawdź automatyczne podpięcia.

Po dodaniu do `problemPagesData` strona automatycznie trafia do:

- `getStaticPaths` w `pages/[slug].js`,
- `PageSeo` przez `src/seo/pageSeo.js`,
- `FAQPage` schema, jeśli ma `faq`,
- sitemap,
- `llms-full.txt`.

4. Po zmianie uruchom generatory i build.

5. Sprawdź, czy `recommendedFilms` i `localLinks` nie wskazują nieistniejących ścieżek.

## Dodanie Nowej Lokalnej Podstrony Usługi

Przykład: „folie przeciwsłoneczne Wieliczka”, „folie matowe Zabierzów”, „oklejanie ram okiennych Tychy”.

1. Dodaj wpis w `src/data/localServicePagesData.js`.

Wymagane pola:

- `slug`
- `path`
- `city`
- `serviceName`
- `filmPath`
- `title`
- `eyebrow`
- `seoTitle`
- `seoDescription`
- `lead`
- `useCases`
- opcjonalnie `sections`
- `relatedProblems`
- `localLinks`
- opcjonalnie `faq`

2. Linkowanie lokalne.

Dodaj powiązania:

- z głównej usługi przez `localLinks` w `filmStrengtheningData.js`,
- z innych lokalnych stron przez `localLinks`,
- z problemów przez `localLinks` w `problemPagesData.js`, jeśli strona odpowiada na realną intencję.

3. Sprawdź hub lokalny.

`src/components/LocalServicesHubPage/LocalServicesHubPage.js` grupuje strony z `localServicePagesData`, więc nowa strona powinna pojawić się automatycznie, jeśli `city` pasuje do logiki grupowania.

4. Sprawdź sitemap i LLM:

```powershell
node scripts\generate-sitemap.cjs
npm.cmd run llms
Select-String -Path public\sitemap.xml -Pattern "nowy-slug"
Select-String -Path public\llms-full.txt -Pattern "Tytuł nowej strony"
```

## Dodanie Strony Statycznej

Przykład: nowa strona `/realizacje`, `/opinie`, `/faq`, `/o-firmie`.

Strony statyczne nie trafią automatycznie do wszystkich systemów. Trzeba podpiąć je ręcznie.

1. Dodaj plik w `pages`, np. `pages/realizacje.js`, albo dodaj wpis do `localPages` w `pages/[slug].js`, jeśli ma być obsługiwany dynamicznie.

2. Dodaj wpis w `src/seo/pageSeo.js` w obiekcie `staticPages`.

Wymagane:

- title
- description

3. Dodaj stronę do `scripts/generate-sitemap.cjs` w `staticPages`.

Wymagane:

- `path`
- `priority`
- `sourceFile`
- opcjonalnie `changefreq`

4. Dodaj stronę do `scripts/generate-llms.cjs`.

Najczęściej:

- do tablicy `staticPages`, jeśli to ważna strona,
- albo do osobnej sekcji generatora, jeśli ma własne dane.

5. Dodaj linkowanie wewnętrzne:

- menu, footer, strona główna, sekcja usług, karta powiązana albo hub.

6. Jeśli strona ma FAQ, dodaj schema `FAQPage`.

7. Jeśli strona opisuje firmę, usługę, realizację lub artykuł, dobierz schema:

- `Service` dla usługi,
- `Article` lub `BlogPosting` dla poradnika,
- `CreativeWork` / `ImageObject` / `Article` dla realizacji,
- `CollectionPage` dla listy realizacji.

8. Uruchom build i sprawdź adres w przeglądarce.

## Dodanie Realizacji / Case Study

To jeszcze nie jest pełny moduł w projekcie, więc trzeba pilnować większej liczby miejsc. Docelowo najlepiej dodać osobne źródło danych, np.:

```txt
src/data/projectPagesData.js
```

Pojedyncza realizacja powinna mieć:

- `slug`
- `path`
- `title`
- `seoTitle`
- `seoDescription`
- `city`
- `serviceType`
- `relatedFilmPath`
- `problem`
- `solution`
- `result`
- `scope`
- `locationContext`
- `images`
- `alt`
- `datePublished` albo `dateCompleted`
- opcjonalnie `faq`
- opcjonalnie `relatedServices`

Minimalny model treści realizacji:

```txt
Problem klienta -> dobór rozwiązania -> zakres montażu -> efekt -> czego potrzebujemy do podobnej wyceny.
```

Po dodaniu modułu realizacji trzeba zaktualizować:

1. `pages/[slug].js`

- import `projectPagesData`,
- funkcja wyszukiwania po `path`,
- render komponentu realizacji,
- wpis w `getStaticPaths`,
- breadcrumbs,
- schema.

2. `src/seo/pageSeo.js`

- import `projectPagesData`,
- rozpoznanie realizacji w `getSeoForPath`,
- `type: 'article'` albo dedykowane typy dla Open Graph,
- opcjonalnie schema `Article`, `ImageObject`, `Service`.

3. `scripts/generate-sitemap.cjs`

- dodać `src/data/projectPagesData.js` do `dataSources`,
- ustalić priority, np. `0.70-0.78`,
- rozważyć `changefreq: 'yearly'` lub `monthly`, zależnie od aktualizacji.

4. `scripts/generate-llms.cjs`

- import/evaluate nowego data source,
- mapa `projectByPath`,
- sekcja `# Realizacje`,
- linki do powiązanych usług/problemów.

5. Widoczne linkowanie

- dodać listę realizacji na `/realizacje`,
- dodać powiązane realizacje na stronach usług,
- dodać wybrane realizacje na stronie głównej lub w `ProjectsSection`,
- dodać linki z lokalnych landing pages, jeśli realizacja jest lokalnie istotna.

6. Zdjęcia

- obrazy powinny pokazywać realny efekt, nie tylko atmosferę,
- każdy obraz powinien mieć opisowy `alt`,
- pliki powinny być zoptymalizowane,
- jeśli jest przed/po, jasno opisać który obraz jest który.

7. LLM i SEO

Realizacja musi odpowiadać na pytania:

- jaki był problem,
- jaka folia/usługa została użyta,
- gdzie była realizacja,
- jaki był efekt,
- co klient powinien wysłać, jeśli chce podobną wycenę.

8. Po zmianie:

```powershell
npm.cmd run llms
node scripts\generate-sitemap.cjs
npm.cmd run build
```

## Checklist SEO Dla Każdej Nowej Strony

Przed deployem sprawdź:

- URL jest krótki, opisowy i bez polskich znaków w slugu.
- Jest dokładnie jeden H1.
- Jest unikalny `title`.
- Jest unikalny `meta description`.
- `canonical` wskazuje właściwy adres.
- Strona ma widoczny tekst, nie tylko grafikę lub slider.
- Najważniejsza odpowiedź jest w pierwszych akapitach.
- Strona linkuje do powiązanych usług, problemów, lokalizacji i kontaktu.
- Inne strony linkują do tej strony.
- Zdjęcia mają sensowne `alt`.
- FAQ jest widoczne na stronie, jeśli jest w schema.
- Schema nie zawiera treści, której nie ma na stronie.
- Strona jest w sitemap.
- Strona jest w `llms-full.txt`.
- Strona nie jest blokowana w `robots.txt`.
- Build przechodzi.

## Checklist LLM SEO Dla Każdej Nowej Strony

LLM-y potrzebują jasnych relacji. Każda ważna strona powinna odpowiadać na:

- Kim jest Lumera w tym kontekście?
- Jaki problem rozwiązuje ta usługa lub treść?
- Dla kogo to jest?
- Kiedy to jest dobry wybór?
- Kiedy wybrać alternatywę?
- Co trzeba wysłać do wyceny?
- Jaki jest obszar działania?
- Jakie są ograniczenia i czego nie obiecywać?
- Jakie są powiązane usługi?
- Jakie są powiązane lokalizacje?
- Jakie są najczęstsze pytania?

Po dodaniu treści sprawdź:

```powershell
Select-String -Path public\llms-full.txt -Pattern "fraza-kluczowa"
Select-String -Path public\llms.txt -Pattern "fraza-kluczowa"
```

`llms.txt` nie musi zawierać każdej drobnej strony, ale `llms-full.txt` powinien zawierać pełny kontekst dla każdej ważnej usługi, problemu, lokalizacji i realizacji.

## Checklist Techniczny Przed Deployem

Uruchom:

```powershell
npm.cmd run llms
node scripts\generate-sitemap.cjs
npm.cmd run build
```

Sprawdź:

```powershell
Select-String -Path public\sitemap.xml -Pattern "nowy-slug"
Select-String -Path public\llms-full.txt -Pattern "ważna fraza"
Select-String -Path public\robots.txt -Pattern "Llms|Sitemap|OAI-SearchBot|GPTBot"
```

Jeśli działa lokalny serwer:

```powershell
npm.cmd run open
```

Sprawdź w przeglądarce:

- `/nowy-slug`
- `/sitemap.xml`
- `/llms.txt`
- `/llms-full.txt`
- `/robots.txt`

## Po Deployu

1. Sprawdź produkcyjne adresy:

- `https://folielumera.pl/nowy-slug`
- `https://folielumera.pl/sitemap.xml`
- `https://folielumera.pl/llms.txt`
- `https://folielumera.pl/llms-full.txt`
- `https://folielumera.pl/robots.txt`

2. Google Search Console:

- użyj URL Inspection dla nowych ważnych adresów,
- sprawdź, czy Google widzi prawidłowy canonical,
- poproś o indeksację najważniejszych nowych URL-i,
- prześlij sitemapę, jeśli zmieniła się struktura.

3. Rich Results Test:

- sprawdź strony z FAQ,
- sprawdź strony usług,
- sprawdź realizacje, jeśli mają schema.

4. Bing Webmaster Tools:

- prześlij sitemapę,
- sprawdź indeksację nowych URL-i.

5. Po 2-4 tygodniach:

- sprawdź w Search Console zapytania i kliknięcia,
- sprawdź, czy nowe URL-e są zaindeksowane,
- ręcznie przetestuj ChatGPT Search, Perplexity i Gemini na najważniejsze frazy,
- zanotuj, czy Lumera jest cytowana, wspominana lub pomijana.

## Frazy Do Testów Po Większej Aktualizacji

Testuj ręcznie w Google, ChatGPT Search, Perplexity i Gemini:

- `folie okienne Kraków`
- `montaż folii okiennych Kraków`
- `folie przeciwsłoneczne Kraków`
- `folia przeciwsłoneczna na okna Kraków`
- `folie okienne Katowice`
- `folie przeciwsłoneczne Katowice`
- `folie LCD Kraków`
- `folie LCD Katowice`
- `folia na okno przed sąsiadami`
- `jak ograniczyć nagrzewanie mieszkania`
- `folia na okna od południa`
- `folia na szybę do łazienki`
- `folia na witrynę sklepową`
- `okleiny architektoniczne Kraków`
- `oklejanie ram okiennych Kraków`
- `oklejanie drzwi i mebli Kraków`

## Kiedy Aktualizować `robots.txt`

`public/robots.txt` aktualizuj tylko wtedy, gdy zmienia się strategia dostępu crawlerów.

Obecna logika:

- pozwalamy zwykłym crawlerom,
- pozwalamy botom AI search i assistant retrieval,
- pozwalamy botom treningowym,
- wskazujemy sitemapę,
- wskazujemy `llms.txt`.

Jeżeli Lumera zdecyduje, że nie chce trenowania modeli na treści strony, zmień tylko boty treningowe, np. `GPTBot`, `ClaudeBot`, `Google-Extended`, `CCBot`. Nie blokuj przy okazji botów search/retrieval typu `OAI-SearchBot`, `Claude-SearchBot`, `ChatGPT-User`, jeśli celem jest widoczność w odpowiedziach AI.

## Kiedy Aktualizować `scripts/generate-llms.cjs`

Zaktualizuj generator, gdy:

- dodajesz nowy typ danych, np. realizacje,
- dodajesz nowe ważne strony statyczne,
- chcesz, żeby `llms-full.txt` zawierał nową sekcję,
- zmienia się strategia opisu Lumery dla LLM,
- chcesz dodać nowe reguły interpretacyjne.

Po zmianie generatora zawsze uruchom:

```powershell
npm.cmd run llms
```

I sprawdź wynik:

```powershell
Select-String -Path public\llms.txt -Pattern "nowa sekcja"
Select-String -Path public\llms-full.txt -Pattern "nowa sekcja"
```

## Kiedy Aktualizować `scripts/generate-sitemap.cjs`

Zaktualizuj generator sitemap, gdy:

- dodajesz nowy data source z publicznymi stronami,
- dodajesz stronę statyczną,
- zmieniasz priorytety URL-i,
- zmieniasz `changefreq`,
- dodajesz realizacje, poradniki lub blog.

Nie dopisuj ręcznie URL-i do `public/sitemap.xml`, bo zostaną nadpisane przy buildzie.

## Prompt Dla Kolejnego Chata

Użyj tego promptu, jeśli nowy chat ma kontynuować prace bez gubienia SEO/LLM:

```txt
Pracujesz w projekcie Lumera. Najpierw przeczytaj `docs/seo-llm-maintenance-playbook.md`. Następnie przeskanuj:

- `package.json`
- `pages/[slug].js`
- `src/seo/pageSeo.js`
- `scripts/generate-sitemap.cjs`
- `scripts/generate-llms.cjs`
- `public/robots.txt`
- `src/data/filmsData.js`
- `src/data/filmSeoData.js`
- `src/data/filmDecisionData.js`
- `src/data/filmExtraFaqData.js`
- `src/data/filmStrengtheningData.js`
- `src/data/problemPagesData.js`
- `src/data/localServicePagesData.js`
- `src/data/pricingPageData.js`

Ustal, czy zmiana dotyczy: nowej usługi, strony problemowej, lokalnej strony, strony statycznej, realizacji/case study, cennika, schema, robots, sitemap albo LLM. Nie edytuj ręcznie `public/sitemap.xml`, `public/llms.txt` ani `public/llms-full.txt`, jeśli można je wygenerować.

Po zmianie zawsze sprawdź:

1. Czy nowa treść ma źródło prawdy w `src/data` albo dedykowany komponent.
2. Czy URL trafia do routingu.
3. Czy `PageSeo` generuje poprawny title, description i canonical.
4. Czy schema pasuje do widocznej treści.
5. Czy strona ma linki wewnętrzne do usług, problemów, lokalizacji i kontaktu.
6. Czy sitemap zawiera nowy URL.
7. Czy `llms-full.txt` zawiera nową treść.
8. Czy `robots.txt` nadal wskazuje sitemapę i `llms.txt`.

Na Windows używaj:

`npm.cmd run llms`
`node scripts\generate-sitemap.cjs`
`npm.cmd run build`

Na końcu podaj krótkie podsumowanie: zmienione pliki, nowe URL-e, co zostało podpięte pod SEO, co zostało podpięte pod LLM, jakie komendy przeszły i co sprawdzić po deployu w Search Console.
```

## Szybka Tabela Decyzyjna

| Zmiana | Gdzie dodać treść | Routing | SEO | Sitemap | LLM |
| --- | --- | --- | --- | --- | --- |
| Nowa usługa | `filmsData`, `filmSeoData`, `filmDecisionData`, opcjonalnie `filmExtraFaqData`, `filmStrengtheningData`, `pricingPageData` | automatycznie przez `pages/[slug].js` | automatycznie przez `pageSeo.js`, chyba że potrzebny custom title | automatycznie | automatycznie |
| Nowy problem | `problemPagesData` | automatycznie | automatycznie + FAQ schema | automatycznie | automatycznie |
| Nowa lokalna usługa | `localServicePagesData` | automatycznie | automatycznie | automatycznie | automatycznie |
| Nowa strona statyczna | `pages/...` lub `pages/[slug].js` | ręcznie | ręcznie w `pageSeo.js` | ręcznie w `generate-sitemap.cjs` | ręcznie w `generate-llms.cjs` |
| Realizacja / case study | najlepiej nowy `projectPagesData.js` | ręcznie rozszerzyć `pages/[slug].js` | ręcznie rozszerzyć `pageSeo.js` | ręcznie rozszerzyć generator | ręcznie rozszerzyć generator |
| Zmiana ceny | `pricingPageData.js` | bez zmian | bez zmian lub opis cennika | bez zmian | automatycznie po `npm.cmd run llms` |
| Zmiana dostępu botów | `public/robots.txt` | bez zmian | techniczne | bez zmian | pośrednio |

## Najczęstsze Błędy

- Dodanie strony do komponentu, ale bez sitemap.
- Dodanie URL-a do sitemap ręcznie zamiast do generatora.
- Dodanie treści na stronie, ale bez `llms-full.txt`.
- Dodanie FAQ w schema, którego użytkownik nie widzi na stronie.
- Dodanie nowego slug bez linkowania wewnętrznego.
- Dodanie strony statycznej bez wpisu w `pageSeo.js`.
- Dodanie realizacji tylko jako karta na stronie głównej, bez osobnego URL-a.
- Zmienienie cennika na stronie, ale bez aktualizacji `pricingPageData.js`.
- Zablokowanie bota search/retrieval razem z botem treningowym.
- Testowanie `npm run ...` w PowerShell zamiast `npm.cmd run ...`, gdy system blokuje `npm.ps1`.
