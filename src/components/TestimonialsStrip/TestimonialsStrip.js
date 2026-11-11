import { googleReviewsUrl, reviewsData, reviewsSummary } from '../../data/reviewsData';
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

const sortedReviews = reviewsData;
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
            <strong>Google • {reviewsSummary.average.toFixed(1).replace('.', ',')} / 5 · {reviewsSummary.count} oceny</strong>
            <a href={googleReviewsUrl} target="_blank" rel="noreferrer">
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

              <ReviewStars aria-label={`Ocena: ${review.rating} na 5`}>
                <div>{starIcons.slice(0, review.rating)}</div>
              </ReviewStars>

              <ReviewBody>{review.text || 'Ocena bez komentarza tekstowego.'}</ReviewBody>

              <ReviewFooter>
                <a href={review.reviewUrl} target="_blank" rel="noopener noreferrer"
                  tabIndex={index < sortedReviews.length || index >= sortedReviews.length * 2 ? -1 : undefined}
                  aria-label={`Zobacz opinię w Google: ${review.name} (nowa karta)`}>
                  Zobacz opinię w Google ↗
                </a>
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
