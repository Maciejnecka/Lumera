import React from 'react';
import {
  AboutSectionWrap,
  SectionIntro,
  AboutGrid,
  IntroNote,
  ValuesCard,
  PlaceIcon,
  PlacesGrid,
  PlacesHeader,
  PlacesPanel,
  PlaceCard,
} from './AboutSection.styled';

const values = [
  'Nie zaczynamy od katalogu folii, tylko od pytania: co ma się zmienić przy tej konkretnej szybie?',
  'Tłumaczymy różnice prostym językiem, żeby decyzja była świadoma, a nie przypadkowa.',
  'Pilnujemy detalu: doboru folii, czystości montażu, krawędzi, komunikacji i zaleceń po realizacji.',
];

const placeIcons = {
  home: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M8 23 24 10l16 13" />
      <path d="M12 21v17h24V21" />
      <path d="M20 38V27h8v11" />
      <path d="M14 18.8V12h6v2" />
      <path d="M31 28h3M31 33h3M15 28h3M15 33h3" />
    </svg>
  ),
  office: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M12 40V10l18-4v34" />
      <path d="M30 18h8v22" />
      <path d="M17 16h4M17 22h4M17 28h4M17 34h4" />
      <path d="M25 15h1M25 21h1M25 27h1M25 33h1" />
      <path d="M34 24h2M34 30h2M34 36h2" />
    </svg>
  ),
  storefront: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M10 19h28l-2-9H12l-2 9Z" />
      <path d="M12 19v19h24V19" />
      <path d="M17 38V25h14v13" />
      <path d="M10 19c2 3 5 3 7 0 2 3 5 3 7 0 2 3 5 3 7 0 2 3 5 3 7 0" />
    </svg>
  ),
  glass: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M13 10h22v28H13z" />
      <path d="M24 10v28" />
      <path d="M17 15h4M27 15h4" />
      <path d="M18 35 32 13" />
    </svg>
  ),
  winterGarden: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M9 21h30" />
      <path d="M13 21v18M35 21v18" />
      <path d="M16 21v-6l16-5v11" />
      <path d="M17 27h14M17 33h14" />
      <path d="M11 39h27" />
    </svg>
  ),
};

const places = [
  {
    icon: 'home',
    title: 'Domy i mieszkania',
    text: 'Mniej nagrzewania, mniej odblasków i więcej prywatności bez ciężkich rolet.',
  },
  {
    icon: 'office',
    title: 'Biura i firmy',
    text: 'Komfort pracy przy dużych przeszkleniach, salach spotkań i recepcjach.',
  },
  {
    icon: 'storefront',
    title: 'Witryny i lokale',
    text: 'Ochrona ekspozycji, ograniczenie słońca i estetyczne szkło od strony ulicy.',
  },
  {
    icon: 'glass',
    title: 'Szkło wewnętrzne',
    text: 'Prywatność, dekoracja i nowoczesny efekt na gabinetach oraz przegrodach.',
  },
  {
    icon: 'winterGarden',
    title: 'Tarasy i ogrody zimowe',
    text: 'Lepszy komfort w mocno nasłonecznionych miejscach przez większą część roku.',
  },
];

const AboutSection = () => {
  return (
    <AboutSectionWrap id="o-nas">
      <AboutGrid>
        <SectionIntro data-aos="fade-up">
          <span>O nas</span>
          <h2>
            Najpierw rozpoznajemy szybę, światło i problem. Dopiero potem
            proponujemy folię.
          </h2>
          <p>
            Lumera powstała z prostego założenia: dobra folia okienna nie jest
            tylko dodatkiem do szyby, ale decyzją, która ma poprawić codzienne
            korzystanie z przestrzeni. Dlatego nie dobieramy produktu na oko.
            Najpierw analizujemy nasłonecznienie, układ pomieszczenia, rodzaj
            przeszklenia, oczekiwany poziom prywatności, bezpieczeństwo i efekt,
            który ma zostać po montażu. Dopiero wtedy zawężamy wybór do rozwiązań,
            które mają sens techniczny i wizualny.
          </p>
          <IntroNote>
            W praktyce zaczynamy od kilku zdjęć, krótkiego opisu problemu i
            wymiarów szyby podanych od uszczelki do uszczelki. To pozwala szybko
            odsiać przypadkowe pomysły, uniknąć nietrafionej folii i przygotować
            rozmowę o rozwiązaniu, które naprawdę pasuje do miejsca montażu.
          </IntroNote>
        </SectionIntro>

        <ValuesCard data-aos="fade-up" data-aos-delay="80">
          <span>Jak pracujemy</span>
          <ul>
            {values.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </ValuesCard>
      </AboutGrid>

      <PlacesPanel data-aos="fade-up">
        <PlacesHeader>
          <span>Gdzie pomagamy</span>
          <h3>Folie okienne sprawdzają się w wielu typach przestrzeni.</h3>
          <p>
            Dobieramy je inaczej do mieszkania, inaczej do biura, a jeszcze
            inaczej do witryny lub szklanej ściany. Liczy się nie tylko rodzaj
            folii, ale też światło, funkcja miejsca i oczekiwany efekt po
            montażu.
          </p>
        </PlacesHeader>

        <PlacesGrid>
          {places.map((place) => (
            <PlaceCard key={place.title}>
              <PlaceIcon>{placeIcons[place.icon]}</PlaceIcon>
              <strong>{place.title}</strong>
              <p>{place.text}</p>
            </PlaceCard>
          ))}
        </PlacesGrid>
      </PlacesPanel>
    </AboutSectionWrap>
  );
};

export default AboutSection;
