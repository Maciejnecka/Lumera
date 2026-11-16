import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { finderGroups, finderVariantFields } from '../../data/filmFinderData';
import s from './FilmFinder.module.css';

const mainFields = ['transmission380', 'transmission400', 'transmission420', 'mirrorLevel', 'light', 'solar', 'uv', 'ir', 'mounting', 'color', 'securityClass', 'materialWarranty', 'power'];
const solutionCount = number => `${number} ${number === 1 ? 'rozwiązanie' : number % 10 >= 2 && number % 10 <= 4 && !(number % 100 >= 12 && number % 100 <= 14) ? 'rozwiązania' : 'rozwiązań'}`;

function ModelTable({ item, fields }) {
  return <div className={s.atlasTableWrap} role="region" aria-label={`Parametry: ${item.name}`} tabIndex={0}><table className={s.atlasTable}><thead><tr><th scope="col">Parametr</th>{item.variants.map(model => <th scope="col" key={model.name}>{model.name}</th>)}</tr></thead><tbody>{fields.map(([key,label,unit]) => <tr key={key}><th scope="row">{item.id === 'lcd' && key === 'light' ? 'Światło — tryb przejrzysty' : item.id === 'lcd' && key === 'thickness' ? 'Grubość bez warstw ochronnych' : label}</th>{item.variants.map(model => <td key={model.name}>{model[key] === undefined || model[key] === null || model[key] === '' ? 'Brak potwierdzonej wartości' : `${model[key]}${unit}`}</td>)}</tr>)}</tbody></table></div>;
}

function SolutionDetails({ item, onClose }) {
  const fields = finderVariantFields.filter(([key]) => item.variants?.some(model => model[key] !== undefined && model[key] !== null && model[key] !== ''));
  const basic = fields.filter(([key]) => mainFields.includes(key));
  const extra = fields.filter(([key]) => !mainFields.includes(key));
  const groups = [...new Set(item.variants?.map(model => model.variantGroup).filter(Boolean))];
  return <>
    <header className={s.atlasDetailHeading}><div><span className={s.eyebrow}>Bliżej rozwiązania</span><h4 id={`atlas-title-${item.id}`}>{item.name}</h4></div><button type="button" className={s.atlasClose} onClick={onClose} aria-label={`Zamknij szczegóły: ${item.name}`}>Zamknij <span aria-hidden="true">×</span></button></header>
    <div className={s.atlasOverview}><div><span>Kiedy warto?</span><p>{item.benefit}</p></div><div><span>O czym pamiętać?</span><p>{item.tradeoff}</p></div><div><span>Co sprawdzimy przed montażem?</span><p>{item.check}</p></div></div>
    {basic.length > 0 && <div className={s.atlasComparison}><h5>{item.variants.length > 1 ? 'Porównaj warianty obok siebie' : 'Najważniejsze parametry'}</h5>{item.variants.length > 2 && <p className={s.atlasScrollHint}>Na mniejszym ekranie przesuń tabelę w bok, aby zobaczyć pozostałe warianty.</p>}{groups.length > 1 ? groups.map(name => {const variants=item.variants.filter(model=>model.variantGroup===name);return <div className={s.atlasVariantGroup} key={name}><h6>{name}</h6><ModelTable item={{...item,variants}} fields={basic.filter(([key])=>variants.some(model=>model[key]!==undefined))}/></div>;}) : <ModelTable item={item} fields={basic}/>}</div>}
    {item.id === 'uv' && <p className={s.atlasDataNote}>Przepuszczanie przy 380–500 nm: orientacyjny odczyt z wykresów materiałowych. Mniej oznacza mniej promieniowania przechodzącego przy danej długości fali; to inny parametr niż zbiorcza redukcja UV i VLT. Blisko 0% nie oznacza idealnego zera. Pełne objaśnienie i porównanie znajdziesz na stronie oferty anty-UV.</p>}
    {extra.length > 0 && <details className={s.atlasExtra}><summary>Pozostałe parametry techniczne</summary><ModelTable item={item} fields={extra}/></details>}
    {item.parameters?.length > 0 && <details className={s.atlasExtra}><summary>Więcej o zastosowaniu i doborze</summary><p><strong>Wygląd:</strong> {item.look}. <strong>Światło:</strong> {item.light}.</p><dl className={s.categoryParameters}>{item.parameters.map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></details>}
    {fields.length > 0 && <p className={s.atlasDataNote}>Wartości referencyjne dla konkretnego materiału. Redukcja UV, IR i energii słonecznej opisuje różne cechy; nie określa spadku temperatury pokoju. Gwarancja materiału podlega warunkom producenta. Dostępność i zgodność z podłożem potwierdzamy przy wycenie.</p>}
    <footer className={s.atlasDetailFooter}><Link href={item.path}>Zobacz ofertę i zakres montażu <span aria-hidden="true">→</span></Link><button type="button" className={s.textButton} onClick={onClose}>Zwiń szczegóły ↑</button></footer>
  </>;
}

export default function SolutionLibrary({ items, group, onGroup, search, onSearch }) {
  const [openId, setOpenId] = useState('');
  const tiles = useRef({});
  const close = id => { setOpenId(''); tiles.current[id]?.focus({preventScroll:true}); };
  const changeGroup = value => { onGroup(value); setOpenId(''); };
  const changeSearch = value => { onSearch(value); setOpenId(''); };
  return <section className={s.section} id="porownaj" aria-labelledby="library-title">
    <span className={s.eyebrow}>Poznaj możliwości Lumery</span><h2 id="library-title">Znajdź swój rodzaj folii.</h2><p>Przejrzyj zastosowania. Otwórz wybraną kategorię, żeby poznać różnice i porównać jej warianty obok siebie.</p>
    <div className={s.atlasToolbar}><label htmlFor="finder-search">Szukaj rozwiązania lub serii</label><input id="finder-search" className={s.librarySearch} type="search" placeholder="Np. matowa, Perfecta, laminat…" maxLength={160} value={search} onChange={event => changeSearch(event.target.value)}/></div>
    <div className={s.chips} aria-label="Kategorie porównania"><button className={s.chip} type="button" aria-pressed={group === 'all'} onClick={() => changeGroup('all')}>Wszystkie</button>{finderGroups.map(item => <button type="button" className={s.chip} key={item.id} aria-pressed={group === item.id} onClick={() => changeGroup(item.id)}>{item.label}</button>)}</div>
    <div role="status" className={s.status}>{items.length ? `${solutionCount(items.length)} · kliknij kafelek, aby rozwinąć szczegóły` : 'Brak rozwiązań dla tych filtrów'}</div>
    {items.length ? <div className={s.atlas}>{finderGroups.map((topic,topicIndex) => {
      const entries = items.filter(item => item.group === topic.id);
      if (!entries.length) return null;
      return <section className={s.atlasGroup} key={topic.id} aria-labelledby={`atlas-group-${topic.id}`}><header className={s.atlasGroupHeading}><span aria-hidden="true">{String(topicIndex+1).padStart(2,'0')}</span><h3 id={`atlas-group-${topic.id}`}>{topic.label}</h3><small>{solutionCount(entries.length)}</small></header><div className={s.atlasGrid}>{entries.map((item,index) => <React.Fragment key={item.id}>
        <button type="button" className={s.atlasTile} ref={node => { tiles.current[item.id] = node; }} style={{order:index*2}} aria-expanded={openId === item.id} aria-controls={`rozwiazanie-${item.id}`} onClick={() => setOpenId(current => current === item.id ? '' : item.id)}><strong>{item.name}</strong><small>{item.variants?.length ? `${item.variants.length} ${item.variants.length === 1 ? 'wariant' : item.variants.length < 5 ? 'warianty' : 'wariantów'}` : 'Dobór indywidualny'}</small><span>{openId === item.id ? 'Zwiń szczegóły' : 'Poznaj rozwiązanie'} <b aria-hidden="true">{openId === item.id ? '−' : '+'}</b></span></button>
        <article className={s.atlasDetail} hidden={openId !== item.id} id={`rozwiazanie-${item.id}`} aria-labelledby={`atlas-title-${item.id}`} style={{'--atlas-order-wide':Math.floor(index/3)*6+5,'--atlas-order-medium':Math.floor(index/2)*4+3,'--atlas-order-small':index*2+1}} onKeyDown={event => { if(event.key === 'Escape') {event.preventDefault();close(item.id);} }}><SolutionDetails item={item} onClose={() => close(item.id)}/></article>
      </React.Fragment>)}</div></section>;
    })}</div> : <div className={s.libraryEmpty}><p>Spróbuj innej nazwy albo pokaż wszystkie kategorie.</p><button className={s.secondary} type="button" onClick={() => { changeGroup('all'); onSearch(''); }}>Wyczyść filtry i pokaż rozwiązania</button></div>}
  </section>;
}
