import React from 'react';
import Link from 'next/link';
import { filmsData } from '../../data/filmsData';
import {
  LocalWrap,
  LocalHero,
  LocalEyebrow,
  LocalTitle,
  LocalLead,
  LocalActions,
  LocalGrid,
  LocalCard,
  LocalSection,
  LocalList,
  LocalServiceGrid,
  LocalServiceLink,
} from './LocalWindowFilmsPage.styled';

const localPages = {
  krakow: {
    eyebrow: 'Kraków i okolice',
    title: 'Montaż folii okiennych w Krakowie',
    lead:
      'Lumera pomaga dobrać i zamontować folie okienne do mieszkań, domów, biur oraz lokali usługowych w Krakowie i okolicach. Pracujemy z foliami przeciwsłonecznymi, matowymi, ochronnymi, bezpiecznymi, specjalistycznymi oraz z demontażem starszych aplikacji.',
    areaTitle: 'Kraków i okolice',
    areaText:
      'Realizujemy zapytania między innymi w Krakowie, Rudawie, Zabierzowie, Krzeszowicach i pobliskich miejscowościach.',
    intro:
      'W Krakowie często pracujemy z mieszkaniami od strony mocnego słońca, lokalami usługowymi z witrynami, gabinetami oraz biurami, gdzie liczy się komfort pracy, prywatność i estetyczny wygląd przeszkleń.',
    audience: [
      'dla mieszkań i domów, w których przeszkadza nagrzewanie albo brak prywatności',
      'dla biur, gabinetów i sal spotkań z dużymi przeszkleniami',
      'dla lokali usługowych, witryn i przestrzeni komercyjnych',
      'dla obiektów, w których trzeba zabezpieczyć szyby lub ograniczyć ryzyko rozprysku szkła',
      'dla klientów, którzy chcą usunąć starą folię i przygotować szybę pod nową aplikację',
    ],
    process:
      'Najlepiej przesłać szerokość, wysokość i liczbę szyb, krótki opis problemu oraz zdjęcia okien. Dzięki temu możemy szybciej określić, jaki rodzaj folii ma sens i czy przed wyceną potrzebne będą dodatkowe informacje.',
  },
  katowice: {
    eyebrow: 'Katowice i aglomeracja śląska',
    title: 'Montaż folii okiennych w Katowicach',
    lead:
      'Lumera przyjmuje zapytania o montaż folii okiennych również dla Katowic i okolic. To kierunek szczególnie sensowny przy większych przeszkleniach, biurach, lokalach usługowych, witrynach oraz realizacjach, w których liczy się dobór folii pod konkretny problem.',
    areaTitle: 'Katowice i okolice',
    areaText:
      'Obsługę Katowic najlepiej planować przy większych realizacjach lub kilku przeszkleniach, tak aby dobrze połączyć pomiar, doradztwo i montaż.',
    intro:
      'W Katowicach folie okienne dobrze sprawdzają się w biurach, lokalach przy ruchliwych ulicach, mieszkaniach z dużymi przeszkleniami oraz obiektach usługowych, gdzie ważne są komfort termiczny, prywatność i bezpieczeństwo szyb.',
    audience: [
      'dla biur i lokali usługowych z dużymi przeszkleniami lub witrynami',
      'dla mieszkań, w których problemem jest słońce, odblaski lub nagrzewanie',
      'dla gabinetów, sal spotkań i przestrzeni wymagających prywatności',
      'dla obiektów, które chcą zabezpieczyć szyby bez wymiany stolarki',
      'dla klientów planujących demontaż starej folii i montaż nowego rozwiązania',
    ],
    process:
      'Przy zapytaniach z Katowic szczególnie pomaga komplet informacji na starcie: wymiary, liczba szyb, zdjęcia, piętro, dostęp do okien i oczekiwany efekt. Na tej podstawie łatwiej ocenić, czy potrzebny będzie pomiar, jaki typ folii dobrać i jak zaplanować realizację.',
  },
};

const LocalWindowFilmsPage = ({ city = 'krakow' }) => {
  const page = localPages[city] || localPages.krakow;

  return (
    <main id="main-content">
      <LocalWrap>
        <LocalHero>
          <LocalEyebrow>{page.eyebrow}</LocalEyebrow>
          <LocalTitle>{page.title}</LocalTitle>
          <LocalLead>{page.lead}</LocalLead>
          <LocalActions>
            <Link href="/#kontakt">Zapytaj o wycenę</Link>
            <Link href="/#folie-okienne">Zobacz rodzaje folii</Link>
          </LocalActions>
        </LocalHero>

        <LocalGrid>
          <LocalCard>
            <span>Usługa</span>
            <strong>Dobór i montaż folii</strong>
            <p>Pomagamy wybrać rozwiązanie pod słońce, prywatność, bezpieczeństwo albo estetykę.</p>
          </LocalCard>
          <LocalCard>
            <span>Obszar</span>
            <strong>{page.areaTitle}</strong>
            <p>{page.areaText}</p>
          </LocalCard>
          <LocalCard>
            <span>Kontakt</span>
            <strong>+48 605 505 714</strong>
            <p>Najwygodniej przesłać wymiary okien i zdjęcia przez formularz kontaktowy.</p>
          </LocalCard>
        </LocalGrid>

        <LocalSection>
          <h2>Folie okienne dopasowane do miejsca i oczekiwanego efektu</h2>
          <p>{page.intro}</p>
        </LocalSection>

        <LocalSection>
          <h2>Jakie folie okienne montujemy?</h2>
          <p>
            Zakres prac zależy od rodzaju szyby, miejsca montażu i efektu, którego
            oczekuje klient. Poniżej znajdziesz najważniejsze kategorie folii
            dostępne w ofercie Lumera.
          </p>
          <LocalServiceGrid>
            {filmsData.map((film) => (
              <LocalServiceLink key={film.id} href={film.path}>
                {film.name}
              </LocalServiceLink>
            ))}
          </LocalServiceGrid>
        </LocalSection>

        <LocalSection>
          <h2>Dla kogo jest montaż folii okiennych?</h2>
          <LocalList>
            {page.audience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </LocalList>
        </LocalSection>

        <LocalSection>
          <h2>Jak wygląda pierwszy kontakt?</h2>
          <p>{page.process}</p>
          <LocalActions className="local-actions--bottom">
            <Link href="/#kontakt">Przejdź do formularza</Link>
          </LocalActions>
        </LocalSection>
      </LocalWrap>
    </main>
  );
};

export const LocalWindowFilmsKatowicePage = () => <LocalWindowFilmsPage city="katowice" />;

export default LocalWindowFilmsPage;
