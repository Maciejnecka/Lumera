import React from 'react';
import {
  AboutSectionWrap,
  SectionIntro,
  AboutGrid,
  StoryCard,
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
      <SectionIntro data-aos="fade-up">
        <span>O nas</span>
        <h2>
          Lumera to marka, która stawia na komfort, estetykę i dobrze dobrane
          rozwiązania.
        </h2>
        <p>
          Lumera powstała z myślą o klientach, którzy chcą poprawić komfort
          wnętrza bez kosztownej wymiany szyb i bez ciężkich osłon okiennych.
          Łączymy estetyczne podejście z praktycznym doradztwem, tak aby dobrać
          rozwiązanie naprawdę dopasowane do przestrzeni i oczekiwanego efektu.
        </p>
      </SectionIntro>

      <AboutGrid>
        <StoryCard data-aos="fade-up">
          <span>O marce Lumera</span>
          <h3>Najpierw rozpoznajemy szybę, dopiero potem proponujemy folię.</h3>
          <p>
            Dobre doradztwo zaczyna się od szczegółów: kierunku światła,
            rodzaju pakietu szybowego, wymiarów, dostępu do okna i tego, co
            faktycznie przeszkadza na co dzień. Dlatego prosimy o zdjęcia,
            krótki opis sytuacji i orientacyjne wymiary, a potem zawężamy wybór
            do rozwiązań, które mają sens techniczny i wizualny. Chodzi o to,
            żeby nie kupować "jakiejkolwiek folii", tylko dobrać efekt do
            konkretnej szyby, pomieszczenia i sposobu użytkowania.
          </p>
        </StoryCard>

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
