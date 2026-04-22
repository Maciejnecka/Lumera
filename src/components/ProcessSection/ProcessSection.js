import React from 'react';
import {
  ProcessWrap,
  ProcessIntro,
  ProcessGrid,
  ProcessStep,
} from './ProcessSection.styled';

const steps = [
  {
    title: 'Wysyłasz opis, wymiary i zdjęcia',
    text:
      'Na start wystarczy krótko opisać problem, podać orientacyjne wymiary szyb i dodać zdjęcia okien lub witryny.',
  },
  {
    title: 'Dobieramy sensowny typ folii',
    text:
      'Sprawdzamy, czy ważniejsza jest redukcja ciepła, prywatność, bezpieczeństwo, efekt dekoracyjny czy demontaż starej folii.',
  },
  {
    title: 'Ustalamy zakres i termin',
    text:
      'Jeśli informacje są wystarczające, przygotowujemy wstępną odpowiedź. Przy większych realizacjach umawiamy pomiar lub dodatkowe ustalenia.',
  },
  {
    title: 'Montujemy i zostawiamy porządek',
    text:
      'Pracujemy tak, żeby efekt był estetyczny, a klient wiedział, jak dbać o folię po montażu.',
  },
];

const ProcessSection = () => {
  return (
    <ProcessWrap>
      <ProcessIntro data-aos="fade-up">
        <span>Jak wygląda współpraca</span>
        <h2>Prosty proces od pierwszego kontaktu do gotowego montażu.</h2>
        <p>
          Nie musisz znać technicznych parametrów folii. Wystarczy, że pokażesz
          nam okna i opiszesz, co przeszkadza w codziennym użytkowaniu przestrzeni.
        </p>
      </ProcessIntro>

      <ProcessGrid>
        {steps.map((step, index) => (
          <ProcessStep key={step.title} data-aos="fade-up" data-aos-delay={index * 60}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </ProcessStep>
        ))}
      </ProcessGrid>
    </ProcessWrap>
  );
};

export default ProcessSection;
