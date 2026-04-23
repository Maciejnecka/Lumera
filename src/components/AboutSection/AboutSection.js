import React from 'react';
import {
  AboutSectionWrap,
  SectionIntro,
  AboutGrid,
  IntroNote,
  ValuesCard,
} from './AboutSection.styled';

const values = [
  'Doradzamy pod konkretny problem, nie pod przypadkowy produkt.',
  'Stawiamy na estetykę wykonania i czytelną komunikację.',
  'Chcemy, aby klient od początku wiedział, czego może się spodziewać.',
];

const AboutSection = () => {
  return (
    <AboutSectionWrap id="o-nas">
      <AboutGrid>
        <SectionIntro data-aos="fade-up">
          <span>O nas</span>
          <h2>
            Najpierw rozpoznajemy szybę i problem, dopiero potem proponujemy
            folię.
          </h2>
          <p>
            Pomagamy poprawić komfort wnętrza bez kosztownej wymiany szyb i bez
            ciężkich osłon okiennych, ale nie zaczynamy od przypadkowego
            produktu. Najpierw patrzymy na kierunek światła, rodzaj pakietu
            szybowego, wymiary, dostęp do okna i to, co faktycznie przeszkadza
            na co dzień. Dzięki temu dobieramy rozwiązanie, które ma sens
            techniczny, dobrze wygląda i naprawdę pasuje do konkretnej
            przestrzeni.
          </p>
          <IntroNote>
            Zaczynamy od kilku zdjęć, krótkiego opisu i orientacyjnych
            wymiarów. To zwykle wystarcza, żeby odsiać przypadkowe opcje i
            zawęzić wybór do rozwiązań, które naprawdę mają sens.
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
    </AboutSectionWrap>
  );
};

export default AboutSection;
