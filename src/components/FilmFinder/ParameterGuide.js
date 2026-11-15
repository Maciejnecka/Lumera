import React, { useState } from 'react';
import s from './FilmFinder.module.css';

const topics = [
  { id: 'light', icon: '☀', question: 'Czy będzie jasno?', label: 'Światło widzialne', title: 'Więcej procent = więcej światła.', text: 'To część światła widzialnego, którą przepuszcza badane przeszklenie z folią.', values: [40, 70], unit: 'światła przechodzi', left: 'Przepuszczone', right: 'Nieprzepuszczone', tip: 'Zależy Ci na jasnym pokoju? Porównuj ten parametr, a potem sprawdź osłonę przed słońcem.', note: '70% światła nie oznacza, że pokój będzie dokładnie o 30% ciemniejszy.' },
  { id: 'solar', icon: '↗', question: 'Czy będzie mniej gorąco?', label: 'Redukcja energii słonecznej', title: 'Więcej procent = mniej energii słonecznej wpada do środka.', text: 'Ten parametr porównuj, gdy chcesz ograniczyć nagrzewanie przez szybę.', values: [50, 80], unit: 'energii ograniczone', left: 'Ograniczone', right: 'Pozostałe', tip: 'Najpierw porównaj redukcję energii słonecznej. Sam wysoki wynik IR nie mówi tego samego.', note: '80% redukcji energii nie oznacza temperatury niższej o 80% ani o 8°C.' },
  { id: 'uv', icon: '◇', question: 'Co z blaknięciem?', label: 'Redukcja UV', title: 'Mniej UV dociera do wyposażenia.', text: 'Filtr UV pomaga chronić meble, tkaniny i ekspozycję przed jednym z czynników blaknięcia.', values: [99, 99.9], unit: 'UV ograniczone', left: 'Ograniczone', right: 'Pozostałe', tip: 'Ochrona UV może iść w parze z jasną szybą. To osobna cecha od osłony przed nagrzewaniem.', note: 'Blaknięcie zależy też od światła widzialnego, temperatury i samego materiału.' },
];

export default function ParameterGuide() {
  const [active, setActive] = useState('light');
  const [example, setExample] = useState(0);
  const topic = topics.find(item => item.id === active);
  const value = topic.values[example];
  const format = number => number.toLocaleString('pl-PL', { maximumFractionDigits: 1 });
  return <section className={`${s.section} ${s.parameterGuide}`} id="jak-czytac-parametry" aria-labelledby="parameter-guide-title">
    <span className={s.eyebrow}>Parametry po ludzku</span>
    <h2 id="parameter-guide-title">Co te procenty zmienią u Ciebie?</h2>
    <p className={s.guideIntro}>Wybierz pytanie. Kliknij przykład i zobacz, jak czytać wynik.</p>
    <div className={s.guideTopics} role="group" aria-label="Co chcesz wiedzieć o parametrach?">
      {topics.map(item => <button type="button" key={item.id} aria-pressed={active === item.id} aria-controls="parameter-explanation" onClick={() => { setActive(item.id); setExample(0); }}><span className={s.guideIcon} aria-hidden="true">{item.icon}</span><span>{item.question}<small>{item.label}</small></span><span aria-hidden="true">↗</span></button>)}
    </div>
    <div id="parameter-explanation" className={s.guidePanel}>
      <div className={s.guideExplanation}><span className={s.eyebrow}>{topic.label}</span><h3>{topic.title}</h3><p>{topic.text}</p><strong className={s.guideTip}>{topic.tip}</strong></div>
      <div className={s.guideDemo}>
        <span className={s.guideExampleLabel}>Przykład — kliknij wartość</span>
        <div className={s.guideExamples} role="group" aria-label={`Przykładowe wartości: ${topic.label}`}>
          {topic.values.map((number, index) => <button type="button" key={number} aria-pressed={example === index} onClick={() => setExample(index)}>{format(number)}%</button>)}
        </div>
        <div className={s.guideReadout} aria-live="polite" aria-atomic="true"><strong>{format(value)}<small>%</small></strong><span>{topic.unit}</span></div>
        <div className={s.guideBar} aria-hidden="true"><span style={{width: `${value}%`}}/></div>
        <div className={s.guideLegend}><span><i/>{topic.left}: {format(value)}%</span><span><i/>{topic.right}: {format(100 - value)}%</span></div>
        <p className={s.guideCaution}>{topic.note}</p>
      </div>
    </div>
    <p className={s.guideFootnote}>Przykłady objaśniają parametry, nie konkretną folię. Efekt w Twoim oknie zależy również od szyby i warunków w pomieszczeniu.</p>
  </section>;
}
