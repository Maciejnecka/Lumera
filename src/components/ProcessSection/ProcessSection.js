import React from 'react';
import {
  ProcessWrap,
  ProcessIntro,
  ProcessFlow,
  ProcessConnector,
  ProcessIcon,
  ProcessStep,
} from './ProcessSection.styled';

const steps = [
  {
    icon: 'phone',
    label: 'Kontakt',
    title: 'Pokazujesz nam szyby',
    text:
      'Wysyłasz zdjęcia, krótki opis problemu i wymiary od uszczelki do uszczelki.',
  },
  {
    icon: 'sample',
    label: 'Dobór folii',
    title: 'Odsiewamy przypadkowe opcje',
    text:
      'Sprawdzamy, czy ważniejszy jest komfort cieplny, prywatność, bezpieczeństwo czy efekt dekoracyjny.',
  },
  {
    icon: 'calculator',
    label: 'Wycena',
    title: 'Dostajesz czytelny zakres',
    text:
      'Podajemy możliwe rozwiązanie, orientacyjny koszt i to, co warto doprecyzować przed montażem.',
  },
  {
    icon: 'squeegee',
    label: 'Montaż',
    title: 'Pracujemy czysto i dokładnie',
    text:
      'Na miejscu przygotowujemy szybę, montujemy folię i pilnujemy estetyki krawędzi.',
  },
  {
    icon: 'check',
    label: 'Gotowe',
    title: 'Zostaje efekt na lata',
    text:
      'Omawiamy pielęgnację po montażu, żeby folia dobrze wyglądała i pracowała jak należy.',
  },
];

const processIcons = {
  phone: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.3 4.8 9 8.7c.2.5.1 1-.3 1.4l-1 1c1.1 2.2 2.9 4 5.1 5.1l1-1c.4-.4 1-.5 1.4-.3l3.9 1.7c.6.3.9.9.8 1.5l-.4 2.1c-.1.6-.7 1.1-1.4 1.1C9.5 21.2 2.8 14.5 2.8 6c0-.7.5-1.2 1.1-1.4L6 4.2c.6-.1 1.1.1 1.3.6Z" />
    </svg>
  ),
  sample: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12.7 2.9 7.9 4.5-8.5 4.9-7.9-4.6 8.5-4.8Z" />
      <path d="m4.2 11.1 7.9 4.6 8.5-4.9" />
      <path d="m4.2 15.1 7.9 4.6 8.5-4.9" />
    </svg>
  ),
  calculator: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="2.3" />
      <path d="M8 7h8" />
      <path d="M8 11h.1M12 11h.1M16 11h.1M8 15h.1M12 15h.1M16 15h.1M8 18h.1M12 18h4" />
    </svg>
  ),
  squeegee: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5h16v4H4z" />
      <path d="M7 9h10l-1.2 10H8.2L7 9Z" />
      <path d="M9.2 13h5.6" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12.7 4.1 4.1L19.4 6.5" />
    </svg>
  ),
};

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

      <ProcessFlow>
        {steps.map((step, index) => (
          <ProcessStep
            key={step.title}
            data-aos="fade-up"
            data-aos-delay={index * 70}
            $index={index}
          >
            <ProcessIcon>
              {processIcons[step.icon]}
            </ProcessIcon>
            {index < steps.length - 1 && <ProcessConnector aria-hidden="true" />}
            <small>{String(index + 1).padStart(2, '0')} / {step.label}</small>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </ProcessStep>
        ))}
      </ProcessFlow>
    </ProcessWrap>
  );
};

export default ProcessSection;
