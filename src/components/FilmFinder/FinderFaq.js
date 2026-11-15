import React, { useState } from 'react';
import Link from 'next/link';
import { finderFaq, finderFaqGroups } from '../../data/filmFinderData';
import s from './FilmFinder.module.css';

const normalize = text => text.toLocaleLowerCase('pl').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ł/g, 'l').replace(/\bnoc(?:y|a)?\b/g, 'wieczor');

export default function FinderFaq() {
  const [group, setGroup] = useState('start');
  const [query, setQuery] = useState('');
  const search = normalize(query.trim());
  const words = search.split(/\s+/).filter(word => word.length > 1);
  const matches = item => (!search ? group === 'all' || item.group === group : (words.length ? words : [search]).every(word => normalize(`${item.question} ${item.answer}`).includes(word)));
  const count = finderFaq.filter(matches).length;
  const selectedGroup = finderFaqGroups.find(item => item.id === group);
  const clear = () => { setQuery(''); setGroup('start'); };
  return <section className={`${s.section} ${s.faqSection}`} id="pytania-przed-wyborem" aria-labelledby="finder-faq-title">
    <div className={s.faqHeader}><div><span className={s.eyebrow}>Pytania przed wyborem</span><h2 id="finder-faq-title">Wybierz spokojnie. Rozwiej wątpliwości.</h2><p>Od „czy będzie ciemniej?” po „co przygotować do montażu?”. Wybierz temat lub wpisz swoje pytanie.</p></div><a className={s.faqBack} href="#dobor">Wróć do swojego doboru <span aria-hidden="true">↗</span></a></div>
    <div className={s.faqSearch}><label htmlFor="finder-faq-search">Szukaj odpowiedzi</label><div><input id="finder-faq-search" type="search" maxLength={160} placeholder="Np. lustro w nocy, świetlik, kolor okleiny…" value={query} onChange={event => setQuery(event.target.value)}/>{query && <button type="button" onClick={() => setQuery('')}>Wyczyść</button>}</div><small>Wyszukiwarka sprawdza pytania i odpowiedzi we wszystkich tematach.</small></div>
    <div className={s.faqLayout}>
      <div className={s.faqTopics} role="group" aria-label="Tematy pytań przed wyborem">
        {finderFaqGroups.map(item => <button type="button" key={item.id} aria-pressed={!search && group === item.id} aria-controls="finder-faq-answers" onClick={() => { setGroup(item.id); setQuery(''); }}><span className={s.faqTopicNumber} aria-hidden="true">{item.icon}</span><span><strong>{item.label}</strong><small>{item.description}</small></span><span aria-hidden="true">→</span></button>)}
        <button type="button" className={s.faqAll} aria-pressed={!search && group === 'all'} aria-controls="finder-faq-answers" onClick={() => { setGroup('all'); setQuery(''); }}>Wszystkie pytania <span>{finderFaq.length}</span></button>
      </div>
      <div id="finder-faq-answers" className={s.faqAnswers}>
        <div className={s.faqResultsHeading}><h3>{search ? 'Wyniki wyszukiwania' : selectedGroup?.label || 'Wszystkie pytania'}</h3><span role="status" aria-live="polite">Widoczne: {count} z {finderFaq.length}</span></div>
        <div className={s.faqList}>{finderFaq.map(item => <details key={item.id} hidden={!matches(item)} id={`pytanie-${item.id}`}><summary><span>{item.question}</span><span className={s.faqPlus} aria-hidden="true"/></summary><p>{item.answer}</p></details>)}</div>
        {count === 0 && <div className={s.faqEmpty}><h4>Nie ma odpowiedzi pod takim hasłem.</h4><p>Spróbuj krócej, np. „szyba”, „prywatność” lub „drzwi”. Możesz też wrócić do tematów.</p><button type="button" onClick={clear}>Pokaż pytania na początek</button></div>}
        <div className={s.faqHelp}><strong>Twoja sytuacja jest nietypowa?</strong><p>Opisz, co chcesz zmienić, i dołącz zdjęcie powierzchni. Pomożemy ustalić kolejny krok.</p><Link href="/kontakt">Zapytaj o swoją powierzchnię <span aria-hidden="true">→</span></Link></div>
      </div>
    </div>
  </section>;
}
