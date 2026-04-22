import React from 'react';
import {
  TestimonialsSection,
  TestimonialsGrid,
  TestimonialsHeading,
  ReviewCard,
} from './TestimonialsStrip.styled';

const reviews = [
  {
    title: 'Google • 5,0',
    text:
      'Bardzo dobry kontakt i sprawny montaż. W mieszkaniu od razu zrobiło się przyjemniej, szczególnie po południu.',
    author: 'Klient z Krakowa',
  },
  {
    title: 'Google • 5,0',
    text:
      'Zależało nam na prywatności i estetyce. Efekt końcowy wyszedł dokładnie taki, jakiego oczekiwaliśmy.',
    author: 'Klientka z Wieliczki',
  },
  {
    title: 'Google • 5,0',
    text:
      'Bez zbędnego komplikowania. Doradztwo było konkretne, a sama realizacja przebiegła bardzo sprawnie i czysto.',
    author: 'Właściciel biura',
  },
];

const TestimonialsStrip = () => {
  return (
    <TestimonialsSection id="opinie">
      <TestimonialsHeading data-aos="fade-up">
        <span>Opinie</span>
        <h2>Klienci najczęściej doceniają spokojne doradztwo, czysty montaż i widoczny efekt po oklejeniu szyb.</h2>
      </TestimonialsHeading>

      <TestimonialsGrid>
        {reviews.map((review, index) => (
          <ReviewCard
            key={`${review.title}-${index}`}
            data-aos="fade-up"
            data-aos-delay={index * 70}
          >
            <span>{review.title}</span>
            <p>{review.text}</p>
            <strong>{review.author}</strong>
          </ReviewCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsSection>
  );
};

export default TestimonialsStrip;
