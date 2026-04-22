import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { filmsData } from '../../data/filmsData';
import SmartFilmPreview from '../SmartFilmPreview';
import {
  WindowFilmsWrap,
  SectionIntro,
  ProblemGrid,
  ProblemCard,
  SliderToolbar,
  SliderHint,
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
    text: 'Sprawdź folie przeciwsłoneczne, termoizolacyjne i rozwiązania na świetliki dachowe.',
    href: '/folie-przeciwsloneczne-zewnetrzne',
  },
  {
    title: 'Brak prywatności',
    text: 'Zobacz folie matowe, mrożone, lustra weneckie oraz inteligentne folie LCD.',
    href: '/folie-matowe',
  },
  {
    title: 'Bezpieczniejsze szyby',
    text: 'Porównaj folie antywłamaniowe, zabezpieczające, ochronne i HACCP.',
    href: '/folie-antywlamaniowe',
  },
  {
    title: 'Dekoracja i efekt wizualny',
    text: 'Wybierz folie do szkła, witryn, biur, gabinetów i nowoczesnych przeszkleń.',
    href: '/folie-mrozone',
  },
];

const WindowFilmsSection = () => {
  const sliderRef = useRef(null);
  const dragState = useRef({
    isDragging: false,
    hasMoved: false,
    startX: 0,
    scrollLeft: 0,
  });
  const [isDragging, setIsDragging] = useState(false);

  const scrollSlider = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollBy({
      left: direction * Math.min(440, slider.clientWidth * 0.8),
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

      <SliderToolbar data-aos="fade-up">
        <SliderHint>
          Przesuń karty, użyj strzałek albo wybierz kategorię i zobacz pełny opis.
        </SliderHint>
        <SliderControls aria-label="Sterowanie sliderem folii">
          <SliderButton
            type="button"
            onClick={() => scrollSlider(-1)}
            aria-label="Poprzednie folie"
          >
            ←
          </SliderButton>
          <SliderButton
            type="button"
            onClick={() => scrollSlider(1)}
            aria-label="Następne folie"
          >
            →
          </SliderButton>
        </SliderControls>
      </SliderToolbar>

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
    </WindowFilmsWrap>
  );
};

export default WindowFilmsSection;
