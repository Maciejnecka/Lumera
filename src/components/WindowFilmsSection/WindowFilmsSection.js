import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { filmsData } from '../../data/filmsData';
import lcdInstallationImage from '../../img/generated/montaz-folii-lcd.webp';
import problemSecurityImage from '../../img/generated/problem-bezpieczniejsze-szyby.webp';
import problemPrivacyImage from '../../img/generated/problem-brak-prywatnosci.webp';
import problemHeatImage from '../../img/generated/problem-za-goraco.webp';
import SmartFilmPreview from '../SmartFilmPreview';
import {
  WindowFilmsWrap,
  SectionIntro,
  FeaturedFilm,
  FeaturedFilmCopy,
  FeaturedFilmVisual,
  ProblemGrid,
  ProblemCard,
  SliderIntro,
  SliderToolbar,
  SliderDots,
  SliderDot,
  SliderControls,
  SliderButton,
  FilmsSlider,
  FilmCard,
  FilmImage,
  FilmMeta,
} from './WindowFilmsSection.styled';

const problemCards = [
  {
    title: 'Za gorąco w pomieszczeniu',
    text: 'Sprawdź, jak ograniczyć nagrzewanie mieszkania, odblaski i mocne słońce przy oknach.',
    href: '/jak-ograniczyc-nagrzewanie-mieszkania',
    image: problemHeatImage,
    alt: 'Nasłoneczniony salon z dużymi przeszkleniami wymagający ochrony przeciwsłonecznej',
    cta: 'Zobacz rozwiązania',
  },
  {
    title: 'Brak prywatności',
    text: 'Porównaj folie matowe, mrożone, lustra weneckie oraz inteligentne folie LCD.',
    href: '/folia-na-okno-przed-sasiadami',
    image: problemPrivacyImage,
    alt: 'Wnętrze przy oknach wychodzących na sąsiedni budynek z częściowo matową szybą',
    cta: 'Dobierz folię',
  },
  {
    title: 'Bezpieczniejsze szyby',
    text: 'Porównaj folie antywłamaniowe, zabezpieczające, ochronne i HACCP.',
    href: '/folie-antywlamaniowe',
    image: problemSecurityImage,
    alt: 'Nowoczesne szklane drzwi z folią zabezpieczającą wzmacniającą szybę',
    cta: 'Sprawdź zabezpieczenia',
  },
];

const getImageSrc = (image) => image.src || image;

const getSliderState = (slider) => {
  if (!slider) {
    return {
      activeIndex: 0,
      pageCount: 1,
      canScrollPrev: false,
      canScrollNext: false,
    };
  }

  const maxScroll = Math.max(0, slider.scrollWidth - slider.clientWidth);
  const pageCount = Math.max(1, Math.ceil(slider.scrollWidth / slider.clientWidth));
  const progress = maxScroll > 0 ? slider.scrollLeft / maxScroll : 0;
  const activeIndex = Math.min(
    pageCount - 1,
    Math.max(0, Math.round(progress * (pageCount - 1)))
  );

  return {
    activeIndex,
    pageCount,
    canScrollPrev: slider.scrollLeft > 8,
    canScrollNext: slider.scrollLeft < maxScroll - 8,
  };
};

const getCardLeft = (slider, card) => {
  const sliderRect = slider.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();

  return Math.max(0, cardRect.left - sliderRect.left + slider.scrollLeft);
};

const getSliderSnapPoints = (slider) => {
  if (!slider) return [];

  const maxScroll = Math.max(0, slider.scrollWidth - slider.clientWidth);

  return Array.from(slider.children).map((card) =>
    Math.min(maxScroll, getCardLeft(slider, card))
  );
};

const getClosestSnapPoint = (snapPoints, targetLeft) => {
  if (!snapPoints.length) return 0;

  return snapPoints.reduce((closest, current) =>
    Math.abs(current - targetLeft) < Math.abs(closest - targetLeft) ? current : closest
  );
};

const getClosestSnapIndex = (snapPoints, targetLeft) => {
  if (!snapPoints.length) return 0;

  return snapPoints.reduce(
    (closestIndex, current, index) =>
      Math.abs(current - targetLeft) < Math.abs(snapPoints[closestIndex] - targetLeft)
        ? index
        : closestIndex,
    0
  );
};

const WindowFilmsSection = () => {
  const lcdFilm = filmsData.find((film) => film.id === 'lcd');
  const displayFilms = lcdFilm
    ? [lcdFilm, ...filmsData.filter((film) => film.id !== 'lcd')]
    : filmsData;
  const sliderRef = useRef(null);
  const dragState = useRef({
    isDragging: false,
    hasMoved: false,
    startX: 0,
    scrollLeft: 0,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [sliderUi, setSliderUi] = useState({
    activeIndex: 0,
    pageCount: 1,
    canScrollPrev: false,
    canScrollNext: true,
  });

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return undefined;

    const syncSliderUi = () => {
      setSliderUi(getSliderState(slider));
    };
    const scheduleSyncSliderUi = () => {
      window.requestAnimationFrame(syncSliderUi);
    };
    const resizeObserver =
      typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(scheduleSyncSliderUi);

    scheduleSyncSliderUi();
    const delayedSync = window.setTimeout(syncSliderUi, 250);
    slider.addEventListener('scroll', syncSliderUi, { passive: true });
    window.addEventListener('resize', syncSliderUi);
    resizeObserver?.observe(slider);
    Array.from(slider.children).forEach((child) => resizeObserver?.observe(child));

    return () => {
      window.clearTimeout(delayedSync);
      slider.removeEventListener('scroll', syncSliderUi);
      window.removeEventListener('resize', syncSliderUi);
      resizeObserver?.disconnect();
    };
  }, []);

  const scrollSlider = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const snapPoints = getSliderSnapPoints(slider);
    if (!snapPoints.length) return;

    const currentIndex = getClosestSnapIndex(snapPoints, slider.scrollLeft);
    const targetIndex = Math.min(
      snapPoints.length - 1,
      Math.max(0, currentIndex + direction)
    );

    slider.scrollTo({
      left: snapPoints[targetIndex],
      behavior: 'smooth',
    });
  };

  const scrollToDot = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const maxScroll = Math.max(0, slider.scrollWidth - slider.clientWidth);
    const targetLeft =
      sliderUi.pageCount <= 1 ? 0 : (maxScroll * index) / (sliderUi.pageCount - 1);
    const snapPoints = getSliderSnapPoints(slider);

    slider.scrollTo({
      left: getClosestSnapPoint(snapPoints, targetLeft),
      behavior: 'smooth',
    });
  };

  const handlePointerDown = (event) => {
    if (event.pointerType === 'touch' || event.target.closest('a, button')) return;

    const slider = sliderRef.current;
    if (!slider) return;

    dragState.current = {
      isDragging: true,
      hasMoved: false,
      startX: event.clientX,
      scrollLeft: slider.scrollLeft,
    };
    slider.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (event) => {
    const slider = sliderRef.current;
    const state = dragState.current;
    if (!slider || !state.isDragging) return;

    const distance = event.clientX - state.startX;
    if (Math.abs(distance) > 6) {
      state.hasMoved = true;
    }

    slider.scrollLeft = state.scrollLeft - distance;
  };

  const stopDragging = (event) => {
    const slider = sliderRef.current;
    if (slider?.hasPointerCapture?.(event.pointerId)) {
      slider.releasePointerCapture(event.pointerId);
    }

    dragState.current.isDragging = false;
    setIsDragging(false);
  };

  const handleClickCapture = (event) => {
    if (!dragState.current.hasMoved) return;

    event.preventDefault();
    event.stopPropagation();
    dragState.current.hasMoved = false;
  };

  return (
    <WindowFilmsWrap id="folie-okienne">
      <SectionIntro data-aos="fade-up">
        <span>Folie okienne</span>
        <h2>Wybierz rodzaj folii, który najlepiej pasuje do Twojej przestrzeni.</h2>
        <p>
          Zebraliśmy najważniejsze kategorie w jednym miejscu, żeby łatwo porównać
          komfort cieplny, prywatność, bezpieczeństwo, ochronę przed UV i dekoracyjne
          wykończenie szkła. Na końcu znajdziesz też okleiny i laminaty
          architektoniczne - osobną usługę do ram, drzwi, futryn, mebli i innych
          powierzchni, a nie folię montowaną na szybę.
        </p>
      </SectionIntro>

      <ProblemGrid data-aos="fade-up">
        {problemCards.map((card) => (
          <ProblemCard key={card.title} href={card.href}>
            <img src={getImageSrc(card.image)} alt={card.alt} loading="lazy" decoding="async" />
            <div>
              <span>{card.title}</span>
              <p>{card.text}</p>
              <strong>{card.cta}</strong>
            </div>
          </ProblemCard>
        ))}
      </ProblemGrid>

      {lcdFilm && (
        <FeaturedFilm data-aos="fade-up">
          <FeaturedFilmCopy>
            <h3>Montaż folii LCD do szkła, które ma zmieniać charakter na żądanie.</h3>
            <p>
              Inteligentna folia LCD/PDLC przełącza szybę między trybem transparentnym
              i mlecznym. Najlepiej sprawdza się w salach spotkań, gabinetach,
              hotelach i wnętrzach premium, gdzie prywatność ma pojawiać się wtedy,
              gdy jest naprawdę potrzebna.
            </p>
            <div>
              <Link href="/montaz-folii-lcd">Montaż folii LCD</Link>
              <Link href={lcdFilm.path}>Opis technologii</Link>
            </div>
          </FeaturedFilmCopy>
          <FeaturedFilmVisual>
            <img
              src={getImageSrc(lcdInstallationImage)}
              alt="Folia LCD na szklanej ścianie w trybie transparentnym i mlecznym"
              loading="lazy"
              decoding="async"
            />
          </FeaturedFilmVisual>
        </FeaturedFilm>
      )}

      <SliderIntro data-aos="fade-up">
        <span>Rodzaje folii</span>
        <p>
          Poniżej możesz spokojnie przejrzeć konkretne typy folii i zobaczyć,
          czym się różnią. To już nie są problemy do rozwiązania, tylko
          przegląd dostępnych kierunków, które potem dobieramy do szyby,
          powierzchni i sytuacji.
        </p>
      </SliderIntro>

      <FilmsSlider
        ref={sliderRef}
        className={isDragging ? 'is-dragging' : ''}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onClickCapture={handleClickCapture}
      >
        {displayFilms.map((film, index) => (
          <FilmCard key={film.path} data-aos="fade-up" data-aos-delay={index * 40}>
            {film.id === 'lcd' ? (
              <SmartFilmPreview src={film.image} alt={film.name} />
            ) : (
              <FilmImage src={film.image} alt={film.name} loading="lazy" decoding="async" />
            )}
            <FilmMeta>{film.name}</FilmMeta>
            <h3>{film.shortDescription}</h3>
            <Link href={film.path}>Zobacz pełny opis</Link>
          </FilmCard>
        ))}
      </FilmsSlider>

      <SliderToolbar data-aos="fade-up">
        <SliderDots aria-label="Pozycja slidera folii">
          {Array.from({ length: sliderUi.pageCount }).map((_, index) => (
            <SliderDot
              key={index}
              type="button"
              $isActive={index === sliderUi.activeIndex}
              aria-label={`Przejdź do widoku ${index + 1}`}
              aria-pressed={index === sliderUi.activeIndex}
              onClick={() => scrollToDot(index)}
            />
          ))}
        </SliderDots>

        <SliderControls aria-label="Sterowanie sliderem folii">
          <SliderButton
            type="button"
            onClick={() => scrollSlider(-1)}
            aria-label="Poprzednie folie"
            disabled={!sliderUi.canScrollPrev}
          >
            ←
          </SliderButton>
          <SliderButton
            type="button"
            onClick={() => scrollSlider(1)}
            aria-label="Następne folie"
            disabled={!sliderUi.canScrollNext && sliderUi.pageCount > 1}
          >
            →
          </SliderButton>
        </SliderControls>
      </SliderToolbar>
    </WindowFilmsWrap>
  );
};

export default WindowFilmsSection;
