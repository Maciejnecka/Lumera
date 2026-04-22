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
          <h3>Nowa marka oparta na doświadczeniu w montażu folii okiennych.</h3>
          <p>
            Lumera powstała z myślą o osobach, które chcą poprawić komfort
            wnętrza bez kosztownej wymiany szyb i bez rezygnowania z estetyki.
            Pomagamy dobrać folie do mieszkań, domów, biur i lokali usługowych,
            w których ważne są mniejszy upał, większa prywatność i nowoczesny
            wygląd przeszkleń. Zależy nam, żeby cały proces był prosty,
            przejrzysty i wygodny od pierwszej rozmowy aż po gotowy montaż.
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
