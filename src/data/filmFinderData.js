export const finderPath = '/porownanie-folii-okiennych';
export const finderVersion = 1;
export const finderGoals = [
  { id: 'heat', label: 'W pomieszczeniu jest za gorąco', short: 'Mniej nagrzewania', note: 'Chcę ograniczyć słońce wpadające przez szyby.', mark: '01' },
  { id: 'privacy', label: 'Potrzebuję więcej prywatności', short: 'Więcej prywatności', note: 'Chcę osłonić widok przez szkło.', mark: '02' },
  { id: 'glare', label: 'Przeszkadza mi ostre światło', short: 'Mniej odblasków', note: 'Słońce razi lub odbija się w ekranie.', mark: '03' },
  { id: 'renovation', label: 'Chcę odnowić drzwi lub meble', short: 'Metamorfoza powierzchni', note: 'Nowy dekor na drzwiach, frontach, ladzie lub ramach.', mark: '04' },
  { id: 'safety', label: 'Chcę zabezpieczyć szkło', short: 'Bezpieczniejsze szkło', note: 'Odłamki, próba sforsowania lub ochrona powierzchni.', mark: '05' },
  { id: 'uv', label: 'Chcę ograniczyć blaknięcie', short: 'Ochrona przed UV', note: 'Zależy mi na ochronie ekspozycji i wyposażenia.', mark: '06' },
  { id: 'cold', label: 'Zimą przeszkadza mi zimne okno', short: 'Komfort zimą', note: 'Chcę sprawdzić sens folii termoizolacyjnej.', mark: '07' },
  { id: 'special', label: 'Zastosowanie specjalistyczne', short: 'Zastosowanie specjalne', note: 'Projekcja, ekranowanie, ptaki lub usunięcie starej folii.', mark: '08' },
  { id: 'other', label: 'Inny cel — opiszę go', short: 'Indywidualny cel', note: 'Napisz własnymi słowami, czego potrzebujesz.', mark: '09' },
];

export const windowSurfaces = [
  { id: 'window', label: 'Okno, drzwi balkonowe lub witryna', note: 'Szkło oddzielające wnętrze od zewnątrz.' },
  { id: 'partition', label: 'Szklana ścianka lub drzwi wewnętrzne', note: 'Przeszklenie pomiędzy pomieszczeniami.' },
  { id: 'balcony', label: 'Szklana balustrada balkonu', note: 'Dolne wypełnienia i boczne osłony.' },
  { id: 'roof', label: 'Okno dachowe lub świetlik ze szkła', note: 'Przeszklenie skośne lub nad głową.' },
  { id: 'polycarbonate', label: 'Świetlik z poliwęglanu', note: 'Tworzywo zamiast szkła.' },
];
export const wrapSurfaces = [
  { id: 'doors', label: 'Drzwi i futryny', note: 'Skrzydła, ościeżnice i detale wejścia.' },
  { id: 'furniture', label: 'Meble, szafy lub fronty', note: 'Płaskie fronty, frezy i narożniki.' },
  { id: 'counter', label: 'Recepcja', note: 'Front, boki i blat lady recepcyjnej.' },
  { id: 'frames', label: 'Ramy okienne', note: 'Profile, uszczelki i podziały okna.' },
];
// Original style directions, not names or swatches of supplier products.
export const wrapDecors = [
  { id: 'oak', family: 'wood', label: 'Jasny dąb', color: '#c8a573', detail: '#8e663e' },
  { id: 'walnut', family: 'wood', label: 'Ciemny orzech', color: '#72503c', detail: '#382c26' },
  { id: 'concrete', family: 'stone', label: 'Szary beton', color: '#a7aca8', detail: '#686f6a' },
  { id: 'marble', family: 'stone', label: 'Jasny kamień', color: '#ebe6dc', detail: '#969688' },
  { id: 'ivory', family: 'solid', label: 'Ciepła biel', color: '#eee9da', detail: '#b5b09f' },
  { id: 'anthracite', family: 'solid', label: 'Antracyt', color: '#3c4848', detail: '#1e2a29' },
  { id: 'steel', family: 'metal', label: 'Szczotkowana stal', color: '#a5b0ac', detail: '#596b64' },
  { id: 'champagne', family: 'metal', label: 'Szampański metal', color: '#b8a27c', detail: '#796344' },
];
export const wrapSideOptions = [
  { id: 'inside', label: 'Od wewnątrz', note: 'Strona skierowana do wnętrza budynku.' },
  { id: 'outside', label: 'Od zewnątrz', note: 'Strona elewacji — dobór do warunków zewnętrznych.' },
  { id: 'both', label: 'Obustronnie', note: 'Obie strony — osobna ocena warunków i materiału dla każdej z nich.' },
  { id: 'unknown', label: 'Jeszcze nie wiem', note: 'Ustalimy zakres na zdjęciach.' },
];
export const glassOptions = [
  { id: 'unknown', label: 'Nie wiem' }, { id: 'single', label: 'Szyba pojedyncza' },
  { id: 'double', label: 'Pakiet dwuszybowy' }, { id: 'triple', label: 'Pakiet trzyszybowy' },
];
export const accessOptions = [
  { id: 'unknown', label: 'Trzeba sprawdzić' }, { id: 'yes', label: 'Jest dostęp od zewnątrz' }, { id: 'no', label: 'Dostęp tylko od środka' },
];
export const conditionOptions = [
  { id: 'good', label: 'Powierzchnia jest stabilna', note: 'Chcę zmienić głównie wygląd.' },
  { id: 'damaged', label: 'Są ubytki lub odklejona powłoka', note: 'Najpierw potrzebna jest ocena przygotowania.' },
  { id: 'unknown', label: 'Nie umiem ocenić', note: 'Pokażę całość i detale na zdjęciach.' },
  { id: 'other', label: 'Inny stan — opiszę go', note: 'Napisz, co trzeba uwzględnić przy przygotowaniu.' },
];

export const finderPriorities = {
  heat: [
    { id: 'light', label: 'Jak najwięcej światła', note: 'Akceptuję kompromis na rzecz jasnego wnętrza.' },
    { id: 'balanced', label: 'Równowaga światła i osłony', note: 'Chcę porównać spokojniejsze i mocniejsze warianty.' },
    { id: 'strong', label: 'Mocna osłona przed słońcem', note: 'Akceptuję wyraźniejsze przyciemnienie i odbicie.' },
  ],
  privacy: [
    { id: 'day', label: 'W dzień, z zachowaniem widoku', note: 'Chcę patrzeć przez szybę. Efekt zależy od światła.' },
    { id: 'constant', label: 'Stała osłona, również wieczorem', note: 'Mogę zrezygnować z widoku przez oklejoną część.' },
    { id: 'switch', label: 'Przełączanie: widok lub mat', note: 'Chcę zmieniać efekt przyciskiem.' },
    { id: 'pattern', label: 'Osłona z dekoracyjnym efektem', note: 'Interesuje mnie mat, szronienie lub pasy.' },
  ],
  glare: [
    { id: 'light', label: 'Zachować możliwie jasny pokój', note: 'Wystarczy delikatniejsza kontrola światła.' },
    { id: 'balanced', label: 'Ograniczyć olśnienie przy pracy', note: 'Mogę zaakceptować umiarkowane przyciemnienie.' },
    { id: 'strong', label: 'Wyraźnie przytłumić ostre słońce', note: 'Jasność jest mniej ważna niż osłona.' },
  ],
  renovation: [
    { id: 'wood', label: 'Ciepły dekor drewna', note: 'Usłojenie i kierunek wzoru dobierzemy na próbce.' },
    { id: 'stone', label: 'Kamień lub beton', note: 'Spokojny, architektoniczny charakter.' },
    { id: 'solid', label: 'Jednolity kolor lub mat', note: 'Biel, szarość albo kolor dopasowany do wnętrza.' },
    { id: 'metal', label: 'Efekt metalu', note: 'Wykończenie do detali i zabudowy.' },
  ],
  safety: [
    { id: 'fragments', label: 'Ograniczyć rozsypywanie odłamków', note: 'Szkło w drzwiach, lokalu lub strefie z wymaganiami HACCP.' },
    { id: 'intrusion', label: 'Utrudnić sforsowanie szyby', note: 'Liczy się folia, szkło, rama i sposób mocowania.' },
    { id: 'surface', label: 'Chronić powierzchnię przed uszkodzeniem', note: 'Prace wykończeniowe, zabrudzenia i drobne zarysowania.' },
  ],
  uv: [
    { id: 'light', label: 'Ochrona UV przy jasnym szkle', note: 'Nie chcę mocnej zmiany wyglądu.' },
    { id: 'heat', label: 'UV oraz mniej nagrzewania', note: 'Chcę porównać również folie przeciwsłoneczne.' },
  ],
  cold: [
    { id: 'comfort', label: 'Komfort przy przeszkleniu', note: 'Chcę ocenić, czy folia ma sens dla mojego okna.' },
    { id: 'draft', label: 'Czuję wyraźny przeciąg', note: 'To może wymagać sprawdzenia szczelności stolarki.' },
  ],
  special: [
    { id: 'projection', label: 'Ekran do projekcji', note: 'Projekcja na szkle lub przegrodzie.' },
    { id: 'shield', label: 'Ekranowanie przeszkleń', note: 'Dobór według wymaganego zakresu i dokumentacji.' },
    { id: 'birds', label: 'Ograniczenie kolizji ptaków ze szkłem', note: 'Oznaczenia dobrane do przeszklenia.' },
    { id: 'removal', label: 'Usunięcie starej folii', note: 'Ocena stanu materiału, kleju i szkła.' },
  ],
};

// Authored descriptions describe the existing Lumera service scope. Numerical
// fields are supplier declarations, not measured performance of a customer's glass.
export const finderSolutions = [
  {
    "id": "selective",
    "group": "solar",
    "name": "Jasna folia selektywna",
    "series": "Seria Perfecta",
    "path": "/folie-przeciwsloneczne-zewnetrzne",
    "topic": "solar-films",
    "scene": "selective",
    "light": "Dużo światła",
    "look": "Delikatna zmiana szyby",
    "privacy": "Nie jest osłoną widoku",
    "benefit": "Kierunek dla osób, które chcą ograniczyć zyski słoneczne i zachować jasny charakter pomieszczenia.",
    "tradeoff": "Przy ostrym słońcu może mniej ograniczać olśnienie niż ciemniejsza folia. Dobór wymaga oceny pakietu i ekspozycji.",
    "check": "Rodzaj szkła, położenie szyby, zacienienie i dostęp do montażu.",
    "variants": [
      {
        "name": "Perfecta",
        "light": 73,
        "solar": 58,
        "uv": 99,
        "ir": 85,
        "mounting": "Zewnętrzny",
        "color": "BEZBARWNY",
        "materialWarranty": "5 lat"
      },
      {
        "name": "Perfecta Duo Premium",
        "light": 75,
        "solar": 59,
        "uv": 99,
        "ir": 95,
        "mounting": "Zewnętrzny",
        "color": "bezbarwna",
        "materialWarranty": "7 lat"
      }
    ],
    "parameters": [
      [
        "Przeznaczenie",
        "Pionowe szkło; zgodność z pakietem do potwierdzenia."
      ],
      [
        "IR i energia słoneczna",
        "Osobne wielkości. Nie opisują procentowego spadku temperatury pokoju."
      ]
    ]
  },
  {
    "id": "solar-reflective",
    "group": "solar",
    "name": "Folia refleksyjna Silver",
    "series": "Silver Comfort i Duo Premium",
    "path": "/folie-przeciwsloneczne-zewnetrzne",
    "topic": "solar-films",
    "scene": "reflective",
    "light": "Pięć wariantów: Comfort i Duo Premium",
    "look": "Widoczne odbicie",
    "privacy": "Możliwa poprawa w dzień",
    "benefit": "Pozwala porównać kontrolę słońca z ilością światła potrzebną do codziennego korzystania z wnętrza.",
    "tradeoff": "Zmienia wygląd szyby. Prywatność zależy od tego, po której stronie jest jaśniej.",
    "check": "Akceptowany wygląd elewacji oraz zgodność folii z szybą.",
    "variants": [
      {
        "name": "Silver 20 Comfort",
        "light": 16,
        "solar": 82,
        "uv": 99,
        "mounting": "Zewnętrzny",
        "color": "srebrny",
        "materialWarranty": "5 lat"
      },
      {
        "name": "Silver 40 Comfort",
        "light": 40,
        "solar": 66,
        "uv": 99,
        "mounting": "Zewnętrzny",
        "color": "srebrny",
        "materialWarranty": "5 lat"
      },
      {
        "name": "Silver 50 Comfort",
        "light": 55,
        "solar": 50,
        "uv": 99,
        "mounting": "Zewnętrzny",
        "color": "srebrny",
        "materialWarranty": "5 lat"
      },
      {
        "name": "Silver 20 Duo Premium",
        "light": 17,
        "solar": 87,
        "uv": 99,
        "mounting": "Zewnętrzny",
        "color": "srebrny",
        "materialWarranty": "7 lat"
      },
      {
        "name": "Silver 40 Duo Premium",
        "light": 39,
        "solar": 73,
        "uv": 99,
        "mounting": "Zewnętrzny",
        "color": "srebrny",
        "materialWarranty": "7 lat"
      }
    ],
    "parameters": [
      [
        "Serie",
        "Comfort: 20, 40, 50. Duo Premium: 20 i 40."
      ],
      [
        "Wieczorem",
        "Lustro zależy od różnicy oświetlenia; po zapaleniu światła osłona może zanikać."
      ]
    ]
  },
  {
    "id": "neutral",
    "group": "solar",
    "name": "Folie Neutral i Titan Duo Premium",
    "series": "Neutral · Titan Duo Premium",
    "path": "/folie-przeciwsloneczne-zewnetrzne",
    "topic": "solar-films",
    "scene": "neutral",
    "light": "Zależna od wariantu",
    "look": "Spokojniejszy efekt optyczny",
    "privacy": "Do osobnej oceny",
    "benefit": "Do rozważenia, gdy chcesz ograniczyć słońce, ale unikasz wyraźnego lustra na elewacji.",
    "tradeoff": "Neutralny wygląd nie oznacza całkowitej niewidoczności ani takiej samej jasności każdego modelu.",
    "check": "Próbka, parametry konkretnego wariantu i rodzaj szkła.",
    "variants": [
      {
        "name": "Neutral 25",
        "light": 21,
        "solar": 74,
        "uv": 99,
        "mounting": "Zewnętrzny",
        "color": "neutralny",
        "materialWarranty": "3 lata"
      },
      {
        "name": "Neutral 40",
        "light": 40,
        "solar": 51,
        "uv": 99,
        "mounting": "Zewnętrzny",
        "color": "neutralny",
        "materialWarranty": "3 lata"
      },
      {
        "name": "Titan 25 Duo Premium",
        "light": 19,
        "solar": 77,
        "uv": 99,
        "mounting": "Zewnętrzny",
        "color": "neutralno-tytanowy (antracyt)",
        "materialWarranty": "7 lat"
      },
      {
        "name": "Titan 40 Duo Premium",
        "light": 36,
        "solar": 65,
        "uv": 99,
        "mounting": "Zewnętrzny",
        "color": "neutralno-tytanowy (antracyt)",
        "materialWarranty": "7 lat"
      }
    ],
    "parameters": [
      [
        "Neutralny wygląd",
        "Nie oznacza bezbarwności; warianty mają różną jasność."
      ],
      [
        "Neutral a Titan Duo Premium",
        "To osobne serie. Titan ma antracytowy odcień i delikatne odbicie; porównaj światło, redukcję energii słonecznej i warunki gwarancji konkretnego wariantu."
      ]
    ]
  },
  {
    "id": "internal",
    "group": "solar",
    "name": "Folie przeciwsłoneczne wewnętrzne",
    "path": "/folie-przeciwsloneczne-wewnetrzne",
    "topic": "solar-films",
    "scene": "balanced",
    "light": "Zależna od wariantu",
    "look": "Jasne, srebrne lub kolorowe — zależnie od serii",
    "privacy": "Zależna od wariantu",
    "benefit": "Do ograniczania słońca przy montażu od środka: jasne Invisible, srebrne R20/R30/R50 Silver, Solar Glass i warianty kolorowe.",
    "tradeoff": "Sam brak dostępu z zewnątrz nie potwierdza możliwości montażu od środka. Szczególnie ważna jest ocena pakietu i powłok.",
    "check": "Dokumentacja szyby i dopuszczenie konkretnej folii.",
    "variants": [
      {
        "name": "Invisible Comfort",
        "variantGroup": "Jasne Invisible",
        "light": 70,
        "solar": 47,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "bezbarwny",
        "materialWarranty": "10 lat",
        "scene": "selective"
      },
      {
        "name": "Invisible Premium",
        "variantGroup": "Jasne Invisible",
        "light": 65,
        "solar": 57,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "bezbarwny",
        "materialWarranty": "10 lat",
        "scene": "selective",
        "ir": 99
      },
      {
        "name": "R20 Silver",
        "variantGroup": "Srebrne Silver",
        "light": 17.5,
        "solar": 76,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "srebrny",
        "materialWarranty": "10 lat",
        "scene": "reflective"
      },
      {
        "name": "R30 Silver",
        "variantGroup": "Srebrne Silver",
        "light": 30,
        "solar": 68,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "srebrny",
        "materialWarranty": "10 lat",
        "scene": "reflective"
      },
      {
        "name": "R50 Silver",
        "variantGroup": "Srebrne Silver",
        "light": 50,
        "solar": 58,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "srebrny",
        "materialWarranty": "10 lat",
        "scene": "reflective"
      },
      {
        "name": "Solar Glass",
        "variantGroup": "Solar Glass",
        "light": 41,
        "solar": 66,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "odcień błękitu",
        "materialWarranty": "10 lat",
        "scene": "neutral",
        "tone": "#44617d"
      },
      {
        "name": "Gold Silver",
        "variantGroup": "Kolorowe Silver",
        "light": 15,
        "solar": 83,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "złoty",
        "materialWarranty": "5 lat",
        "scene": "reflective",
        "tone": "#95702b"
      },
      {
        "name": "Blue Silver",
        "variantGroup": "Kolorowe Silver",
        "light": 12,
        "solar": 86,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "niebieski",
        "materialWarranty": "5 lat",
        "scene": "reflective",
        "tone": "#204b87"
      },
      {
        "name": "Green Silver",
        "variantGroup": "Kolorowe Silver",
        "light": 15,
        "solar": 85,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "zielony",
        "materialWarranty": "5 lat",
        "scene": "reflective",
        "tone": "#27613e"
      },
      {
        "name": "Bronze Silver",
        "variantGroup": "Kolorowe Silver",
        "light": 12,
        "solar": 76,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "brązowy",
        "materialWarranty": "5 lat",
        "scene": "reflective",
        "tone": "#754c33"
      }
    ],
    "parameters": [
      [
        "Jasne Invisible",
        "Porównaj przepuszczalność światła, redukcję całej energii słonecznej oraz IR. Te wielkości nie opisują tego samego."
      ],
      [
        "Srebrne R20/R30/R50",
        "Różnią się przyciemnieniem i redukcją energii słonecznej. Refleksyjny wygląd ocenimy na próbce."
      ],
      [
        "Kolorowe Silver",
        "Złoty, niebieski, zielony i brązowy wariant wpływają również na barwę szyby i światła."
      ],
      [
        "Solar Glass",
        "Wariant o odcieniu błękitu. Dostępność i termin wymagają potwierdzenia przy wycenie."
      ],
      [
        "Zgodność z szybą",
        "Każdy wariant wymaga oceny pakietu, powłok i ekspozycji. Brak dostępu z zewnątrz nie potwierdza zgodności."
      ]
    ],
    "series": "R20 Silver · R30 Silver · R50 Silver · Invisible · Gold Silver · Blue Silver · Green Silver · Bronze Silver · Solar Glass"
  },
  {
    "id": "mirror",
    "group": "privacy",
    "name": "Lustra weneckie Mirror",
    "path": "/folie-lustra-weneckie",
    "topic": "mirror",
    "scene": "reflective",
    "light": "Zależna od wariantu",
    "look": "Lustrzane odbicie o różnej intensywności",
    "privacy": "Zależna od różnicy oświetlenia",
    "benefit": "Seria Mirror do ograniczania wglądu od jaśniejszej strony: osobne wersje wewnętrzne R30/R20/R10 i zewnętrzne 40/20/10.",
    "tradeoff": "Po zmroku, przy oświetlonym wnętrzu, nie zapewnia tej samej osłony. Nie jest rozwiązaniem do stałej prywatności.",
    "check": "Strona montażu, zgodność z szybą, różnica oświetlenia i akceptowany stopień przyciemnienia.",
    "variants": [
      {
        "name": "Mirror 40 zewnętrzna",
        "variantGroup": "Montaż zewnętrzny",
        "light": 40,
        "solar": 66,
        "uv": 99,
        "mounting": "Zewnętrzny",
        "color": "srebrny",
        "materialWarranty": "5 lat",
        "mirrorLevel": "Umiarkowany"
      },
      {
        "name": "Mirror 20 zewnętrzna",
        "variantGroup": "Montaż zewnętrzny",
        "light": 16,
        "solar": 82,
        "uv": 99,
        "mounting": "Zewnętrzny",
        "color": "srebrny",
        "materialWarranty": "5 lat",
        "mirrorLevel": "Intensywny"
      },
      {
        "name": "Mirror 10 zewnętrzna",
        "variantGroup": "Montaż zewnętrzny",
        "light": 10,
        "solar": 86,
        "uv": 99,
        "mounting": "Zewnętrzny",
        "color": "srebrno / szary",
        "materialWarranty": "5 lat",
        "mirrorLevel": "Najmocniejszy (TOTALNE)"
      },
      {
        "name": "R30 Mirror wewnętrzna",
        "variantGroup": "Montaż wewnętrzny",
        "light": 30,
        "solar": 68,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "srebrny",
        "materialWarranty": "10 lat",
        "mirrorLevel": "Umiarkowany"
      },
      {
        "name": "R20 Mirror wewnętrzna",
        "variantGroup": "Montaż wewnętrzny",
        "light": 17.5,
        "solar": 76,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "srebrny",
        "materialWarranty": "10 lat",
        "mirrorLevel": "Intensywny"
      },
      {
        "name": "R10 Mirror wewnętrzna",
        "variantGroup": "Montaż wewnętrzny",
        "light": 6,
        "solar": 80,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "srebrno / szary",
        "materialWarranty": "5 lat",
        "mirrorLevel": "Najmocniejszy (TOTALNE)"
      }
    ],
    "parameters": [
      [
        "Dobór serii",
        "W tej kategorii porównujemy warianty Mirror. Zewnętrzne Silver Comfort i Duo Premium pozostają w kategorii przeciwsłonecznej."
      ],
      [
        "Siła efektu",
        "Umiarkowany, intensywny i najmocniejszy wariant mają różne wartości przepuszczalności światła. Oznaczenie TOTALNE nie oznacza stałej prywatności w nocy."
      ],
      [
        "Warunek prywatności",
        "Po stronie obserwatora musi być jaśniej niż po stronie osłanianej. Efekt może się odwrócić po zapaleniu światła w pomieszczeniu."
      ],
      [
        "Wewnątrz i na zewnątrz",
        "Stronę montażu dobieramy do konkretnej wersji folii, szkła i dostępu; nie przekładamy produktu na drugą stronę szyby."
      ]
    ],
    "series": "R30 Mirror · R20 Mirror · R10 Mirror · Mirror 40 · Mirror 20 · Mirror 10"
  },
  {
    "id": "matte",
    "group": "privacy",
    "name": "Folie matowe — mleczne i kolorowe",
    "path": "/folie-matowe",
    "topic": "matte",
    "scene": "matte",
    "light": "Światło rozproszone",
    "look": "Mat mleczny, srebrny, szary, brązowy, żółty, czerwony lub zielony",
    "privacy": "Stałe ograniczenie widoku",
    "benefit": "Osłona widoku w wersji mlecznej lub kolorowej. Porównaj barwę, przepuszczalność światła i zakres oklejenia.",
    "tradeoff": "Tracisz wyraźny widok przez oklejoną część. Przy mocnym podświetleniu i bliskich przedmiotach mogą być widoczne zarysy.",
    "check": "Próbka koloru, rodzaj szkła, zakres osłony i zgodność konkretnego wariantu z podłożem.",
    "variants": [
      {
        "name": "White Matte",
        "variantGroup": "Mat mleczny i stonowane odcienie",
        "light": 72,
        "solar": 28,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "biały mleczny",
        "materialWarranty": "10 lat",
        "scene": "matte",
        "tone": "#e8efea"
      },
      {
        "name": "Silver Matte",
        "excludedGlass": ["triple"],
        "mountingRestrictions": "Nie stosować na pakietach trzyszybowych. Dla szyb zespolonych powyżej 2 m² lub U poniżej 1,4 W/m²K karta przewiduje ograniczenia i wyjątki dla szkła hartowanego — wymagane sprawdzenie dokumentacji.",
        "variantGroup": "Mat mleczny i stonowane odcienie",
        "light": 18,
        "solar": 80,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "srebrny",
        "materialWarranty": "10 lat",
        "scene": "matte",
        "tone": "#a9b4b6"
      },
      {
        "name": "Grey Matte",
        "variantGroup": "Mat mleczny i stonowane odcienie",
        "light": 30,
        "solar": 39,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "szary",
        "materialWarranty": "10 lat",
        "scene": "matte",
        "tone": "#7d8584"
      },
      {
        "name": "Bronze Matte",
        "variantGroup": "Mat mleczny i stonowane odcienie",
        "light": 30,
        "solar": 39,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "brązowy",
        "materialWarranty": "10 lat",
        "scene": "matte",
        "tone": "#9a8067"
      },
      {
        "name": "Yellow Matte",
        "variantGroup": "Matowe kolory",
        "light": 70,
        "solar": 20,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "żółty",
        "materialWarranty": "10 lat",
        "scene": "matte",
        "tone": "#e5cf64"
      },
      {
        "name": "Red Matte",
        "variantGroup": "Matowe kolory",
        "light": 65,
        "solar": 22,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "czerwony",
        "materialWarranty": "10 lat",
        "scene": "matte",
        "tone": "#c96762"
      },
      {
        "name": "Green Matte",
        "variantGroup": "Matowe kolory",
        "light": 55,
        "solar": 33,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "zielony",
        "materialWarranty": "10 lat",
        "scene": "matte",
        "tone": "#7ca273"
      }
    ],
    "parameters": [
      [
        "Zakres osłony",
        "Pełna tafla lub pas ustalony według linii wzroku."
      ],
      [
        "Kontury",
        "Zależą od odległości od szyby i podświetlenia."
      ],
      [
        "Kolory i jasność",
        "Warianty nie różnią się wyłącznie kolorem. Sprawdź przepuszczalność światła i parametry wybranego modelu."
      ],
      [
        "Silver Matte",
        "Łączy stronę matową i lustrzaną. Strony, odcień i odbicie potwierdzamy na próbce."
      ],
      [
        "Montaż",
        "Wymienione warianty tej serii są wewnętrzne. Nie przenosimy ich automatycznie na balustradę zewnętrzną; do niej służy osobna ścieżka."
      ]
    ],
    "series": "Folie matowe kolory · White Matte · Silver Matte · Grey Matte · Bronze Matte · Yellow Matte · Red Matte · Green Matte"
  },
  {
    "id": "frosted",
    "group": "privacy",
    "name": "Folia mrożona lub dekoracyjna",
    "path": "/folie-mrozone",
    "topic": "frosted",
    "scene": "frosted",
    "light": "Zależne od wzoru i krycia",
    "look": "Szronienie, pasy lub dekor",
    "privacy": "Zależna od zakresu oklejenia",
    "benefit": "Łączy osłonę widoku z wykończeniem dopasowanym do wnętrza i podziałów szkła.",
    "tradeoff": "Pasy i nieoklejone fragmenty mogą pozostawiać widoczność. Nazwy matowa i mrożona częściowo się pokrywają — porównujemy próbki.",
    "check": "Wzór, jego skala oraz faktyczne krycie wybranego materiału.",
    "variants": [
      {
        "name": "Folia mrożona do plotera i druku",
        "light": 88,
        "mounting": "Wewnętrzny / zewnętrzny",
        "color": "MROŻONE SZKŁO",
        "thickness": "80 µm",
        "scene": "frosted"
      },
      {
        "name": "Folia szroniona kanalikowa",
        "light": 76,
        "mounting": "Wewnętrzny / zewnętrzny",
        "color": "biały",
        "thickness": "80 µm",
        "scene": "frosted"
      }
    ],
    "parameters": [
      [
        "Dekor i klej",
        "Wzór, kierunek i klej dobieramy do sposobu aplikacji."
      ],
      [
        "Krycie",
        "Przepuszczalność światła nie określa widoczności przez wzór."
      ]
    ]
  },
  {
    "id": "lcd",
    "group": "privacy",
    "name": "Folia LCD / PDLC",
    "path": "/folie-lcd",
    "topic": "lcd",
    "scene": "lcd",
    "light": "Przełączany efekt",
    "look": "Transparentny lub mleczny",
    "privacy": "Osłona na żądanie",
    "benefit": "Pozwala zmieniać charakter przegrody, np. między otwartym widokiem a osłoną sali spotkań.",
    "tradeoff": "Wymaga zasilania, sterowania i przygotowania krawędzi. W trybie przejrzystym może pozostawać zamglenie zależne od produktu i kąta.",
    "check": "Warunki wewnętrzne, wymiary, prowadzenie przewodów i sterowanie.",
    "variants": [
      {
        "name": "LCD z klejem",
        "light": 81,
        "mounting": "Wewnętrzny",
        "color": "Biały mat bez zasilania; tryb przejrzysty po włączeniu",
        "thickness": "0,5 mm",
        "lightOff": 52,
        "power": "3,5 W/m²",
        "filmVoltage": "48 V",
        "supply": "230V",
        "switchOn": "10 ms",
        "switchOff": "200 ms",
        "temperature": "od 0 °C do +55 °C",
        "width": "1,20 m, 1,50 m",
        "scene": "lcd"
      }
    ],
    "parameters": [
      [
        "Instalacja",
        "Układ zasilania, transformator, sterowanie i zabezpieczenie krawędzi dobierane do projektu."
      ],
      [
        "Przejrzystość",
        "Tryb przejrzysty może mieć zamglenie zależne od kąta; nie jest równoważny zwykłemu szkłu."
      ]
    ]
  },
  {
    "id": "balcony",
    "group": "privacy",
    "name": "Matowa osłona balustrady",
    "path": "/folie-matowe",
    "topic": "matte",
    "scene": "balcony",
    "light": "Światło rozproszone",
    "look": "Mleczne wypełnienia balustrady",
    "privacy": "Na wysokości oklejonego szkła",
    "benefit": "Osłania dolną część balkonu przy zachowaniu istniejącej szklanej konstrukcji.",
    "tradeoff": "Nie osłania widoku ponad poręczą i nie jest pełną zabudową balkonu. Nie służy do chłodzenia mieszkania.",
    "check": "Materiał do warunków zewnętrznych, mocowania oraz zasady wyglądu budynku.",
    "variants": [
      {
        "name": "Folia na szyby balkonowe",
        "light": 70,
        "uv": 99,
        "mounting": "Wewnętrzny / zewnętrzny",
        "color": "matowa",
        "thickness": "75 µm",
        "scene": "balcony"
      }
    ],
    "parameters": [
      [
        "Osłona",
        "Dotyczy wysokości oklejonej balustrady, nie przestrzeni ponad poręczą."
      ]
    ]
  },
  {
    "id": "polycarbonate",
    "group": "special",
    "name": "Folia na poliwęglan",
    "path": "/folie-na-poliweglan",
    "topic": "polycarbonate",
    "scene": "reflective",
    "light": "Zależna od wariantu",
    "look": "Do dobrania dla świetlika",
    "privacy": "Nie jest głównym celem doboru",
    "benefit": "Kierunek do ograniczania zysków słonecznych przez świetliki z odpowiedniego tworzywa.",
    "tradeoff": "Zwykła folia do szkła nie jest automatycznie zgodna z poliwęglanem.",
    "check": "Dokładny rodzaj tworzywa, jego stan, konstrukcja i produkt dopuszczony do podłoża.",
    "variants": [
      {
        "name": "Polycarbon Silver",
        "light": 16,
        "solar": 80,
        "uv": 99,
        "mounting": "Zewnętrzny",
        "color": "srebrny",
        "materialWarranty": "3 lata",
        "scene": "reflective"
      },
      {
        "name": "Polycarbon White",
        "light": 17,
        "solar": 75,
        "uv": 99,
        "mounting": "Zewnętrzny",
        "color": "biała - matowa",
        "materialWarranty": "3 lata",
        "scene": "matte"
      }
    ],
    "parameters": [
      [
        "Montaż",
        "Od zewnętrznej strony świetlika."
      ],
      [
        "Podłoże",
        "Weryfikujemy typ tworzywa, jego stan, wydzielanie gazów i dopuszczenie materiału."
      ],
      [
        "Wariant biały i srebrny",
        "Biały rozprasza obraz; srebrny daje odbicie. Wszystkie pokazane warianty wyraźnie ograniczają światło."
      ]
    ],
    "series": "Polycarbon"
  },
  {
    "id": "uv",
    "group": "special",
    "name": "Folia anty UV",
    "path": "/folie-anty-uv",
    "topic": "anti-uv",
    "scene": "clear",
    "light": "Możliwy jasny wariant",
    "look": "Zależny od wybranego produktu",
    "privacy": "Nie osłania automatycznie widoku",
    "benefit": "Do rozważenia przy ochronie ekspozycji, tkanin i wyposażenia przed częścią czynników blaknięcia.",
    "tradeoff": "UV to tylko jeden z czynników blaknięcia. Sam filtr UV nie oznacza skutecznego ograniczenia nagrzewania.",
    "check": "Wymagany zakres ochrony, wrażliwość ekspozycji i parametry wybranego modelu.",
    "variants": [
      {
        "name": "Anty UV Clear",
        "transmission380": "ok. 15%",
        "transmission400": "ok. 75%",
        "transmission420": "ok. 85–90%",
        "transmission450": "ok. 85–90%",
        "transmission500": "ok. 85–90%",
        "light": 84,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "bezbarwna",
        "materialWarranty": "10 lat",
        "scene": "clear"
      },
      {
        "name": "Anty UV Clear Premium",
        "transmission380": "blisko 0%",
        "transmission400": "ok. 40–45%",
        "transmission420": "ok. 80–85%",
        "transmission450": "ok. 85–90%",
        "transmission500": "ok. 85–90%",
        "light": 83,
        "uv": 99.5,
        "mounting": "Wewnętrzny",
        "color": "bezbarwna",
        "materialWarranty": "10 lat",
        "scene": "clear"
      },
      {
        "name": "Anty UV Total",
        "transmission380": "blisko 0%",
        "transmission400": "blisko 0%",
        "transmission420": "ok. 15–20%",
        "transmission450": "ok. 65–70%",
        "transmission500": "ok. 65–70%",
        "light": 71,
        "uv": 99.9,
        "mounting": "Wewnętrzny",
        "color": "przezroczysta - odcień zieleni",
        "materialWarranty": "10 lat",
        "scene": "clear",
        "tone": "#527b5a"
      },
      {
        "name": "Anty UV Amber",
        "transmission380": "ok. 1–3%",
        "transmission400": "ok. 7–9%",
        "transmission420": "ok. 8–9%",
        "transmission450": "ok. 4–6%",
        "transmission500": "ok. 5–7%",
        "light": 57,
        "uv": 99.5,
        "mounting": "Wewnętrzny",
        "color": "bursztynowy",
        "materialWarranty": "10 lat",
        "scene": "clear",
        "tone": "#a7752b"
      }
    ],
    "parameters": [
      [
        "Blaknięcie",
        "UV jest jednym z czynników; liczą się także światło widzialne i temperatura."
      ]
    ]
  },
  {
    "id": "safety",
    "group": "safety",
    "name": "Folia zabezpieczająca szkło",
    "path": "/folie-zabezpieczajace",
    "topic": "security",
    "scene": "clear",
    "light": "Możliwy przejrzysty efekt",
    "look": "Zależny od wariantu",
    "privacy": "Nie jest głównym celem",
    "benefit": "Dobór pod ograniczenie rozsypywania odłamków i skutków uszkodzenia przeszklenia.",
    "tradeoff": "Ochronę ocenia się dla układu szkło–folia–mocowanie. Sama grubość nie potwierdza klasy ani odporności.",
    "check": "Rodzaj szkła, funkcja przegrody i dokumentacja badanego rozwiązania.",
    "variants": [
      {
        "name": "Secur Out 3B3",
        "light": 92,
        "solar": 15,
        "uv": 99,
        "mounting": "Zewnętrzny",
        "color": "bezbarwny",
        "thickness": "120 µm",
        "securityClass": "3B3",
        "materialWarranty": "3 lata"
      },
      {
        "name": "HACCP 3B3",
        "light": 92,
        "solar": 15,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "bezbarwna",
        "thickness": "120 µm",
        "securityClass": "3B3",
        "materialWarranty": "10 lat"
      }
    ],
    "parameters": [
      [
        "Klasa materiału",
        "Deklaracja z karty; skuteczność zależy od przebadanego układu szkło–folia–mocowanie."
      ]
    ]
  },
  {
    "id": "haccp",
    "group": "safety",
    "name": "Folia bezpieczna do stref HACCP",
    "path": "/folie-bezpieczne-haccp",
    "topic": "haccp",
    "scene": "clear",
    "light": "Zależna od wariantu",
    "look": "Przezroczysty lub dobrany do strefy",
    "privacy": "Zależna od wariantu",
    "benefit": "Rozwiązanie do oceny tam, gdzie ważne jest ograniczenie zanieczyszczenia otoczenia odłamkami szkła.",
    "tradeoff": "Wymagania obiektu trzeba uzgodnić z jego procedurami. Nazwa kategorii nie zastępuje dokumentacji.",
    "check": "Wymagania strefy, przeszklenie i dokumentacja materiału oraz montażu.",
    "variants": [
      {
        "name": "HACCP 3B3",
        "light": 92,
        "solar": 15,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "bezbarwna",
        "thickness": "120 µm",
        "securityClass": "3B3",
        "materialWarranty": "10 lat"
      },
      {
        "name": "HACCP Matte 3B3",
        "light": 71,
        "solar": 28,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "biała - matowa",
        "thickness": "120 µm",
        "securityClass": "3B3",
        "materialWarranty": "10 lat",
        "scene": "matte"
      },
      {
        "name": "HACCP 2B2",
        "light": 90,
        "solar": 16,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "bezbarwna",
        "securityClass": "2B2",
        "materialWarranty": "10 lat"
      }
    ],
    "parameters": [
      [
        "Strefa HACCP",
        "Dobór według procedur obiektu i dokumentacji rozwiązania. Nie wywodzimy zgodności z samej nazwy folii."
      ]
    ]
  },
  {
    "id": "intrusion",
    "group": "safety",
    "name": "Folia antywłamaniowa",
    "path": "/folie-antywlamaniowe",
    "topic": "anti-burglary",
    "scene": "clear",
    "light": "Zależna od wariantu",
    "look": "Możliwy przezroczysty efekt",
    "privacy": "Do odrębnego doboru",
    "benefit": "Dobór pod utrudnienie szybkiego wykonania otworu w przeszkleniu.",
    "tradeoff": "Nie gwarantuje ochrony przed włamaniem. Liczą się szkło, rama, sposób mocowania i dokumentacja całego rozwiązania.",
    "check": "Cel zabezpieczenia, rama, krawędzie, szkło i ewentualne mocowanie obwodowe.",
    "variants": [
      {
        "name": "P1 wewnętrzna",
        "light": 89,
        "solar": 17,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "bezbarwna",
        "thickness": "240 µm",
        "securityClass": "P1",
        "materialWarranty": "10 lat"
      },
      {
        "name": "P2 wewnętrzna",
        "light": 83,
        "solar": 20,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "bezbarwny",
        "thickness": "350 µm",
        "securityClass": "P2",
        "materialWarranty": "10 lat"
      },
      {
        "name": "P1 zewnętrzna",
        "light": 89,
        "solar": 17,
        "uv": 99,
        "mounting": "Zewnętrzny",
        "color": "bezbarwna",
        "thickness": "240 µm",
        "securityClass": "P1",
        "materialWarranty": "5 lat"
      }
    ],
    "parameters": [
      [
        "Klasa P1/P2",
        "Oznaczenie materiału w karcie nie potwierdza automatycznie klasy dowolnego okna."
      ],
      [
        "Mocowanie",
        "Sprawdzamy krawędzie, ramę oraz ewentualne mocowanie obwodowe."
      ]
    ]
  },
  {
    "id": "protective",
    "group": "safety",
    "name": "Folia ochronna powierzchni",
    "path": "/folie-ochronne",
    "topic": "protective",
    "scene": "clear",
    "light": "Zależna od materiału",
    "look": "Warstwa ochronna",
    "privacy": "Nie jest głównym celem",
    "benefit": "Do ochrony powierzchni przed zabrudzeniami i wybranymi uszkodzeniami podczas prac lub użytkowania.",
    "tradeoff": "Warianty czasowe i długoterminowe mają różne wymagania oraz terminy usunięcia.",
    "check": "Podłoże, czas zabezpieczenia i warunki późniejszego demontażu.",
    "variants": [
      {
        "name": "Clear Protect 3 mies.",
        "mounting": "Wewnętrzny / zewnętrzny",
        "color": "bezbarwna",
        "thickness": "50 µm",
        "exposure": "3 miesiące — odporność na UV według karty; termin demontażu do potwierdzenia"
      },
      {
        "name": "Ochronna przeciw zarysowaniom",
        "light": 92,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "bezbarwna",
        "thickness": "120 µm"
      }
    ],
    "parameters": [
      [
        "Czasowe i stałe",
        "Folia do prac budowlanych i folia przeciw zarysowaniom mają różne przeznaczenie i terminy demontażu."
      ]
    ]
  },
  {
    "id": "lowe",
    "group": "special",
    "name": "Folia termoizolacyjna",
    "path": "/folie-termoizolacyjne",
    "topic": "thermal",
    "scene": "neutral",
    "light": "Zależna od wariantu",
    "look": "Możliwa zmiana odcienia",
    "privacy": "Nie jest głównym celem",
    "benefit": "Możliwy kierunek poprawy komfortu przy szybie po ocenie istniejącego przeszklenia.",
    "tradeoff": "Nie uszczelni okna i nie usunie przeciągu. Sens zastosowania zależy od parametrów obecnego pakietu.",
    "check": "Dane okna, źródło dyskomfortu, szczelność i oczekiwany efekt.",
    "variants": [
      {
        "name": "Eco-Termic",
        "light": 45,
        "uv": 99,
        "mounting": "Wewnętrzny",
        "color": "błękitno-złoty",
        "materialWarranty": "10 lat"
      }
    ],
    "parameters": [
      [
        "Izolacyjność",
        "Korzyść zależy od istniejącej szyby. Współczynnik U całego przeszklenia i emisyjność wymagają dokumentacji konkretnego układu."
      ]
    ]
  },
  {
    "id": "projection",
    "group": "special",
    "name": "Folia projekcyjna",
    "path": "/folie-projekcyjne",
    "topic": "projection",
    "scene": "projection",
    "light": "Dobierana do projekcji",
    "look": "Powierzchnia ekranu",
    "privacy": "Nie jest kryterium podstawowym",
    "benefit": "Pozwala przygotować powierzchnię do wyświetlania obrazu na szkle lub przegrodzie.",
    "tradeoff": "Ważne są kierunek projekcji, oświetlenie otoczenia, projektor i oczekiwany kontrast.",
    "check": "Położenie projektora, warunki światła i wielkość obrazu.",
    "variants": [
      {
        "name": "Projekcyjna Grey",
        "light": 40,
        "mounting": "Wewnętrzny",
        "color": "szara",
        "thickness": "0,1 mm",
        "materialWarranty": "5 lat",
        "gain": "3",
        "viewAngle": "180 ⁰",
        "projectionAngle": "120 ⁰",
        "contrast": "400:1",
        "projection": "Tylna"
      },
      {
        "name": "Projekcyjna Trans",
        "light": 88,
        "mounting": "Wewnętrzny",
        "color": "bezbarwna",
        "thickness": "0,1 mm",
        "materialWarranty": "5 lat",
        "gain": "1",
        "viewAngle": "150 ⁰",
        "projectionAngle": "120 ⁰",
        "contrast": "100:1",
        "projection": "Tylna"
      },
      {
        "name": "Projekcyjna Dual",
        "light": 80,
        "mounting": "Wewnętrzny",
        "color": "biała - matowa",
        "thickness": "0,13 mm",
        "materialWarranty": "5 lat",
        "gain": "5",
        "viewAngle": "180 ⁰",
        "projectionAngle": "120 ⁰",
        "contrast": "200:1",
        "projection": "Dwustronna"
      },
      {
        "name": "Projekcyjna V-White",
        "mounting": "Wewnętrzny",
        "color": "biała matowa",
        "thickness": "0,1 mm",
        "materialWarranty": "5 lat",
        "gain": "4",
        "viewAngle": "180 ⁰",
        "projectionAngle": "120 ⁰",
        "contrast": "200:1",
        "projection": "Przednia"
      }
    ],
    "parameters": [
      [
        "Dane obrazu",
        "Gain, kontrast i kąty odnoszą się do warunków karty; rzeczywisty efekt zależy od projektora i oświetlenia."
      ]
    ]
  },
  {
    "id": "shield",
    "group": "special",
    "name": "Folia ekranująca",
    "path": "/folie-anty-podsluchowe",
    "topic": "anti-eavesdropping",
    "scene": "neutral",
    "light": "Zależna od produktu",
    "look": "Zależny od wariantu",
    "privacy": "Ekranowanie to odrębna funkcja",
    "benefit": "Dobór do uzgodnionych wymagań ekranowania przeszkleń.",
    "tradeoff": "Nie ma jednej uniwersalnej wartości ochrony. Potrzebny jest zakres częstotliwości, wymagane tłumienie i dokumentacja.",
    "check": "Cel, parametry techniczne, pozostałe przegrody i sposób montażu.",
    "parameters": [
      [
        "Zakres częstotliwości",
        "Do ustalenia według celu ekranowania i dokumentacji konkretnego modelu."
      ],
      [
        "Tłumienie w dB",
        "Wymaga charakterystyki w funkcji częstotliwości; brak jednej wartości dla całej kategorii."
      ],
      [
        "Montaż i ciągłość osłony",
        "Weryfikacja krawędzi, pozostałych przegród i sposobu połączenia z układem ekranowania."
      ]
    ]
  },
  {
    "id": "birds",
    "group": "special",
    "name": "Rozwiązanie antykolizyjne",
    "path": "/folie-antykolizyjne",
    "topic": "anti-collision",
    "scene": "birds",
    "light": "Zależna od oznaczeń",
    "look": "Widoczne oznaczenia szkła",
    "privacy": "Nie jest głównym celem",
    "benefit": "Oznaczenia mają pomóc ptakom rozpoznawać barierę szklaną.",
    "tradeoff": "Znaczenie mają rozmieszczenie, kontrast, strona montażu i otoczenie przeszklenia.",
    "check": "Powierzchnia szkła, odbicia, otoczenie i układ oznaczeń.",
    "parameters": [
      [
        "Oznaczenia",
        "Dobór kontrastu, wielkości i układu oznaczeń do przeszklenia."
      ],
      [
        "Rozstaw i strona aplikacji",
        "Do potwierdzenia dla systemu i odbić na danym szkle."
      ],
      [
        "Ocena otoczenia",
        "Uwzględniamy odbicia roślinności, sąsiednie przeszklenia i ekspozycję."
      ]
    ]
  },
  {
    "id": "removal",
    "group": "special",
    "name": "Demontaż starej folii",
    "path": "/demontaz-folii-okiennych",
    "topic": "film-removal",
    "scene": "clear",
    "light": "Po ocenie stanu szyby",
    "look": "Usunięcie starej aplikacji",
    "privacy": "Nowa osłona do osobnego doboru",
    "benefit": "Przygotowanie przeszklenia do dalszego użytkowania lub nowej folii.",
    "tradeoff": "Metoda i nakład pracy zależą od stanu materiału, kleju oraz podłoża.",
    "check": "Zdjęcia całości, odklejonych krawędzi i pozostałości kleju.",
    "parameters": [
      [
        "Stara warstwa",
        "Ustalamy rodzaj folii, kleju, wiek i stan aplikacji."
      ],
      [
        "Podłoże",
        "Oceniamy szkło lub tworzywo, powłoki i stan krawędzi."
      ],
      [
        "Metoda i nakład pracy",
        "Dobierane po oględzinach; brak uniwersalnego czasu dla całej kategorii."
      ]
    ]
  },
  {
    "id": "wrap",
    "group": "wrap",
    "name": "Okleina lub laminat architektoniczny",
    "path": "/okleiny-i-laminaty-architektoniczne",
    "topic": "architectural-wraps",
    "scene": "wood",
    "light": "Nie dotyczy — powierzchnia pełna",
    "look": "Wybrany dekor powierzchni",
    "privacy": "Nie dotyczy",
    "benefit": "Zmienia wygląd istniejących drzwi, mebli, ram i zabudów przy zachowaniu ich sprawnej konstrukcji.",
    "tradeoff": "Nie naprawia niestabilnego podłoża. Ubytki, łuszczenie, wilgoć i frezy wymagają osobnej oceny.",
    "check": "Podłoże, detale, eksploatacja i rzeczywista próbka dekoru.",
    "parameters": [
      [
        "Materiał i podłoże",
        "Sprawdzamy stabilność powierzchni, powłokę, frezy i narożniki."
      ],
      [
        "Strona użytkowania",
        "Materiał do wnętrz i materiał do ekspozycji zewnętrznej wymagają osobnego doboru."
      ],
      [
        "Eksploatacja",
        "Odporność na ścieranie, środki czyszczące, wodę i temperaturę potwierdzamy dla konkretnego dekoru."
      ],
      [
        "Dokumentacja",
        "Klasa reakcji na ogień i inne wymagania obiektu sprawdzane dla wybranego produktu."
      ]
    ]
  }
];

export const finderGroups = [
  { id: 'solar', label: 'Słońce i światło', text: 'Przy wyborze liczą się zarówno ograniczanie energii słonecznej, jak i jasność oraz wygląd szyby. Jaśniejsza folia selektywna i mocniej refleksyjny wariant odpowiadają na różne priorytety.' },
  { id: 'privacy', label: 'Prywatność i dekoracja', text: 'Lustro zależy od różnicy oświetlenia. Mat i szronienie rozpraszają obraz, a LCD pozwala przełączać efekt. Zakres oklejenia decyduje, którą część widoku osłonisz.' },
  { id: 'safety', label: 'Bezpieczeństwo i ochrona', text: 'Ochrona przed zabrudzeniem, utrzymanie odłamków i utrudnienie sforsowania szyby to różne zadania. Dokumentacja i sposób montażu są równie ważne jak sam materiał.' },
  { id: 'special', label: 'Rozwiązania specjalistyczne', text: 'Ochrona UV, poliwęglan, termoizolacja, projekcja i ekranowanie wymagają własnych kryteriów. Nie porównujemy ich jedną oceną skuteczności.' },
  { id: 'wrap', label: 'Laminaty i okleiny', text: 'Tutaj punktem wyjścia jest pełna powierzchnia, jej stan i sposób użytkowania. Dekor drewna, kamienia, metalu lub koloru dobieramy na próbce, z uwzględnieniem krawędzi i profili.' },
];

export const finderFaqGroups = [
  { id: 'start', label: 'Od czego zacząć', icon: '01', description: 'Wybór, próbki i Twój wynik' },
  { id: 'sun', label: 'Słońce i jasność', icon: '02', description: 'Nagrzewanie, przyciemnienie i UV' },
  { id: 'privacy', label: 'Prywatność', icon: '03', description: 'Lustro, mat i przełączana osłona' },
  { id: 'installation', label: 'Szyby i montaż', icon: '04', description: 'Podłoże, dostęp i przygotowanie' },
  { id: 'wrap', label: 'Okleiny i laminaty', icon: '05', description: 'Drzwi, meble i ramy okienne' },
];

export const finderFaq = [
  { id: 'pierwszy-wybor', group: 'start', question: 'Nie znam się na foliach. Od czego zacząć?', answer: 'Zacznij od problemu, nie od nazwy produktu: za gorąco, za mało prywatności, ostre światło czy zmiana wyglądu mebli. W doborze wybierzesz cel i powierzchnię, a potem porównasz pasujące rozwiązania. Jeśli Twojej sytuacji nie ma na liście, wybierz „Inne” i opisz ją własnymi słowami.' },
  { id: 'nieznana-szyba', group: 'start', question: 'Nie wiem, jaką mam szybę. Czy mogę przejść dobór?', answer: 'Tak. Przy pytaniu o rodzaj szyby możesz zaznaczyć „Nie wiem”. Nie musisz rozpoznawać szkła samodzielnie. Do potwierdzenia materiału przydadzą się zdjęcia oznaczeń na szybie lub ramce między taflami i dokumentacja okna, jeśli ją masz.' },
  { id: 'podglad-a-probka', group: 'start', question: 'Czy na moim oknie folia będzie wyglądała tak jak w podglądzie?', answer: 'Podgląd pokazuje charakter efektu i pomaga porównać kierunki wyboru. Jest autorską ilustracją, nie zdjęciem produktu ani dokładną symulacją Twojego okna. Odcień, odbicie i przejrzystość oceniamy na próbce w rzeczywistym oświetleniu.' },
  { id: 'wynik-i-wycena', group: 'start', question: 'Mam wynik. Jak przejść do konkretnej folii i wyceny?', answer: 'Kliknij „Przejdź do wyceny”, aby przenieść odpowiedzi i wybrane warianty do formularza. Dodaj zdjęcia, wymiary tafli, liczbę sztuk i miejscowość. Możesz też zapisać wynik w linku i wrócić do niego później. Przed montażem potwierdzamy materiał, podłoże i zakres prac.' },
  { id: 'jasno-i-chlodniej', group: 'sun', question: 'Chcę mniej gorąca, ale nie chcę ciemnego pokoju. Co porównać?', answer: 'Porównaj obok siebie przepuszczalność światła i redukcję energii słonecznej. Jasne folie selektywne, np. Perfecta, są jednym z kierunków do rozważenia. Ciemniejsze warianty mogą mocniej osłaniać przed słońcem, lecz ograniczają też światło. Ostateczny wybór zależy od szyby, ekspozycji i jasności wnętrza.' },
  { id: 'spadek-temperatury', group: 'sun', question: 'O ile stopni zrobi się chłodniej po montażu?', answer: 'Nie da się tego rzetelnie ustalić na podstawie samego procentu w karcie folii. Na temperaturę wpływają m.in. przeszklenie, nasłonecznienie, wentylacja i pozostałe źródła ciepła. Redukcja energii słonecznej pomaga porównywać materiały, ale nie jest obietnicą konkretnego spadku temperatury pokoju.' },
  { id: 'numery-w-nazwie', group: 'sun', question: 'Czy „20”, „25” lub „40” w nazwie to procent przepuszczanego światła?', answer: 'Nie zakładaj tego. To oznaczenia wariantów, a rzeczywistą przepuszczalność znajdziesz w parametrach wybranego modelu. Na przykład Titan 40 Duo Premium ma referencyjną przepuszczalność światła 36%. Dlatego porównuj dane konkretnej folii, nie sam numer w nazwie.' },
  { id: 'uv-a-cieplo', group: 'sun', question: 'Czy 99% ochrony UV oznacza też mocną ochronę przed upałem?', answer: 'Nie. UV, podczerwień i całkowita energia słoneczna to różne parametry. Folia o wysokiej redukcji UV może pozostawać jasna i służyć przede wszystkim ochronie wyposażenia przed częścią czynników blaknięcia. Przy problemie z nagrzewaniem porównuj redukcję energii słonecznej; sam wynik UV lub IR nie wystarczy.' },
  { id: 'lustro-noca', group: 'privacy', question: 'Czy lustro weneckie osłoni mnie również wieczorem?', answer: 'Nie zapewnia stałej osłony niezależnej od oświetlenia. Lustro działa od jaśniejszej strony. Gdy wieczorem zapalisz światło i wewnątrz będzie jaśniej niż na zewnątrz, wgląd do pokoju może wrócić. Jeśli to kluczowy problem, porównaj mat lub przełączaną osłonę LCD.' },
  { id: 'widok-i-oslona', group: 'privacy', question: 'Chcę widzieć na zewnątrz i jednocześnie zasłonić wnętrze. Czy to możliwe?', answer: 'W dzień efekt lustrzany może ograniczać wgląd i zachowywać widok na zewnątrz, jeśli warunki oświetlenia są odpowiednie. Nie daje jednak takiej samej prywatności przez całą dobę. Mat osłania obraz przez szkło po obu stronach, więc ograniczy również Twój widok.' },
  { id: 'mat-kontury', group: 'privacy', question: 'Czy przez matową folię widać sylwetki?', answer: 'Mogą być widoczne kontury, szczególnie blisko szyby i przy mocnym podświetleniu. Mat rozprasza obraz, ale nie jest nieprzezroczystą ścianą. Wysokość osłony i materiał dobieramy do miejsca obserwacji — inaczej na balustradzie balkonu, a inaczej na przegrodzie we wnętrzu.' },
  { id: 'lcd-prad', group: 'privacy', question: 'Jak działa folia LCD i czy potrzebuje prądu?', answer: 'Folia LCD / PDLC przełącza się między stanem rozpraszającym obraz a bardziej przejrzystym. W prezentowanym wariancie stan przejrzysty wymaga zasilania, a po jego wyłączeniu folia matowieje. Potrzebne są przewody i układ zasilający. Nawet w trybie przejrzystym może pozostawać zamglenie zależne od kąta patrzenia.' },
  { id: 'zgodnosc-szyby', group: 'installation', question: 'Czy każdą folię można przykleić do każdej szyby?', answer: 'Nie. Przed wyborem sprawdzamy rodzaj szkła, pakiet szybowy, powłoki, stan tafli, zacienienie i położenie okna. Sama nazwa „przeciwsłoneczna” nie potwierdza zgodności. Szczególnej oceny wymagają również szyby dachowe i nietypowe przeszklenia.' },
  { id: 'wewnatrz-zewnatrz', group: 'installation', question: 'Nie ma dostępu od zewnątrz. Czy można zamontować folię od środka?', answer: 'Czasem tak, ale wymaga to doboru folii wewnętrznej zgodnej z konkretną szybą. Nie przenosimy produktu zewnętrznego na drugą stronę tylko dlatego, że łatwiej tam dotrzeć. W wycenie uwzględniamy dostęp i sposób montażu, a w razie potrzeby proponujemy inne rozwiązanie.' },
  { id: 'poliweglan', group: 'installation', question: 'Mam świetlik z poliwęglanu. Czy pasuje do niego zwykła folia okienna?', answer: 'Nie należy tego zakładać. Poliwęglan wymaga materiału dopuszczonego do tego tworzywa oraz oceny jego rodzaju i stanu. W tej ścieżce doboru porównasz Polycarbon Silver i Polycarbon White, z montażem od zewnątrz. Dostęp do świetlika i możliwość wykonania prac potwierdzamy przy wycenie.' },
  { id: 'przygotowanie-wyceny', group: 'installation', question: 'Jakie zdjęcia i wymiary przygotować do wyceny?', answer: 'Przygotuj zdjęcie całego przeszklenia, zbliżenie krawędzi i oznaczeń oraz szerokość i wysokość każdej tafli. Podaj liczbę sztuk, miejscowość, piętro i dostęp od zewnątrz. Zaznacz też starą folię lub uszkodzenia. Wstępne dane pomagają wycenić zakres; ostateczny pomiar i warunki montażu ustalamy przed realizacją.' },
  { id: 'folia-czy-okleina', group: 'wrap', question: 'Czym folia na szybę różni się od okleiny architektonicznej?', answer: 'Folia okienna zmienia właściwości lub wygląd przeszklenia. Okleina architektoniczna zmienia wykończenie istniejących drzwi, mebli, recepcji lub ram. W tej ścieżce wybierasz powierzchnię i dekor, a przy drzwiach oraz ramach również stronę zastosowania: wewnętrzną lub zewnętrzną.' },
  { id: 'stan-podloza', group: 'wrap', question: 'Czy okleina zakryje zniszczone fronty lub nierówności?', answer: 'Może zmienić wygląd sprawnej powierzchni, ale nie naprawi luźnych warstw ani uszkodzonej konstrukcji. Nierówności mogą pozostać widoczne pod materiałem. Najpierw oceniamy stabilność podłoża, istniejącą powłokę, krawędzie i potrzebne przygotowanie, a dopiero potem dobieramy okleinę.' },
  { id: 'okleina-na-zewnatrz', group: 'wrap', question: 'Czy każdy dekor nadaje się na zewnętrzną stronę drzwi lub ram?', answer: 'Nie. Materiał trzeba dobrać do zastosowania na zewnątrz, ekspozycji i podłoża. Dekor odpowiedni do mebli w pokoju nie musi być odpowiedni na nasłonecznione drzwi wejściowe. Zaznacz stronę oklejenia w doborze, a dostępne serie i ich warunki użytkowania potwierdzimy przy wycenie.' },
  { id: 'kolor-okleiny', group: 'wrap', question: 'Czy mogę wybrać ostateczny kolor okleiny na ekranie?', answer: 'Podgląd pomaga wybrać kierunek: drewno, kamień, metal lub jednolity kolor. Nie zastępuje fizycznego próbnika konkretnej serii. Ostatecznie porównujemy próbkę przy Twojej powierzchni i w jej oświetleniu, zwracając uwagę również na fakturę, połysk i sposób wykończenia krawędzi.' },
];

// Display only fields actually declared for the selected model.
export const finderVariantFields = [
  ['transmission380', 'Przepuszczanie przy 380 nm (odczyt orientacyjny)', ''],
  ['transmission400', 'Przepuszczanie przy 400 nm (odczyt orientacyjny)', ''],
  ['transmission420', 'Przepuszczanie przy 420 nm (odczyt orientacyjny)', ''],
  ['transmission450', 'Przepuszczanie przy 450 nm (odczyt orientacyjny)', ''],
  ['transmission500', 'Przepuszczanie przy 500 nm (odczyt orientacyjny)', ''],
  ['mountingRestrictions', 'Ograniczenia montażu', ''],
  ['mirrorLevel', 'Intensywność efektu lustra', ''],
  [
    "light",
    "Światło widzialne",
    "%"
  ],
  [
    "solar",
    "Redukcja energii słonecznej",
    "%"
  ],
  [
    "uv",
    "Redukcja UV",
    "%"
  ],
  [
    "ir",
    "Redukcja IR",
    "%"
  ],
  [
    "mounting",
    "Strona montażu",
    ""
  ],
  [
    "color",
    "Kolor / wygląd",
    ""
  ],
  [
    "thickness",
    "Grubość",
    ""
  ],
  [
    "securityClass",
    "Klasa deklarowana",
    ""
  ],
  [
    "materialWarranty",
    "Gwarancja materiału*",
    ""
  ],
  [
    "lightOff",
    "Światło w trybie matowym",
    "%"
  ],
  [
    "power",
    "Pobór mocy",
    ""
  ],
  [
    "filmVoltage",
    "Napięcie folii",
    ""
  ],
  [
    "supply",
    "Zasilanie układu",
    ""
  ],
  [
    "switchOn",
    "Czas włączania",
    ""
  ],
  [
    "switchOff",
    "Czas wyłączania",
    ""
  ],
  [
    "temperature",
    "Temperatura użytkowania",
    ""
  ],
  [
    "width",
    "Szerokość materiału",
    ""
  ],
  [
    "gain",
    "Gain",
    ""
  ],
  [
    "contrast",
    "Kontrast",
    ""
  ],
  [
    "viewAngle",
    "Kąt widzenia",
    ""
  ],
  [
    "projectionAngle",
    "Kąt projekcji",
    ""
  ],
  [
    "projection",
    "Kierunek projekcji",
    ""
  ],
  [
    "exposure",
    "Czas ekspozycji",
    ""
  ]
];
