# Uzupełnienie parametrów porównywarki — 13.11.2026

Ponownie odczytano 37 publicznych kart materiałów; wszystkie odczyty zakończyły się poprawnie. Surowe adresy źródeł i tabele faktów zachowano wyłącznie w wewnętrznym pliku `finder-parameters-2026-11-13.json`. Skrypt odtwarzający weryfikację: `audit-finder-parameters.cjs`.

## Zakres

- Silver: Comfort 20, 40, 50 oraz Duo Premium 20 i 40. Nie dodano niepotwierdzonej odmiany 50 Duo Premium.
- Perfecta: standard i Duo Premium.
- Neutral, Invisible, matowe, mrożone, balkonowe, Polycarbon, UV, zabezpieczające, HACCP, antywłamaniowe, ochronne, Eco-Termic, LCD z klejem i projekcyjne: przypisano dane do konkretnego materiału, zamiast jednej liczby dla całej kategorii.
- Liczby i parametry materiałów są prezentowane w 17 rodzinach. Folie lustrzane korzystają z tych samych zweryfikowanych wariantów Silver; rodzina zabezpieczająca korzysta m.in. z modelu HACCP 3B3. Powtórzenia nie zwiększają liczby 37 unikalnych kart.
- Ekranowanie, antykolizja, demontaż i okleiny: dopisano właściwe kryteria techniczne. Nie przypisano im fikcyjnego procentu ochrony, tłumienia, trwałości ani grubości bez wskazanego modelu.

## Rozróżnienia w interfejsie

Przepuszczalność światła, redukcja energii słonecznej, UV i IR są odrębnymi wartościami. Gwarancja materiału nie oznacza gwarancji montażu. Oznaczenie klasy nie potwierdza automatycznie klasy dowolnego układu szyby, folii i mocowania. Brak potwierdzonego parametru nie jest zerem. Parametry LCD oddzielają napięcie folii od zasilania układu, tryb matowy od przejrzystego oraz czasy włączenia i wyłączenia. Folie projekcyjne mają własne dane gain, kontrastu i kierunku projekcji.

W wariantach do balustrady i szkła nad głową odfiltrowano materiały wyłącznie wewnętrzne; w przegrodzie wewnętrznej odfiltrowano materiały wyłącznie zewnętrzne. Dachowe zastosowanie standardowej folii UV wymaga osobnego doboru.

Poliwęglan: usunięto priorytet równowagi światła i osłony; pozostawiono jasność, mocniejszą osłonę i własny opis. Dostęp do świetlika zapisuje się wyłącznie jako zewnętrzny. Organizację dostępu i dopuszczenie materiału do danego tworzywa nadal potwierdza się przed montażem.

Nie wykorzystano zdjęć dostawcy ani fragmentów opisów marketingowych. Interfejs, publiczne dane wariantów i pliki dla LLM nie kierują do sklepu dostawcy.
