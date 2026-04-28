export const pricingHeroPoints = [
  {
    label: 'Ceny orientacyjne',
    value: 'brutto / m2',
    description:
      'Zakresy pomagają wstępnie ocenić budżet, ale nie stanowią finalnej wyceny.',
  },
  {
    label: 'Finalna wycena',
    value: 'po kontakcie',
    description:
      'Ostateczny koszt zależy od rodzaju szyby, wymiarów, dostępu, zakresu prac, montażu i osprzętu.',
  },
];

export const pricingGroups = [
  {
    id: 'standard',
    eyebrow: 'Najczęściej wybierane',
    title: 'Folie przeciwsłoneczne, prywatność i komfort',
    lead:
      'Najczęściej wybierane rozwiązania do mieszkań, domów, biur i lokali. Podane ceny mają charakter orientacyjny i odnoszą się do typowych realizacji w standardowych warunkach montażu.',
    items: [
      {
        filmId: 'external-solar',
        serviceRange: '230-295 zl/m2',
        warranty: '3-7 lat',
        note: 'Dla mocno nasłonecznionych szyb, witryn i dużych przeszkleń.',
      },
      {
        filmId: 'internal-solar',
        serviceRange: '120-440 zl/m2',
        warranty: '10-15 lat',
        note: 'Zakres zależy od stopnia selektywności i poziomu przyciemnienia.',
      },
      {
        filmId: 'mirror',
        serviceRange: '125-210 zl/m2',
        warranty: '5-10 lat',
        note: 'Najczęściej montaż od wewnątrz; wersje zewnętrzne liczymy osobno.',
      },
      {
        filmId: 'anti-uv',
        serviceRange: '100-295 zl/m2',
        warranty: '10 lat',
        note: 'Dla witryn, ekspozycji i wnętrz z ryzykiem blaknięcia.',
      },
      {
        filmId: 'matte',
        serviceRange: '110-160 zl/m2',
        warranty: '10-15 lat',
        note: 'Spokojny, satynowy efekt i prywatność bez mocnego zaciemnienia.',
      },
      {
        filmId: 'frosted',
        serviceRange: '95-160 zl/m2',
        warranty: '10-15 lat',
        note: 'Dekoracyjny efekt mrożonego szkła; cena rośnie przy wycinaniu wzorów.',
      },
      {
        filmId: 'thermal',
        serviceRange: '195-245 zl/m2',
        warranty: 'ok. 10 lat',
        note: 'Dla starszych pakietów szybowych, po wcześniejszej ocenie sensu montażu.',
      },
      {
        filmId: 'polycarbonate',
        serviceRange: '160-270 zl/m2',
        warranty: 'ok. 3 lata',
        note: 'Szczególnie do świetlików i tworzyw; wymaga potwierdzenia kompatybilności.',
      },
    ],
  },
  {
    id: 'special',
    eyebrow: 'Rozwiązania specjalistyczne',
    title: 'Bezpieczeństwo i rozwiązania specjalistyczne',
    lead:
      'W tej grupie wycena jeszcze mocniej zależy od klasy folii, certyfikatów, rodzaju szyby i warunków montażu. Pokazane zakresy są orientacyjne i wymagają potwierdzenia po kontakcie.',
    items: [
      {
        filmId: 'anti-burglary',
        serviceRange: '160-275 zl/m2',
        warranty: '5-10 lat',
        note: 'Zakres rośnie wraz z klasą ochrony i potrzebnym systemem kotwienia przy ramie.',
      },
      {
        filmId: 'haccp',
        serviceRange: '115-200 zl/m2',
        warranty: '7-10 lat',
        note: 'Najczęściej dla gastronomii, produkcji i obiektów z wymaganiami HACCP.',
      },
      {
        filmId: 'security',
        serviceRange: '150-245 zl/m2',
        warranty: '3-10 lat',
        note: 'Dla szyb wymagających dodatkowej stabilizacji i ograniczenia odprysków.',
      },
      {
        filmId: 'protective',
        serviceRange: '110-220 zl/m2',
        warranty: 'od czasowej do ok. 10 lat',
        note: 'Stosowane zarówno jako ochrona tymczasowa, jak i bardziej trwała.',
      },
      {
        filmId: 'anti-eavesdropping',
        serviceRange: '690-1900 zl/m2',
        warranty: 'ok. 10 lat',
        note: 'Kategoria bardzo specjalistyczna; finalna wycena zależy od poziomu ekranowania i projektu.',
      },
      {
        filmId: 'projection',
        serviceRange: '540-945 zl/m2',
        warranty: '5-10 lat',
        note: 'Koszt projektora, sterowania i ekspozycji liczymy oddzielnie od samej folii.',
      },
      {
        filmId: 'lcd',
        serviceRange: '1700-3400 zl/m2',
        warranty: '2-5 lat systemowo',
        note: 'Zakres zwykle nie obejmuje wszystkich transformatorów, sterowania i prac elektrycznych w nietypowych realizacjach.',
      },
      {
        filmId: 'anti-collision',
        serviceRange: '190-420 zl/m2',
        warranty: '3-7 lat',
        note: 'Cena zależy od wzoru, gęstości oznaczeń i charakteru elewacji.',
      },
    ],
  },
  {
    id: 'individual',
    eyebrow: 'Wycena bardziej indywidualna',
    title: 'Powierzchnie i usługi wyceniane bardziej indywidualnie',
    lead:
      'W tych pracach cena w największym stopniu zależy od stanu podłoża, detali, narożników, dostępu i czasu pracy, dlatego podane kwoty traktuj jako orientacyjne i wstępne.',
    items: [
      {
        filmId: 'architectural-wraps',
        serviceRange: 'najczęściej od ok. 220 zl/m2 lub za element',
        warranty: '3-7 lat',
        note: 'Dla ram, drzwi, futryn, mebli i lad finalny koszt mocno zależy od krawędzi i stanu powierzchni.',
      },
      {
        filmId: 'film-removal',
        serviceRange: 'najczęściej od ok. 60 do 180 zl/m2',
        warranty: 'nie dotyczy',
        note: 'Demontaż wyceniamy po typie folii, wieku aplikacji, kleju i tym, czy szyba ma być przygotowana pod nowy montaż.',
      },
    ],
  },
];

export const pricingFactors = [
  'typ szyby, liczba szyb w pakiecie i to, czy szkło ma już powłoki',
  'montaż od wewnątrz czy od zewnątrz oraz dostęp do krawędzi',
  'wysokość, podział na skrzydła, liczba mniejszych formatów i ilość docinek',
  'niestandardowe elementy: łuki, witryny, narożniki, szprosy, świetliki, balustrady',
  'czy projekt obejmuje tylko folię, czy też demontaż starej aplikacji, okleiny, sterowanie LCD lub osprzęt',
];

export const pricingProcess = [
  {
    step: '1',
    title: 'Wysyłasz zdjęcia i orientacyjne wymiary',
    text:
      'Najlepiej od uszczelki do uszczelki, plus kilka zdjęć całego miejsca i zbliżenia szyb.',
  },
  {
    step: '2',
    title: 'Doprecyzowujemy rodzaj folii i warunki montażu',
    text:
      'Sprawdzamy, czy priorytetem jest słońce, prywatność, bezpieczeństwo, efekt dekoracyjny czy rozwiązanie specjalistyczne.',
  },
  {
    step: '3',
    title: 'Wracamy z realną wyceną i gwarancją dla wybranego wariantu',
    text:
      'Dopiero wtedy podajemy finalny koszt, zakres prac i przewidywany termin realizacji.',
  },
];

export const pricingByFilmId = pricingGroups.reduce((acc, group) => {
  group.items.forEach((item) => {
    acc[item.filmId] = {
      serviceRange: item.serviceRange,
      warranty: item.warranty,
    };
  });

  return acc;
}, {});
