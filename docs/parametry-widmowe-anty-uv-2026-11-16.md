# Porównanie widmowe folii UV

Źródła dostarczone przez użytkownika, po jednej stronie każde:

- `C:/Users/macie/Downloads/Folia-okienna-wewnetrzna-Anty-UV-Clear-wykres.pdf`
- `C:/Users/macie/Downloads/Folia-okienna-wewnetrzna-Anty-UV-Clear-Premium-wykres.pdf`
- `C:/Users/macie/Downloads/Folia-okienna-wewnetrzna-Anty-UV-Total-wykres.pdf`
- `C:/Users/macie/Downloads/Folia-okienna-wewnetrzna-Anty-UV-Amber-wykres.pdf`

Wszystkie strony wyrenderowano i sprawdzono wizualnie. Trzy pierwsze mają oś transmisji w procentach; Amber ma skalę ułamkową 0–1. Nie opublikowano cudzych wykresów ani plików PDF. Interfejs przedstawia własne zestawienie orientacyjnych odczytów.

| Model | 380 nm | 400 nm | 420 nm | 450 nm | 500 nm |
| --- | --- | --- | --- | --- | --- |
| Clear | ok. 15% | ok. 75% | ok. 85–90% | ok. 85–90% | ok. 85–90% |
| Clear Premium | blisko 0% | ok. 40–45% | ok. 80–85% | ok. 85–90% | ok. 85–90% |
| Total | blisko 0% | blisko 0% | ok. 15–20% | ok. 65–70% | ok. 65–70% |
| Amber | ok. 1–3% | ok. 7–9% | ok. 8–9% | ok. 4–6% | ok. 5–7% |

To odczyty graficzne, nie surowe dane laboratoryjne. Brak opisanej metody, podłoża i niepewności pomiaru. Nie wyznaczono dokładnych granic odcięcia ani średnich UV; „blisko 0%” nie oznacza zera. Dotychczasowe zbiorcze UV i VLT pozostają oddzielnymi parametrami kart materiałowych. Wykresy nie uzasadniają obietnic zatrzymania blaknięcia, ochrony zdrowia, określonej żywotności eksponatu ani oceny izolacji cieplnej.

Zakres UV-A 315–400 nm i umowną granicę ze światłem widzialnym sprawdzono w pierwotnym źródle terminologii CIE: https://cie.co.at/eilvterm/17-21-008 .

Wdrożenie: porównanie na `/folie-anty-uv`, dane modeli w katalogu konfiguratora, opisy zastosowań, FAQ/schema i eksport `llms-full.txt`. Główna różnica to przebieg transmisji, nie sam odcień.
