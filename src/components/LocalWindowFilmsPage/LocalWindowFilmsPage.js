import React from 'react';
import Link from 'next/link';
import { filmsData } from '../../data/filmsData';
import { localServicePagesData } from '../../data/localServicePagesData';
import { problemPagesData } from '../../data/problemPagesData';
import lcdInstallationImage from '../../img/generated/montaz-folii-lcd.webp';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import {
  LocalWrap,
  LocalHero,
  LocalEyebrow,
  LocalTitle,
  LocalLead,
  LocalActions,
  LocalHeroSplit,
  LocalHeroVisual,
  LocalGrid,
  LocalCard,
  LocalSection,
  LocalList,
  LocalServiceGrid,
  LocalServiceLink,
} from './LocalWindowFilmsPage.styled';

const lcdInstallationImageSrc = lcdInstallationImage.src || lcdInstallationImage;

const lcdInstallationPage = {
  eyebrow: 'Montaż folii LCD',
  title: 'Montaż folii LCD i inteligentnych folii PDLC',
  lead:
    'Folia LCD zmienia szklaną powierzchnię z transparentnej w mleczną po przełączeniu zasilania. To rozwiązanie dla miejsc, gdzie prywatność ma być dostępna na żądanie: sal konferencyjnych, gabinetów, hoteli, showroomów i nowoczesnych przeszkleń wewnętrznych.',
  useCases: [
    'sale konferencyjne, meeting roomy i szklane boksy w biurach',
    'gabinety lekarskie, kosmetologiczne, zarządcze i konsultacyjne',
    'hotele, apartamenty, łazienki premium oraz strefy spa',
    'showroomy, ekspozycje i witryny z nowoczesnym efektem technologii',
    'szklane ściany, które czasem mają być otwarte wizualnie, a czasem prywatne',
  ],
  planning: [
    'dokładne wymiary każdej tafli szkła od uszczelki do uszczelki i liczba szyb',
    'zdjęcia całego przeszklenia oraz zbliżenia krawędzi',
    'miejsce, w którym może znaleźć się zasilacz i punkt sterowania',
    'informacja, czy folia ma działać z przełącznika, pilota lub automatyki',
    'opis oczekiwanego efektu: prywatność, prezentacja, projekcja albo efekt premium',
  ],
  benefits: [
    'prywatność bez stałego zasłaniania szkła',
    'mleczny tryb z jasnym, rozproszonym światłem',
    'nowoczesny wygląd bez rolet, kaset i prowadnic',
    'możliwość wykorzystania trybu mlecznego jako powierzchni prezentacyjnej',
  ],
};

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
      'Najlepiej przesłać szerokość i wysokość mierzone od uszczelki do uszczelki, liczbę szyb, krótki opis problemu oraz zdjęcia okien. Dzięki temu możemy szybciej określić, jaki rodzaj folii ma sens i czy przed wyceną potrzebne będą dodatkowe informacje.',
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
      'Przy zapytaniach z Katowic szczególnie pomaga komplet informacji na starcie: wymiary od uszczelki do uszczelki, liczba szyb, zdjęcia, piętro, dostęp do okien i oczekiwany efekt. Na tej podstawie łatwiej ocenić, czy potrzebny będzie pomiar, jaki typ folii dobrać i jak zaplanować realizację.',
  },
};

const LocalWindowFilmsPage = ({ city = 'krakow', breadcrumbs }) => {
  const page = localPages[city] || localPages.krakow;
  const cityName = city === 'katowice' ? 'Katowice' : 'Kraków';
  const servicePages = localServicePagesData.filter((item) => item.city === cityName);
  const problemLinks = problemPagesData.filter((item) =>
    [
      '/jak-ograniczyc-nagrzewanie-mieszkania',
      '/folia-na-okno-przed-sasiadami',
      '/folia-na-okna-od-poludnia',
      '/folia-na-witryne-sklepowa',
    ].includes(item.path)
  );

  return (
    <main id="main-content">
      <LocalWrap>
        <LocalHero>
          <Breadcrumbs items={breadcrumbs} />
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
            <p>Najwygodniej przesłać wymiary okien od uszczelki do uszczelki i zdjęcia przez formularz kontaktowy.</p>
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

        {servicePages.length > 0 && (
          <LocalSection>
            <h2>Najważniejsze usługi lokalne</h2>
            <p>
              Jeśli znasz już typ folii, możesz przejść bezpośrednio do lokalnej strony
              usługi. To pomaga szybciej połączyć problem, rodzaj folii i miejsce montażu.
            </p>
            <LocalServiceGrid>
              {servicePages.map((item) => (
                <LocalServiceLink key={item.path} href={item.path}>
                  {item.title}
                </LocalServiceLink>
              ))}
            </LocalServiceGrid>
          </LocalSection>
        )}

        <LocalSection>
          <h2>Nie znasz nazwy folii? Zacznij od problemu</h2>
          <p>
            W wielu zapytaniach najpierw pojawia się problem: nagrzewanie, brak
            prywatności, okna od południa albo witryna sklepu. Te podstrony pomagają
            przejść od objawu do właściwego rozwiązania.
          </p>
          <LocalServiceGrid>
            {problemLinks.map((item) => (
              <LocalServiceLink key={item.path} href={item.path}>
                {item.title}
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

export const LocalWindowFilmsKatowicePage = (props) => (
  <LocalWindowFilmsPage city="katowice" {...props} />
);

export const LcdInstallationPage = ({ breadcrumbs }) => (
  <main id="main-content">
    <LocalWrap>
      <LocalHeroSplit>
        <LocalHero>
          <Breadcrumbs items={breadcrumbs} />
          <LocalEyebrow>{lcdInstallationPage.eyebrow}</LocalEyebrow>
          <LocalTitle>{lcdInstallationPage.title}</LocalTitle>
          <LocalLead>{lcdInstallationPage.lead}</LocalLead>
          <LocalActions>
            <Link href="/#kontakt">Zapytaj o montaż LCD</Link>
            <Link href="/folie-lcd">Zobacz opis folii LCD</Link>
          </LocalActions>
        </LocalHero>

        <LocalHeroVisual>
          <img
            src={lcdInstallationImageSrc}
            alt="Wizualizacja folii LCD na szklanej ścianie w trybie transparentnym i mlecznym"
            loading="eager"
            decoding="async"
          />
          <figcaption>
            Folia LCD pozwala przełączać szybę między efektem transparentnym i mlecznym,
            dlatego dobrze sprawdza się w przeszklonych salach spotkań oraz gabinetach.
          </figcaption>
        </LocalHeroVisual>
      </LocalHeroSplit>

      <LocalGrid>
        <LocalCard>
          <span>Technologia</span>
          <strong>PDLC / smart film</strong>
          <p>Bez zasilania folia najczęściej jest mleczna, a po podaniu napięcia staje się transparentna.</p>
        </LocalCard>
        <LocalCard>
          <span>Najważniejsze</span>
          <strong>Zasilanie i krawędzie</strong>
          <p>Najlepszy efekt daje wcześniejsze zaplanowanie przewodów, zasilacza i sposobu sterowania.</p>
        </LocalCard>
        <LocalCard>
          <span>Kontakt</span>
          <strong>+48 605 505 714</strong>
          <p>Do wstępnej wyceny najlepiej wysłać zdjęcia, wymiary od uszczelki do uszczelki i miejsce montażu.</p>
        </LocalCard>
      </LocalGrid>

      <LocalSection>
        <h2>Folia LCD to nie zwykła folia dekoracyjna</h2>
        <p>
          W środku folii znajdują się ciekłe kryształy rozproszone w warstwie polimerowej.
          Gdy nie są uporządkowane, rozpraszają światło i szyba wygląda mlecznie. Po
          podaniu napięcia kryształy ustawiają się w jednym kierunku, dzięki czemu szkło
          robi się przejrzyste. Dlatego przy montażu liczy się nie tylko czysta szyba,
          ale też instalacja elektryczna, estetyka krawędzi i wygodne sterowanie.
        </p>
      </LocalSection>

      <LocalSection>
        <h2>Gdzie montaż folii LCD ma najwięcej sensu?</h2>
        <LocalList>
          {lcdInstallationPage.useCases.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </LocalList>
      </LocalSection>

      <LocalSection>
        <h2>Co przygotować do wyceny?</h2>
        <p>
          Przy folii LCD najważniejsze jest sprawdzenie, czy da się sensownie doprowadzić
          zasilanie i ukryć elementy instalacji. Im lepsze informacje na starcie, tym
          łatwiej ocenić realny zakres prac.
        </p>
        <LocalList>
          {lcdInstallationPage.planning.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </LocalList>
      </LocalSection>

      <LocalSection>
        <h2>Najważniejsze korzyści</h2>
        <LocalList>
          {lcdInstallationPage.benefits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </LocalList>
      </LocalSection>

      <LocalSection>
        <h2>Jak przejść do montażu?</h2>
        <p>
          Wyślij zdjęcia przeszklenia, wymiary tafli od uszczelki do uszczelki, miejsce
          montażu i informację, gdzie można doprowadzić zasilanie. Na tej podstawie można
          wstępnie ocenić, czy lepszy będzie montaż folii LCD na istniejącej szybie, czy
          zaplanowanie rozwiązania razem z nową zabudową szklaną.
        </p>
        <LocalActions className="local-actions--bottom">
          <Link href="/#kontakt">Przejdź do formularza</Link>
        </LocalActions>
      </LocalSection>
    </LocalWrap>
  </main>
);

export default LocalWindowFilmsPage;
