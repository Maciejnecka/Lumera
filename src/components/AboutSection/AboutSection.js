import React from 'react';
import {
  AboutSectionWrap,
  AboutShell,
  AboutHero,
  AboutKicker,
  AboutTitle,
  AboutLead,
  AboutNote,
  ProofPanel,
  ProofHeader,
  ProofStats,
  ProofStat,
  PrinciplesGrid,
  PrincipleCard,
  SpacesPanel,
  SpacesHeader,
  SpacesGrid,
  SpaceCard,
} from './AboutSection.styled';

const proofStats = [
  {
    value: 'Od 2018',
    label: 'praca przy foliach okiennych, dekoracyjnych i specjalistycznych',
  },
  {
    value: 'Setki',
    label: 'montaży przy mieszkaniach, biurach, lokalach i witrynach',
  },
  {
    value: 'Tysiące m²',
    label: 'folii ułożonej na szybach, witrynach i szklanych ścianach',
  },
];

const principles = [
  {
    title: 'Najpierw szyba',
    text:
      'Sprawdzamy typ przeszklenia, ekspozycję na słońce, dostęp do montażu i oczekiwany efekt. Dopiero potem zawężamy wybór folii.',
  },
  {
    title: 'Bez obietnic w ciemno',
    text:
      'Mówimy wprost, kiedy folia ma sens, kiedy trzeba porównać warianty, a kiedy lepiej szukać innego sposobu osłony lub zabezpieczenia.',
  },
  {
    title: 'Detal robi różnicę',
    text:
      'Liczy się czysta szyba, równa krawędź, dobry dobór produktu i spokojna instrukcja użytkowania po montażu.',
  },
];

const spaces = [
  'Domy i mieszkania',
  'Biura i gabinety',
  'Lokale i witryny',
  'Szklane ściany',
  'Tarasy i ogrody zimowe',
];

const AboutSection = () => {
  return (
    <AboutSectionWrap id="o-nas">
      <AboutShell>
        <AboutHero data-aos="fade-up">
          <AboutKicker>O nas</AboutKicker>
          <AboutTitle>Lumera jest świeżą marką, ale nie startuje od zera.</AboutTitle>
          <AboutLead>
            Za jej powstaniem stoją lata pracy przy foliach okiennych: setki
            montaży, tysiące metrów aplikacji i wiele różnych sytuacji ze szkłem,
            słońcem, prywatnością oraz bezpieczeństwem.
          </AboutLead>
          <AboutNote>
            Lumera jest nową marką, ale nie zaczynamy od zera. Od 2018 roku
            pracujemy przy foliach okiennych, ucząc się na realnych szybach,
            trudnych ekspozycjach i różnych typach montaży. Dziś ta praktyka
            pomaga nam szybciej dobrać rozwiązanie, które ma sens technicznie i
            dobrze wygląda po montażu.
          </AboutNote>
        </AboutHero>

        <ProofPanel data-aos="fade-up" data-aos-delay="80">
          <ProofHeader>
            <span>Praktyka z terenu</span>
            <h3>Dobór folii zaczyna się od warunków, nie od katalogu.</h3>
            <p>
              Dlatego przed wyceną prosimy o zdjęcia, wymiary i krótki opis
              problemu. To pozwala szybciej odróżnić dobry kierunek od rozwiązania,
              które tylko wygląda dobrze na papierze.
            </p>
          </ProofHeader>

          <ProofStats>
            {proofStats.map((item) => (
              <ProofStat key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </ProofStat>
            ))}
          </ProofStats>

        </ProofPanel>
      </AboutShell>

      <PrinciplesGrid data-aos="fade-up">
        {principles.map((item) => (
          <PrincipleCard key={item.title}>
            <span>{item.title}</span>
            <p>{item.text}</p>
          </PrincipleCard>
        ))}
      </PrinciplesGrid>

      <SpacesPanel data-aos="fade-up">
        <SpacesHeader>
          <span>Gdzie pomagamy</span>
          <h3>Każda przestrzeń wymaga trochę innego podejścia.</h3>
          <p>
            Inaczej dobiera się folię do mieszkania od zachodu, inaczej do witryny
            przy ulicy, a jeszcze inaczej do szklanej sali spotkań. Dlatego
            patrzymy na miejsce, światło i sposób użytkowania, a nie tylko na nazwę
            produktu.
          </p>
        </SpacesHeader>

        <SpacesGrid>
          {spaces.map((space) => (
            <SpaceCard key={space}>{space}</SpaceCard>
          ))}
        </SpacesGrid>
      </SpacesPanel>
    </AboutSectionWrap>
  );
};

export default AboutSection;
