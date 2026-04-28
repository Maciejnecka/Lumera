import React from 'react';
import {
  TestimonialsSection,
  TestimonialsShell,
  TestimonialsHeading,
  TestimonialsSummary,
  TestimonialsGrid,
  ReviewCard,
  ReviewCardTop,
  ReviewAuthor,
  ReviewAvatar,
  ReviewMeta,
  ReviewMenu,
  ReviewStars,
  ReviewBody,
  ReviewFooter,
} from './TestimonialsStrip.styled';

const GOOGLE_REVIEWS_URL = 'https://share.google/ehvyHeeHWsm3vl9B6';

const reviews = [
  {
    id: 'rafal-nowak',
    name: 'Rafal Nowak',
    initials: 'R',
    badge: 'Lokalny przewodnik · 11 opinii · 16 zdjec',
    text:
      'Zamawialismy folie bezpieczna na szyby do sklepu i jestesmy bardzo zadowoleni. Zalezalo nam na dodatkowym zabezpieczeniu witryny, ale bez zmiany wygladu lokalu. Wszystko zostalo sprawnie ustalone, montaz przebiegl czysto i bez problemow. Polecam',
    avatarTone: 'orange',
  },
  {
    id: 'jakub-zajac',
    name: 'Jakub Zajac',
    initials: 'J',
    badge: '11 opinii · 1 zdjecie',
    text:
      'Bardzo profesjonalny i sprawny montaz. Cena bardzo konkurencyjna i adekwatna do jakosci wykonania! Pozdrawiam serdecznie!',
    avatarTone: 'pink',
  },
  {
    id: 'mateusz-rudzki',
    name: 'Mateusz Rudzki',
    initials: 'M',
    badge: '1 opinia',
    text:
      'Bardzo polecam firme Lumera. Zalezalo nam na ograniczeniu nagrzewania mieszkania i dobraniu folii, ktora nie zepsuje wygladu okien. Wszystko zostalo jasno wyjasnione, montaz przebiegl sprawnie i czysto, a efekt czuc praktycznie od razu.',
    avatarTone: 'violet',
  },
];

const starIcons = Array.from({ length: 5 }, (_, index) => (
  <svg key={index} viewBox="0 0 24 24" aria-hidden="true">
    <path d="m12 2.4 2.87 5.82 6.43.94-4.65 4.53 1.1 6.41L12 17.08 6.25 20.1l1.1-6.41L2.7 9.16l6.43-.94L12 2.4Z" />
  </svg>
));

const TestimonialsStrip = () => {
  return (
    <TestimonialsSection id="opinie">
      <TestimonialsShell data-aos="fade-up">
        <TestimonialsHeading>
          <span>Opinie</span>
          <h2>
            Klienci najczesciej doceniaja spokojne doradztwo, czysty montaz i
            widoczny efekt po oklejeniu szyb.
          </h2>
          <TestimonialsSummary>
            <strong>Google • 5,0</strong>
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
              Zobacz wszystkie opinie w Google
            </a>
          </TestimonialsSummary>
        </TestimonialsHeading>

        <TestimonialsGrid>
          {reviews.map((review) => (
            <ReviewCard key={review.id}>
              <ReviewCardTop>
                <ReviewAuthor>
                  <ReviewAvatar $tone={review.avatarTone}>{review.initials}</ReviewAvatar>
                  <ReviewMeta>
                    <strong>{review.name}</strong>
                    <span>{review.badge}</span>
                  </ReviewMeta>
                </ReviewAuthor>

                <ReviewMenu aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </ReviewMenu>
              </ReviewCardTop>

              <ReviewStars>
                <div>{starIcons}</div>
              </ReviewStars>

              <ReviewBody>{review.text}</ReviewBody>

              <ReviewFooter>
                <small>Google</small>
              </ReviewFooter>
            </ReviewCard>
          ))}
        </TestimonialsGrid>
      </TestimonialsShell>
    </TestimonialsSection>
  );
};

export default TestimonialsStrip;
