import React from 'react';
import Link from 'next/link';
import WindowScene from './WindowScene';
import s from './FilmFinder.module.css';
const finderPath = '/porownanie-folii-okiennych';

export function FinderTeaser() {
  return <section className={s.teaser} aria-label="Pracownia doboru Lumera"><div><span className={s.eyebrow}>Twój punkt wyjścia</span><h2>Nie wiesz, którą folię wybrać? Zobacz różnicę.</h2><p>Wybierz to, co chcesz zmienić. Porównaj efekty na wirtualnym oknie lub sprawdź kierunek metamorfozy drzwi i mebli.</p><Link className={s.primary} href={finderPath}>Dobierz rozwiązanie <span aria-hidden="true">→</span></Link></div><div className={s.teaserVisual}><WindowScene effect="balanced"/></div></section>;
}

export function FinderEntry({ goal = '', group = '' }) {
  const hash = goal ? `#goal=${goal}` : group ? `#group=${group}` : '';
  return <aside className={s.entry}><div><strong>Wolisz najpierw zobaczyć różnicę?</strong><p>Porównaj efekty i określ swoją potrzebę w pracowni doboru Lumera.</p></div><Link className={s.primary} href={`${finderPath}${hash}`}>Pomóż mi wybrać →</Link></aside>;
}
