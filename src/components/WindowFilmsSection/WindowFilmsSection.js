import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { filmsData } from '../../data/filmsData';
import SmartFilmPreview from '../SmartFilmPreview';
import {
  WindowFilmsWrap,
  SectionIntro,
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
  },
  {
    title: 'Brak prywatności',
    text: 'Porównaj folie matowe, mrożone, lustra weneckie oraz inteligentne folie LCD.',
    href: '/folia-na-okno-przed-sasiadami',
  },
  {
    title: 'Bezpieczniejsze szyby',
    text: 'Porównaj folie antywłamaniowe, zabezpieczające, ochronne i HACCP.',
    href: '/folie-antywlamaniowe',
  },
  {
    title: 'Prywatność na przełącznik',
    text: 'Zobacz folie LCD do biur, gabinetów, sal spotkań i nowoczesnych szklanych ścian.',
    href: '/folie-lcd',
  },
];

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

const WindowFilmsSection = () => {
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

    syncSliderUi();
    slider.addEventListener('scroll', syncSliderUi, { passive: true });
    window.addEventListener('resize', syncSliderUi);

    return () => {
      slider.removeEventListener('scroll', syncSliderUi);
      window.removeEventListener('resize', syncSliderUi);
    };
  }, []);

  const scrollSlider = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.firstElementChild;
    const step = card ? card.getBoundingClientRect().width + 28 : Math.min(440, slider.clientWidth * 0.9);

    slider.scrollBy({
      left: direction * step,
      behavior: 'smooth',
    });
  };

  const scrollToDot = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const maxScroll = Math.max(0, slider.scrollWidth - slider.clientWidth);
    const targetLeft =
      sliderUi.pageCount <= 1 ? 0 : (maxScroll * index) / (sliderUi.pageCount - 1);

    slider.scrollTo({
      left: targetLeft,
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
          wykończenie szkła.
        </p>
      </SectionIntro>

      <ProblemGrid data-aos="fade-up">
        {problemCards.map((card) => (
          <ProblemCard key={card.title} href={card.href}>
            <span>{card.title}</span>
            <p>{card.text}</p>
          </ProblemCard>
        ))}
      </ProblemGrid>

      <SliderIntro data-aos="fade-up">
        <span>Rodzaje folii</span>
        <p>
          Poniżej możesz spokojnie przejrzeć konkretne typy folii i zobaczyć,
          czym się różnią. To już nie są problemy do rozwiązania, tylko
          przegląd dostępnych kierunków, które potem dobieramy do szyby i
          sytuacji.
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
        {filmsData.map((film, index) => (
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
            disabled={!sliderUi.canScrollNext}
          >
            →
          </SliderButton>
        </SliderControls>
      </SliderToolbar>
    </WindowFilmsWrap>
  );
};

export default WindowFilmsSection;
