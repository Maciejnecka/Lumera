import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  TestimonialsSection,
  TestimonialsShell,
  TestimonialsHeading,
  TestimonialsSummary,
  TestimonialsGrid,
  ReviewsControls,
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

// Google reviews checked on 2026-10-11; excerpts are marked in the badge.
const reviews = [
  {
    id: 'rafal-nowak',
    name: 'Rafał Nowak',
    initials: 'R',
    badge: 'Lokalny przewodnik · 12 opinii · 16 zdjęć',
    text:
      'Zamawialiśmy folię bezpieczną na szyby do sklepu i jesteśmy bardzo zadowoleni. Zależało nam na dodatkowym zabezpieczeniu witryny, ale bez zmiany wyglądu lokalu. Wszystko zostało sprawnie ustalone, montaż przebiegł czysto i bez problemów. Polecam',
    avatarTone: 'orange',
  },
  {
    id: 'jakub-zajac',
    name: 'Jakub Zając',
    initials: 'J',
    badge: '13 opinii · 1 zdjęcie',
    text:
      'Bardzo profesjonalny i sprawny montaż. Cena bardzo konkurencyjna i adekwatna do jakości wykonania! Pozdrawiam serdecznie!',
    avatarTone: 'pink',
  },
  {
    id: 'mateusz-rudzki',
    name: 'Mateusz Rudzki',
    initials: 'M',
    badge: '1 opinia',
    text:
      'Bardzo polecam firmę Lumera. Zależało nam na ograniczeniu nagrzewania mieszkania i dobraniu folii, która nie zepsuje wyglądu okien. Wszystko zostało jasno wyjaśnione, montaż przebiegł sprawnie i czysto, a efekt czuć praktycznie od razu.',
    avatarTone: 'violet',
  },
  {
    id: 'mateusz-skrzyszowski', name: 'Mateusz Skrzyszowski', initials: 'M',
    reviewUrl: 'https://share.google/yGT7oqiaC6WFnmQUQ',
    badge: 'Opinia z Google · fragment', avatarTone: 'orange',
    text: 'Montaż został wykonany sprawnie, terminowo i jeszcze przed otwarciem lokalu, co było dla nas bardzo ważne.',
  },
  {
    id: 'polting-foam', name: 'Polting Foam', initials: 'P',
    reviewUrl: 'https://share.google/bbInZeXqXyaUmxFUr',
    badge: 'Opinia z Google · fragment', avatarTone: 'violet',
    text: 'Montaż folii w biurowcu i na halach produkcyjnych przebiegał terminowo oraz zgodnie z ustaleniami, nie zakłócając funkcjonowania firmy.',
  },
  {
    id: 'malgorzata-korbel', name: 'Małgorzata Korbel', initials: 'M',
    reviewUrl: 'https://share.google/HBOCXT9Gl2IwKw94I',
    badge: 'Opinia z Google · fragment', avatarTone: 'pink',
    text: 'Błyskawiczny termin, fachowe doradztwo i montaż, zdecydowanie polecam!',
  },
  {
    id: 'marzena-bogacka', name: 'Marzena Bogacka', initials: 'M',
    reviewUrl: 'https://share.google/KgSlmlM0w3CqN8jPm',
    badge: 'Opinia z Google · fragment', avatarTone: 'orange',
    text: 'Serdecznie polecam! Firma pod każdym względem perfekcyjna i precyzyjna, zarówno w kwestii świadczonych usług jak i obsługi klienta.',
  },
  {
    id: 'dawid-czort', name: 'Dawid Czort (Czorcik)', initials: 'D',
    reviewUrl: 'https://share.google/Ibc4iDe1lOrm6l69N',
    badge: 'Opinia z Google · fragment', avatarTone: 'violet',
    text: 'Bardzo miły kontakt i profesjonalne doradztwo w celu dobrania odpowiedniej folii do pomieszczenia mieszkalnego.',
  },
  {
    id: 'marta-pieniazek', name: 'Marta Pieniążek', initials: 'M',
    badge: 'Opinia z Google', avatarTone: 'pink',
    text: 'Polecam w 100%. Szybka realizacja, pomoc na każdym etapie i bardzo miła obsługa. Folie profesjonalnie wykonane, jestem bardzo zadowolona !',
  },
  {
    id: 'mateusz-kapustka', name: 'Mateusz Kapustka', initials: 'M',
    badge: 'Opinia z Google', avatarTone: 'orange',
    text: 'Bardzo polecam. Folie spełniają swoją rolę, a serwis i komunikacja na najwyższym poziomie.',
  },
  {
    id: 'katarzyna-bobilewicz', name: 'Katarzyna Bobilewicz', initials: 'K',
    badge: 'Opinia z Google', avatarTone: 'violet',
    text: 'Dziękuję za super współpracę i świetny kontakt.\nSzybko, rzeczowo, uczciwie i solidnie.\nPolecam\nApteka Bobilewicz',
  },
  {
    id: 'joanna-pasierb', name: 'Joanna Pasierb', initials: 'J',
    badge: 'Opinia z Google', avatarTone: 'pink',
    text: 'Drzwi wejsciowe oklejone dokladnie tak, jak chcialam. Wszystko przebieglo bardzo sprawnie i super profesjonalnie. Serdecznie polecam!',
  },
  {
    id: 'karolina-miernicka', name: 'Karolina Miernicka', initials: 'K',
    badge: 'Opinia z Google', avatarTone: 'orange',
    text: 'Polecam serdecznie, bardzo dobry kontakt, pełna profeska, wszystko wykonane jak należy!',
  },
];

// Relative publication ages shown by Google when checked on 2026-10-11.
// Google only exposes month-level precision for older reviews here.
const reviewAgeInMonths = {
  'joanna-pasierb': 0,
  'dawid-czort': 2,
  'katarzyna-bobilewicz': 2,
  'malgorzata-korbel': 3,
  'mateusz-kapustka': 3,
  'mateusz-skrzyszowski': 4,
  'polting-foam': 4,
  'rafal-nowak': 5,
  'jakub-zajac': 5,
  'mateusz-rudzki': 5,
  'marzena-bogacka': 5,
  'marta-pieniazek': 5,
  'karolina-miernicka': 5,
};
const sortedReviews = [...reviews].sort(
  (a, b) => reviewAgeInMonths[a.id] - reviewAgeInMonths[b.id]
);
const loopedReviews = [sortedReviews, sortedReviews, sortedReviews].flat();
const AUTOPLAY_INTERVAL_MS = 5000;

const starIcons = Array.from({ length: 5 }, (_, index) => (
  <svg key={index} viewBox="0 0 24 24" aria-hidden="true">
    <path d="m12 2.4 2.87 5.82 6.43.94-4.65 4.53 1.1 6.41L12 17.08 6.25 20.1l1.1-6.41L2.7 9.16l6.43-.94L12 2.4Z" />
  </svg>
));

const TestimonialsStrip = () => {
  const sliderRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const logicalIndex = useRef(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return undefined;
    let settleTimer;
    const count = sortedReviews.length;
    const getStep = () => (slider.children[count].offsetLeft - slider.children[0].offsetLeft) / count;
    const recenter = () => {
      const step = getStep();
      if (!step) return;
      const index = Math.round(slider.scrollLeft / step);
      logicalIndex.current = ((index % count) + count) % count;
      // Equivalent copies allow wrapping without animating back across the track.
      if (index < count || index >= count * 2) {
        slider.scrollTo({ left: (count + logicalIndex.current) * step, behavior: 'instant' });
      }
    };
    const sync = () => {
      const left = slider.scrollLeft;
      logicalIndex.current = Math.round(left / getStep()) % count;
      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(recenter, 150);
    };
    const resize = () => {
      slider.scrollTo({ left: (count + logicalIndex.current) * getStep(), behavior: 'instant' });
      sync();
    };
    resize();
    slider.addEventListener('scroll', sync, { passive: true });
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null;
    observer?.observe(slider);
    const visibilityObserver = typeof IntersectionObserver !== 'undefined'
      ? new IntersectionObserver(([entry]) => setIsVisible(entry.intersectionRatio >= 0.2), { threshold: 0.2 })
      : null;
    visibilityObserver?.observe(slider);
    if (!visibilityObserver) setIsVisible(true);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setIsPlaying(false);
    return () => {
      window.clearTimeout(settleTimer);
      slider.removeEventListener('scroll', sync);
      observer?.disconnect();
      visibilityObserver?.disconnect();
    };
  }, []);

  const scrollReviews = useCallback((direction) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const cards = Array.from(slider.children);
    const origin = cards[0]?.offsetLeft || 0;
    const points = cards.map((card) => card.offsetLeft - origin);
    const target = direction > 0
      ? points.find((left) => left > slider.scrollLeft + 8)
      : points.reverse().find((left) => left < slider.scrollLeft - 8);
    slider.scrollTo({ left: target ?? (direction > 0 ? slider.scrollWidth : 0),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }, []);

  useEffect(() => {
    if (!isPlaying || isHovered || hasFocus || !isVisible) return undefined;
    const timer = window.setInterval(() => {
      if (!document.hidden) scrollReviews(1);
    }, AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [isPlaying, isHovered, hasFocus, isVisible, scrollReviews]);

  return (
    <TestimonialsSection id="opinie">
      <TestimonialsShell data-aos="fade-up"
        onFocusCapture={() => setHasFocus(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false);
        }}>
        <TestimonialsHeading>
          <span>Opinie</span>
          <h2>
            Klienci najczęściej doceniają spokojne doradztwo, czysty montaż i
            widoczny efekt po oklejeniu szyb.
          </h2>
          <TestimonialsSummary>
            <strong>Google • 5,0</strong>
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">
              Zobacz wszystkie opinie w Google
            </a>
          </TestimonialsSummary>
        </TestimonialsHeading>

        <TestimonialsGrid ref={sliderRef} id="karuzela-opinii" tabIndex={0}
          role="region" aria-roledescription="karuzela" aria-label="Opinie klientów"
          onTouchStart={() => setHasFocus(true)} onTouchEnd={() => setHasFocus(false)}
          onTouchCancel={() => setHasFocus(false)}
          onKeyDown={(event) => {
            if (event.target !== event.currentTarget) return;
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
              event.preventDefault();
              scrollReviews(event.key === 'ArrowRight' ? 1 : -1);
            }
          }}>
          {loopedReviews.map((review, index) => (
            <ReviewCard key={`${review.id}-${index}`} role="group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              aria-hidden={index < sortedReviews.length || index >= sortedReviews.length * 2 ? true : undefined}
              aria-label={`Opinia ${(index % sortedReviews.length) + 1} z ${sortedReviews.length}`}>
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

              <ReviewStars aria-label="Ocena: 5 na 5">
                <div>{starIcons}</div>
              </ReviewStars>

              <ReviewBody>{review.text}</ReviewBody>

              <ReviewFooter>
                {review.reviewUrl && (
                  <a href={review.reviewUrl} target="_blank" rel="noopener noreferrer"
                    tabIndex={index < sortedReviews.length || index >= sortedReviews.length * 2 ? -1 : undefined}
                    aria-label={`Przeczytaj całą opinię: ${review.name} (Google, nowa karta)`}>
                    Przeczytaj całą opinię ↗
                  </a>
                )}
                <small>Google</small>
              </ReviewFooter>
            </ReviewCard>
          ))}
        </TestimonialsGrid>
        <ReviewsControls>
          <div>
            <button type="button" aria-label={isPlaying ? 'Wstrzymaj przesuwanie opinii' : 'Włącz przesuwanie opinii'}
              aria-pressed={!isPlaying} onClick={() => setIsPlaying((playing) => !playing)}>
              {isPlaying ? 'Ⅱ' : '▶'}
            </button>
            <button type="button" aria-label="Poprzednia opinia" aria-controls="karuzela-opinii"
              onClick={() => scrollReviews(-1)}>←</button>
            <button type="button" aria-label="Następna opinia" aria-controls="karuzela-opinii"
              onClick={() => scrollReviews(1)}>→</button>
          </div>
        </ReviewsControls>
      </TestimonialsShell>
    </TestimonialsSection>
  );
};

export default TestimonialsStrip;
