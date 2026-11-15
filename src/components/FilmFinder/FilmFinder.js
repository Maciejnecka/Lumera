import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import WindowScene from './WindowScene';
import DecorScene from './DecorScene';
import VariantSpecifications from './VariantSpecifications';
import ParameterGuide from './ParameterGuide';
import FinderFaq from './FinderFaq';
import SolutionLibrary from './SolutionLibrary';
import { finderGoals, finderSolutions, finderGroups, glassOptions, accessOptions, conditionOptions, finderPath, finderVersion, wrapSurfaces, wrapDecors, wrapSideOptions, finderVariantFields } from '../../data/filmFinderData';
import { emptyFinderAnswers, sanitizeFinderAnswers, finderSurfaces, getFinderResult, describeFinderAnswers, finderShareHash, buildFinderMessage, getFinderVariant, getFinderVariants, needsWrapSide, finderPrioritiesFor, finderConditions, finderStepComplete, finderResumeStep, isCustomFinder, finderContactTopic } from '../../lib/filmFinder';
import s from './FilmFinder.module.css';

const sessionKey = 'lumera-finder-v1';
const stepNames = ['Twój cel', 'Powierzchnia', 'Oczekiwany efekt', 'Warunki'];
const normalizeSearch = value => value.toLocaleLowerCase('pl').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ł/g, 'l');
const compareRows = [
  ['light', 'Światło'], ['look', 'Wygląd'], ['privacy', 'Prywatność'], ['tradeoff', 'Kompromis'], ['check', 'Co potwierdzamy'],
];

function Choices({ options, value, onChange, label, compact = false, illustrated = false }) {
  return <div className={`${s.choices} ${compact ? s.goalChoices : ''} ${illustrated ? s.surfaceChoices : ''}`} role="radiogroup" aria-label={label}>
    {options.map((option, index) => <button key={option.id} className={s.choice} type="button" role="radio" aria-checked={value === option.id}
      onClick={() => onChange(option.id)}
      onKeyDown={event => {
        if (!['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const next = event.key === 'Home' ? 0 : event.key === 'End' ? options.length - 1 : (index + (['ArrowDown', 'ArrowRight'].includes(event.key) ? 1 : -1) + options.length) % options.length;
        onChange(options[next].id);
        event.currentTarget.parentElement.children[next].focus();
      }}>
      {illustrated && option.id !== 'other' && <span className={s.surfaceThumbnail} aria-hidden="true"><DecorScene surface={option.id}/></span>}
      {option.mark && <span className={s.choiceNumber} aria-hidden="true">{option.mark}</span>}
      <span><strong>{option.label}</strong>{option.note && <small>{option.note}</small>}</span>
    </button>)}
  </div>;
}

const ownAnswerFields = [
  ['otherGoal', 'Twój cel'], ['otherSurface', 'Twoja powierzchnia'], ['otherPriority', 'Twój oczekiwany efekt'], ['otherCondition', 'Stan powierzchni'], ['details', 'Dodatkowe warunki'],
];
function WrittenAnswers({ answers }) {
  return <dl className={s.writtenAnswers}>{ownAnswerFields.filter(([key]) => answers[key]?.trim()).map(([key,label]) => <div key={key}><dt>{label}</dt><dd>{answers[key]}</dd></div>)}</dl>;
}
function TextAnswer({ name, label, value, onChange, optional = false, placeholder = '' }) {
  const limit = name === 'details' ? 600 : 300;
  return <div className={s.field}><label htmlFor={'finder-' + name}>{label}{optional ? ' (opcjonalnie)' : ''}</label><textarea id={'finder-' + name} value={value} rows={3} maxLength={limit} aria-required={!optional} aria-describedby={'finder-' + name + '-hint'} placeholder={placeholder} onChange={e => onChange(name, e.target.value)}/><small id={'finder-' + name + '-hint'}>{optional ? 'Dodaj informacje, które mogą wpłynąć na dobór.' : 'Wpisz opis, aby przejść dalej.'} Maksymalnie {limit} znaków.</small></div>;
}

function ScenePanel({ answers, finished, active, variant, variants, onVariant, onDecor, onSide, night, setNight, outside, setOutside, lcdOn, setLcdOn, contactHref, onContact }) {
  const wrap = answers.goal === 'renovation';
  const previewId = wrap ? 'wrap' : answers.goal === 'privacy' ? answers.surface === 'balcony' ? 'balcony' : answers.priority === 'switch' ? 'lcd' : answers.priority === 'pattern' ? 'frosted' : answers.priority === 'day' ? 'mirror' : 'matte' : ['heat','glare'].includes(answers.goal) ? answers.surface === 'polycarbonate' ? 'polycarbonate' : answers.surface === 'roof' ? '' : answers.priority === 'light' ? 'selective' : 'solar-reflective' : '';
  const preview = active || finderSolutions.find(x => x.id === previewId);
  const shade = variant || getFinderVariant(preview, answers, variants[preview?.id]);
  const previewVariants = getFinderVariants(preview, answers);
  const scene = shade?.scene || preview?.scene || 'clear';
  const selectedDecor = wrapDecors.find(x => x.id === answers.decor) || wrapDecors[0];
  const surfaceName = wrapSurfaces.find(x => x.id === answers.surface)?.label;
  const previewNote = wrap && answers.side === 'outside' ? 'Strona zewnętrzna wymaga okleiny przeznaczonej do takich warunków. Dekor na podglądzie określa wygląd; dostępność materiału potwierdzimy przy doborze.' : wrap ? 'Dekor to kierunek stylistyczny. Kolor, strukturę i przydatność materiału potwierdzimy na próbce i po ocenie podłoża.' : scene === 'reflective' || scene === 'balanced' ? night ? 'Wieczorem efekt lustra może zanikać, gdy wewnątrz jest jaśniej. Zobacz widok od zewnątrz.' : 'Efekt lustra wymaga, aby po stronie obserwatora było jaśniej niż za szybą.' : ['matte', 'frosted', 'balcony'].includes(scene) ? 'Mat rozprasza obraz. Blisko szyby lub przy mocnym podświetleniu mogą pozostawać widoczne kontury.' : scene === 'lcd' ? 'Przełącz przycisk i zobacz różnicę. W rzeczywistym produkcie może pozostawać zamglenie zależne od kąta patrzenia.' : 'Ilustracja pomaga porównać charakter efektu. Nie pokazuje temperatury ani dokładnej ilości światła w pomieszczeniu.';
  if (isCustomFinder(answers)) return <aside id="virtual-window" className={s.preview} aria-label="Indywidualny dobór"><div className={s.customPreview}><span className={s.eyebrow}>Twój własny opis</span><h3>Dopasujemy rozwiązanie do Twojej sytuacji.</h3><p>Opisz powierzchnię i oczekiwany efekt. Zachowamy te informacje w wyniku i przekażemy je do wyceny.</p>{!finished && <WrittenAnswers answers={answers}/>}<p>Podgląd konkretnej folii lub okleiny dobierzemy po wyjaśnieniu zastosowania.</p></div></aside>;
  return <aside id="virtual-window" data-workshop={wrap} className={s.preview} aria-label="Wirtualna pracownia efektów">
    <div className={s.previewHead}>
      <span className={s.eyebrow}>{wrap ? 'Pracownia dekorów' : 'Twoje wirtualne okno'}</span>
      {!wrap && <div className={s.toggle} aria-label="Oświetlenie">
        <button type="button" aria-pressed={!night} onClick={() => setNight(false)}>Dzień</button>
        <button type="button" aria-pressed={night} onClick={() => setNight(true)}>Wieczór</button>
      </div>}
    </div>
    {previewVariants.length > 1 && <div className={s.previewVariants}><span>{preview.id === 'selective' ? 'Porównaj warianty Perfecta' : preview.id === 'solar-reflective' ? 'Silver Comfort i Duo Premium' : preview.id === 'mirror' ? 'Lustra Mirror — wybierz wersję i siłę efektu' : 'Porównaj warianty materiału'}</span><div className={s.variants} role="group" aria-label={preview.id === 'selective' ? 'Wariant Perfecta w podglądzie' : preview.id === 'solar-reflective' ? 'Wariant Silver w podglądzie' : preview.id === 'mirror' ? 'Wariant Mirror w podglądzie' : 'Wariant materiału w podglądzie'}>{previewVariants.map(v => <button type="button" key={v.name} aria-pressed={shade?.name === v.name} onClick={() => onVariant(preview.id, v.name)}><strong>{v.name}</strong></button>)}</div></div>}
    <div className={s.scene}>{wrap ? <DecorScene surface={answers.surface} decor={selectedDecor.id} side={answers.side}/> : <WindowScene effect={scene} tone={shade?.tone} light={scene === 'lcd' && !lcdOn ? shade?.lightOff : shade?.light} variantName={shade?.name} night={night} outside={outside} lcdOn={lcdOn} wrap={wrap} decor={answers.priority || 'wood'} surface={answers.surface}/>}</div>
    {wrap && <div className={s.decorControls}>
      {needsWrapSide(answers) && <div className={s.decorSide}><span>Strona oklejenia</span><div className={s.toggle} role="group" aria-label="Strona oklejenia w podglądzie">{wrapSideOptions.slice(0,2).map(x => <button type="button" key={x.id} aria-pressed={answers.side === x.id} onClick={() => onSide(x.id)}>{x.label}</button>)}</div></div>}
      <span className={s.decorLabel}>Przymierz okleinę</span><div className={s.decorSwatches} role="group" aria-label="Dekory do przymierzenia">{wrapDecors.map(d => <button type="button" key={d.id} aria-pressed={selectedDecor.id === d.id} onClick={() => onDecor(d.id)}><span aria-hidden="true" className={s.swatch} data-family={d.family} style={{'--swatch-color': d.color, '--swatch-detail': d.detail}}/>{d.label}<span className={s.swatchCheck} aria-hidden="true">{selectedDecor.id === d.id ? '✓' : ''}</span></button>)}</div>
    </div>}
    {!wrap && <div className={s.sceneControls}><div className={s.toggle} aria-label="Strona obserwacji">
      <button type="button" aria-pressed={!outside} onClick={() => setOutside(false)}>Patrzę od środka</button>
      <button type="button" aria-pressed={outside} onClick={() => setOutside(true)}>Patrzę z zewnątrz</button>
    </div></div>}
    {scene === 'lcd' && !wrap && <div className={s.sceneControls}><button className={s.secondary} type="button" aria-pressed={lcdOn} onClick={() => setLcdOn(!lcdOn)}>{lcdOn ? 'LCD: widok przez szkło' : 'LCD: osłona matowa'} · przełącz</button></div>}
    <div className={s.sceneCaption}><strong>{wrap ? `${surfaceName || 'Wybierz powierzchnię'} · ${selectedDecor.label}` : shade?.name || preview?.name || 'Zacznij od tego, co chcesz zmienić'}</strong>
      {shade && <span className={s.variantCaption}>{Number.isFinite(shade.light) && `Światło widzialne: ${scene === 'lcd' && !lcdOn ? shade.lightOff : shade.light}%. `}{Number.isFinite(shade.solar) && `Redukcja energii słonecznej: ${shade.solar}%. `}{Number.isFinite(shade.uv) && `Redukcja UV: ${shade.uv}%. `}{Number.isFinite(shade.ir) && `Redukcja IR: ${shade.ir}%. `}{preview?.id === 'selective' && 'Oba warianty Perfecta pozostają jasne; różnicę oceniaj także po parametrach.'}</span>}{wrap ? 'Klikaj próbki i porównuj wykończenie wybranego elementu.' : preview?.look || 'Podgląd reaguje na Twój wybór.'}
      <small>Autorska ilustracja poglądowa Lumera. {wrap ? 'Nie jest próbnikiem konkretnego produktu.' : 'Nie jest zdjęciem ani pomiarem efektu folii.'}</small>
    </div>
    {finished && active && <details className={s.previewDetails} key={active.id}><summary>Parametry i ograniczenia wybranego rozwiązania</summary>{shade && <VariantSpecifications solution={active} variants={[shade]} compact/>}<p>{active.tradeoff}</p><Link href={active.path}>Szczegóły usługi →</Link></details>}
    {finished && <div className={s.previewQuote}><span className={s.eyebrow}>Podoba Ci się ten kierunek?</span><Link className={s.primary} href={contactHref} onClick={onContact}>Przejdź do formularza wyceny <span aria-hidden="true">→</span></Link><small>Przeniesiemy ten wybór i Twoje odpowiedzi.</small></div>}
    <div className={s.sceneNote}><span>Warto wiedzieć. </span>{previewNote}</div>
  </aside>;
}

export default function FilmFinder({ breadcrumbs }) {
  const [answers, setAnswers] = useState(emptyFinderAnswers);
  const [step, setStep] = useState(0);
  const [ready, setReady] = useState(false);
  const [night, setNight] = useState(false);
  const [outside, setOutside] = useState(false);
  const [lcdOn, setLcdOn] = useState(false);
  const [activeId, setActiveId] = useState('');
  const [variants, setVariants] = useState({});
  const [selectedIds, setSelectedIds] = useState([]);
  const [onlyDifferences, setOnlyDifferences] = useState(false);
  const [showAllSolutions, setShowAllSolutions] = useState(false);
  const [status, setStatus] = useState('');
  const [shareFallback, setShareFallback] = useState('');
  const [group, setGroup] = useState('all');
  const [search, setSearch] = useState('');
  const headingRef = useRef(null);
  const stageRef = useRef(null);
  const result = useMemo(() => getFinderResult(answers), [answers]);
  const activeSolution = result.solutions.find(x => x.id === activeId);
  const firstSolutions = result.solutions.slice(0, 3);
  const visibleSolutions = showAllSolutions || !activeSolution || firstSolutions.some(item => item.id === activeId) ? (showAllSolutions ? result.solutions : firstSolutions) : [...firstSolutions.slice(0, 2), activeSolution];
  const selected = result.solutions.filter(x => selectedIds.includes(x.id));
  const wrap = answers.goal === 'renovation';
  const modelRows = finderVariantFields.filter(([key]) => ['light','solar','uv','ir','mounting','thickness','securityClass','materialWarranty','power'].includes(key) && selected.some(item => getFinderVariant(item, answers, variants[item.id])?.[key] !== undefined));
  const comparisonRows = [...modelRows.map(([key,label]) => ['model:' + key,label]), ...compareRows.filter(([key]) => key !== 'light' || !modelRows.some(([field]) => field === 'light'))];
  const comparisonValue = (item, key) => {
    if (!key.startsWith('model:')) return item[key];
    const field = key.slice(6), value = getFinderVariant(item, answers, variants[item.id])?.[field];
    return value === undefined || value === null ? 'Brak danych referencyjnych' : String(value) + (finderVariantFields.find(([k]) => k === field)?.[2] || '');
  };

  useEffect(() => {
    const restore = event => {
      let input = {}, resultRequested = false, storedVariants = {}, storedActive = '';
      const params = new URLSearchParams(window.location.hash.slice(1));
      if (event?.type === 'hashchange' && !params.has('goal')) {
        if (finderGroups.some(item => item.id === params.get('group'))) setGroup(params.get('group'));
        return;
      }
      if (params.has('goal')) { input = Object.fromEntries(params.entries()); resultRequested = params.get('result') === '1'; }
      else {
        if (finderGroups.some(item => item.id === params.get('group'))) setGroup(params.get('group'));
        try { const stored = JSON.parse(sessionStorage.getItem(sessionKey) || 'null'); if (stored?.version === finderVersion) { input = stored.answers; resultRequested = stored.step === 4; storedVariants = stored.variants || {}; storedActive = stored.activeId; } } catch { /* Browser storage is optional. */ }
      }
      const next = sanitizeFinderAnswers(input);
      const nextResult = getFinderResult(next);
      setAnswers(next);
      setStep(finderResumeStep(next, resultRequested));
      setSelectedIds(nextResult.solutions.map(x => x.id));
      setActiveId(nextResult.solutions.find(x => x.id === (params.get('film') || storedActive))?.id || nextResult.solutions[0]?.id || '');
      setVariants(Object.fromEntries(nextResult.solutions.filter(x => x.variants?.length).map(x => [x.id, getFinderVariant(x, next, params.get('shade-' + x.id) || storedVariants[x.id])?.name])));
      setReady(true);
    };
    restore();
    window.addEventListener('hashchange', restore);
    return () => window.removeEventListener('hashchange', restore);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try { sessionStorage.setItem(sessionKey, JSON.stringify({ version: finderVersion, answers, step, variants, activeId })); } catch { /* The guide works without storage. */ }
  }, [answers, step, ready, variants, activeId]);

  const change = (key, value) => {
    setAnswers(current => sanitizeFinderAnswers(key === 'goal' ? { ...emptyFinderAnswers, goal: value } : key === 'surface' ? { ...current, surface: value, priority: '', otherPriority: '', decor: '', side: current.surface === value ? current.side : '', glass: 'unknown', access: 'unknown', condition: 'unknown', details: '' } : key === 'decor' ? { ...current, decor: value, priority: wrapDecors.find(x => x.id === value)?.family || current.priority } : key === 'priority' ? { ...current, priority: value, decor: current.priority === value ? current.decor : '' } : { ...current, [key]: value }));
    if (!['decor', 'side', 'otherGoal', 'otherSurface', 'otherPriority', 'otherCondition', 'details'].includes(key)) { setActiveId(''); setVariants({}); setSelectedIds([]); }
    setStatus(''); setShareFallback('');
    if (window.location.hash.includes('goal=')) window.history.replaceState(window.history.state, '', window.location.pathname + window.location.search);
  };
  const goTo = next => {
    if (next > step && !finderStepComplete(answers, step)) return;
    setStep(next); setStatus(''); setShowAllSolutions(false);
    if (next === 4) { setSelectedIds(result.solutions.map(x => x.id)); setActiveId(result.solutions[0]?.id || ''); }
    requestAnimationFrame(() => {
      headingRef.current?.focus({ preventScroll: true });
      stageRef.current?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    });
  };
  const reset = () => {
    setVariants({}); setAnswers(emptyFinderAnswers); setActiveId(''); setSelectedIds([]); setNight(false); setOutside(false); setLcdOn(false); setOnlyDifferences(false); setShareFallback('');
    window.history.replaceState(window.history.state, '', window.location.pathname + window.location.search);
    goTo(0);
  };
  const share = async () => {
    const hash = finderShareHash(answers, activeId, variants);
    const url = `${window.location.origin}${finderPath}${hash}`;
    window.history.replaceState(window.history.state, '', finderPath + hash);
    try { await navigator.clipboard.writeText(url); setStatus('Link skopiowany. Zapisaliśmy odpowiedzi, własne opisy i wybrane warianty.'); setShareFallback(''); }
    catch { setShareFallback(url); setStatus('Skopiuj link z pola poniżej.'); }
  };
  const quoteIds = activeSolution ? [activeSolution.id] : selectedIds;
  const quoteVariant = getFinderVariant(activeSolution, answers, variants[activeId]);
  const quoteName = wrap ? `${wrapSurfaces.find(item => item.id === answers.surface)?.label || 'Twoja powierzchnia'} · ${wrapDecors.find(item => item.id === answers.decor)?.label || 'Dekor do ustalenia'}` : quoteVariant?.name || activeSolution?.name || 'Indywidualny dobór do Twojego opisu';
  const contact = () => {
    const message = buildFinderMessage(answers, quoteIds, variants);
    try {
      sessionStorage.setItem('lumera-contact-topic', finderContactTopic(answers, quoteIds));
      sessionStorage.setItem('lumera-contact-finder', message);
    } catch { /* Query fallback carries the summary without personal data. */ }
  };
  const contactHref = `/kontakt?dobor=${encodeURIComponent(buildFinderMessage(answers, quoteIds, variants))}&temat=${encodeURIComponent(finderContactTopic(answers, quoteIds))}`;
  const conditions = finderConditions(answers);
  const questions = [
    { title: 'Co chcesz zmienić?', text: 'Wybierz główny cel. Za chwilę dopasujesz efekt i warunki.', options: finderGoals, field: 'goal' },
    { title: wrap ? 'Co chcesz odnowić?' : 'Gdzie ma znaleźć się folia?', text: wrap ? 'Powierzchnia i jej detale wpływają na dobór materiału.' : 'Pokazujemy powierzchnie pasujące do wybranego celu. Jeśli Twojej nie ma na liście, wybierz „Inna lub nierozpoznana powierzchnia”.', options: finderSurfaces(answers.goal), field: 'surface' },
    { title: answers.goal === 'other' ? 'Jak chcesz przejść do doboru?' : wrap ? 'Jaki charakter ma mieć wykończenie?' : answers.surface === 'balcony' && answers.goal === 'privacy' ? 'Jak chcesz osłonić balustradę?' : 'Co jest dla Ciebie najważniejsze?', text: wrap ? 'Wybierasz kierunek. Konkretny dekor potwierdzimy na próbce.' : 'Każdy wybór ma swój kompromis. W podsumowaniu pokażemy go wprost.', options: finderPrioritiesFor(answers.goal, answers.surface), field: 'priority' },
    { title: wrap ? 'W jakim stanie jest powierzchnia?' : conditions.kind === 'draft' ? 'Gdzie odczuwasz przeciąg?' : conditions.kind === 'custom' ? 'Co jeszcze warto uwzględnić?' : conditions.kind === 'polycarbonate' ? 'Co wiesz o świetliku?' : conditions.kind === 'partition' ? 'Jak użytkowana jest przegroda?' : conditions.kind === 'balcony' ? 'Jak wygląda balustrada?' : 'Co już wiesz o przeszkleniu?', text: wrap ? 'Nie musisz oceniać przyczepności. Wybierz to, co widzisz.' : 'Odpowiedź „Nie wiem” jest w porządku. Te informacje ustalimy przed montażem.' },
  ];
  const q = questions[Math.min(step, 3)];
  const canContinue = finderStepComplete(answers, step);
  const customField = step < 3 && answers[q.field] === 'other' ? ['otherGoal','otherSurface','otherPriority'][step] : step === 3 && answers.condition === 'other' ? 'otherCondition' : null;
  const summaryAnswers = describeFinderAnswers(answers).filter(([label]) => !(label === 'Cel' && answers.goal === 'other') && !(label === 'Powierzchnia' && answers.surface === 'other') && !(label === 'Priorytet' && answers.priority === 'other') && !['Dodatkowe warunki', 'Stan'].includes(label));
  const query = normalizeSearch(search).trim();
  const library = finderSolutions.filter(x => (group === 'all' || group === x.group) && (!query || normalizeSearch(`${x.name} ${x.series || ''} ${x.benefit} ${x.look} ${x.variants?.map(v => `${v.name} ${v.color || ''}`).join(' ') || ''}`).includes(query)));
  const sceneProps = { answers, finished: step === 4, onDecor: value => change('decor', value), onSide: value => change('side', value), variants, onVariant: (id, name) => { setActiveId(id); setVariants(current => ({ ...current, [id]: name })); }, variant: step === 4 ? getFinderVariant(activeSolution, answers, variants[activeId]) : undefined, active: step === 4 ? activeSolution : null, night, setNight, outside, setOutside, lcdOn, setLcdOn };

  return <main id="main-content" className={s.page}>
    <Breadcrumbs items={breadcrumbs}/>
    <header className={s.intro}>
      <div><span className={s.eyebrow}>Lumera · pracownia doboru</span><h1>Twoja przestrzeń.<br/>Twój efekt. Dobrana folia.</h1><p>Kilka prostych wyborów. Zobacz, co zmienia folia, porównaj rozwiązania i określ, czego potrzebujesz — bez znajomości nazw produktów.</p></div>
      <div className={s.introAside}><strong>Okna, szkło i nowe wykończenia</strong>Dobór folii oraz osobna ścieżka laminatów na drzwi, meble i ramy.</div>
    </header>
    <section className={s.stage} ref={stageRef} id="dobor" aria-label="Interaktywny dobór folii i laminatów">
      <div className={s.stageTop}><div className={s.steps} aria-label={step === 4 ? 'Podsumowanie doboru' : `Krok ${step + 1} z 4: ${stepNames[step]}`}>
        {[0,1,2,3].map(i => <span key={i} className={`${s.stepDot} ${i <= step ? s.stepActive : ''}`} aria-hidden="true">{i < step ? '✓' : i + 1}</span>)}<span className={s.stepText}>{step === 4 ? 'Twój kierunek doboru' : stepNames[step]}</span>
      </div><button type="button" className={s.resetButton} onClick={reset}><span aria-hidden="true">↻</span> Zacznij od nowa</button></div>
      <div className={s.journey} aria-label="Od wyboru do wyceny">{[['Twoje potrzeby','twoje-potrzeby'],[wrap ? 'Wykończenie i podgląd' : 'Folia i podgląd','propozycje-folii'],['Formularz wyceny','formularz-wyceny']].map(([label,id],index) => step === 4 ? <a key={id} href={`#${id}`} onClick={event => { event.preventDefault(); document.getElementById(id)?.scrollIntoView({block:'start',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'}); }}><span>{String(index+1).padStart(2,'0')}</span>{label}<span aria-hidden="true">↗</span></a> : <span key={id} className={index === 0 ? s.journeyActive : ''}><b>{String(index+1).padStart(2,'0')}</b>{label}</span>)}</div>
      {step < 4 ? <div className={s.workbench}>
        <div className={s.question}><span className={s.eyebrow}>Krok {step + 1} / 4</span><h2 ref={headingRef} tabIndex={-1}>{q.title}</h2><p>{q.text}</p>
          {step < 3 ? <Choices label={q.title} options={q.options} value={answers[q.field]} onChange={value => change(q.field, value)} compact={step === 0} illustrated={wrap && step === 1}/> : <>
            {wrap && <Choices label="Stan podłoża" options={conditionOptions} value={answers.condition} onChange={value => change('condition', value)}/>}
            {conditions.glass && <div className={s.field}><label htmlFor="finder-glass">Rodzaj szyby</label><select id="finder-glass" value={answers.glass} onChange={e => change('glass', e.target.value)}>{glassOptions.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}</select></div>}
            {conditions.fixedAccess && <div className={s.note}><strong>Dostęp do świetlika: wyłącznie od zewnątrz.</strong> Organizację dojścia i prac na wysokości potwierdzamy przed montażem.</div>}
            {conditions.access && <div className={s.field}><label htmlFor="finder-access">Dostęp do {conditions.kind === 'balcony' ? 'balustrady' : conditions.kind === 'polycarbonate' ? 'świetlika' : 'przeszklenia'}</label><select id="finder-access" value={answers.access} onChange={e => change('access', e.target.value)}>{accessOptions.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}</select></div>}
            {conditions.kind === 'polycarbonate' && <div className={s.note}>Przydatne będą rodzaj i oznaczenia tworzywa, zdjęcia mocowań oraz informacja o istniejącej folii. Nie musisz określać liczby szyb — to świetlik z tworzywa.</div>}
            {conditions.kind === 'partition' && <div className={s.note}>Pokaż krawędzie i mocowania. Przy LCD zaznacz możliwość doprowadzenia zasilania oraz oczekiwany sposób sterowania.</div>}
            {conditions.kind === 'balcony' && <div className={s.note}>Pokaż całą balustradę, mocowania i krawędzie szkła. W opisie możesz dodać wysokość osłony i piętro.</div>}
            {conditions.kind === 'draft' && <div className={s.note}>Folia nie uszczelnia okna. Opisz miejsce, w którym czuć ruch powietrza, i stan uszczelek. Najpierw trzeba ustalić przyczynę dyskomfortu.</div>}
            {conditions.kind === 'custom' && <div className={s.note}>Dodaj sposób użytkowania i informacje, które nie zmieściły się we wcześniejszych odpowiedziach. Dobór oprzemy na Twoim opisie i zdjęciach.</div>}
            <TextAnswer name="details" label={conditions.kind === 'draft' ? 'Miejsce i okoliczności przeciągu lub inne informacje' : 'Inne warunki lub dodatkowe informacje'} value={answers.details} onChange={change} optional placeholder="Np. nietypowy kształt, istniejąca powłoka, sposób użytkowania…"/>
          </>}
          {customField && <TextAnswer name={customField} label={{otherGoal:'Opisz swój cel',otherSurface:'Opisz powierzchnię lub to, co widzisz',otherPriority:'Opisz oczekiwany efekt',otherCondition:'Opisz stan powierzchni'}[customField]} value={answers[customField]} onChange={change}/>}
          {step === 1 && needsWrapSide(answers) && <div className={s.sideQuestion}><h3>Od której strony chcesz okleić {answers.surface === 'doors' ? 'drzwi i futrynę' : 'ramy okienne'}?</h3><Choices label="Strona oklejenia" options={wrapSideOptions} value={answers.side} onChange={value => change('side', value)}/></div>}
          <div className={s.questionNav}>{step > 0 ? <button type="button" className={s.textButton} onClick={() => goTo(step - 1)}>← Wstecz</button> : <span className={s.eyebrow}>Wybierasz po swojemu</span>}<button type="button" disabled={!canContinue} className={s.primary} onClick={() => goTo(step + 1)}>{step === 3 ? 'Pokaż moje rozwiązania' : 'Dalej'} <span aria-hidden="true">→</span></button></div>
        </div><ScenePanel {...sceneProps} contactHref={contactHref} onContact={contact}/>
      </div> : <>
        <div className={s.resultTop}><div className={s.results}><div className={s.needsSummary} id="twoje-potrzeby"><span className={s.eyebrow}>01 · Twoje potrzeby</span><h2 ref={headingRef} tabIndex={-1}>{result.title}</h2>
          <WrittenAnswers answers={answers}/>
          <div className={s.summary}>{summaryAnswers.slice(0, wrap ? 5 : 3).map(([label,value]) => <span key={label}>{value}</span>)}</div>
          <p>{result.solutions.length ? wrap ? 'Wybierz wykończenie w pracowni dekorów i zobacz, jak zmienia się Twój element. Konkretną okleinę dobierzemy do powierzchni i warunków użytkowania.' : 'To kierunki do rozważenia, dopasowane do Twoich odpowiedzi. Wybierz folię poniżej, a następnie sprawdź jej efekt na wirtualnym oknie.' : 'Mamy już opis Twojej potrzeby. W tej kombinacji najpierw sprawdzimy warunki, zamiast wskazywać przypadkowy materiał.'}</p>
          <button type="button" className={s.textButton} onClick={() => goTo(2)}>Edytuj oczekiwany efekt →</button></div>
          <div className={s.quoteShortcut} id={result.solutions.length ? undefined : 'propozycje-folii'} aria-label="Wybrany kierunek i formularz wyceny"><div><span className={s.eyebrow}>{wrap ? 'Twój kierunek wykończenia' : activeSolution ? 'Aktualnie wybrany kierunek' : 'Dobór na podstawie opisu'}</span><strong>{quoteName}</strong><p>{activeSolution ? 'Możesz porównać inne opcje poniżej lub przejść z tym wyborem do formularza.' : 'Prześlij opis do oceny i wyceny.'}</p></div><Link className={s.primary} href={contactHref} onClick={contact}>Przejdź do formularza wyceny <span aria-hidden="true">→</span></Link><small>Twój wybór i odpowiedzi uzupełnimy automatycznie.</small></div>
          {result.solutions.length > 0 && <section className={s.recommendations} id="propozycje-folii" aria-labelledby="suggestions-heading">
            <span className={s.eyebrow}>02 · Wybierz i porównaj</span>
            <h3 id="suggestions-heading">{wrap ? 'Twój kierunek wykończenia' : 'Sugerowane folie do Twojego zapytania'}</h3>
            <p className={s.recommendationHint}>{wrap ? 'Wybierz kierunek, a dekor przymierz w podglądzie.' : 'Wybierz folię z listy. Jej warianty i szczegóły pojawią się przy podglądzie.'}</p>
            <div className={s.solutionList} role="group" aria-label="Wybór sugerowanego rozwiązania">{visibleSolutions.map(item => <button type="button" className={s.solutionOption} aria-pressed={activeId === item.id} key={item.id} onClick={() => setActiveId(item.id)}><span className={s.solutionMark} aria-hidden="true">{activeId === item.id ? '✓' : '○'}</span><span><span className={s.solutionLabel}>{item.id === result.solutions[0]?.id ? 'Sugerowany wybór' : 'Alternatywa'}</span><strong>{item.name}</strong><small>{item.benefit}</small></span></button>)}</div>
            {result.solutions.length > 3 && <button type="button" className={s.textButton} aria-expanded={showAllSolutions} onClick={() => setShowAllSolutions(value => !value)}>{showAllSolutions ? 'Pokaż mniej propozycji' : `Pokaż pozostałe propozycje (${result.solutions.length - 3})`}</button>}
            <a className={s.viewChosen} href="#virtual-window" onClick={event => { event.preventDefault(); document.getElementById('virtual-window')?.scrollIntoView({block:'start',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'}); }}>{wrap ? 'Przymierz wybrany dekor ↓' : 'Sprawdź warianty i podgląd wybranej folii ↓'}</a>
          </section>}
          <div className={s.actions}><button type="button" className={s.secondary} onClick={() => goTo(2)}>Zmień oczekiwany efekt</button><button type="button" className={s.textButton} onClick={share}>Zapisz wynik w linku</button></div>
          <div className={s.status} role="status">{status}</div>{shareFallback && <input className={s.shareField} aria-label="Link do Twojego wyniku" value={shareFallback} readOnly onFocus={e => e.target.select()}/>}
        </div><ScenePanel {...sceneProps} contactHref={contactHref} onContact={contact}/></div>
        <div className={s.notes}>{result.notes.map(note => <div className={s.note} key={note}>{note}</div>)}</div>
        {result.solutions.length > 0 && <details className={s.compareDisclosure}><summary>Porównaj parametry <span>{selected.length} w porównaniu</span></summary><section className={s.compare} aria-label="Porównanie wybranych rozwiązań"><div className={s.compareChoices} role="group" aria-label="Rozwiązania w porównaniu">{result.solutions.map(item => <button type="button" className={s.chip} key={item.id} aria-pressed={selectedIds.includes(item.id)} onClick={() => setSelectedIds(ids => ids.includes(item.id) ? ids.filter(id => id !== item.id) : [...ids,item.id])}>{selectedIds.includes(item.id) ? '✓ ' : '+ '}{item.name}</button>)}</div><div className={s.actions}><h3>Różnice, które mają znaczenie</h3>{selected.length > 1 && <button className={s.chip} type="button" aria-pressed={onlyDifferences} onClick={() => setOnlyDifferences(!onlyDifferences)}>Tylko różnice</button>}</div>
          {selected.length ? <div className={s.tableWrap} tabIndex={0} role="region" aria-label="Przewijana tabela porównawcza"><table className={s.table}><thead><tr><th scope="col">Cecha</th>{selected.map(x => <th scope="col" key={x.id}>{x.name}</th>)}</tr></thead><tbody>{comparisonRows.filter(([key]) => !onlyDifferences || selected.length < 2 || new Set(selected.map(x => comparisonValue(x, key))).size > 1).map(([key,label]) => <tr key={key}><th scope="row">{label}</th>{selected.map(x => <td key={x.id}>{comparisonValue(x, key)}</td>)}</tr>)}</tbody></table></div> : <p className={s.emptyCompare}>Wybierz przynajmniej jedno rozwiązanie powyżej.</p>}
        </section></details>}
        <section className={s.checklist} id="formularz-wyceny" aria-labelledby="quote-steps-title">
          <div className={s.quoteHeading}><span className={s.eyebrow}>03 · Czas na wycenę</span><h3 id="quote-steps-title">Prześlij wybór. Ustalmy szczegóły.</h3><p>Wybrany kierunek: <strong>{quoteName}</strong>. W formularzu dodasz dane kontaktowe i informacje potrzebne do wyceny.</p></div>
          <div className={s.quoteMainAction}><Link className={s.primary} href={contactHref} onClick={contact}>Przejdź do formularza wyceny <span aria-hidden="true">→</span></Link><p>Wybór i odpowiedzi przeniosą się automatycznie. Samo przejście do formularza nie wysyła zapytania.</p></div>
          <ol className={s.preparationList}>{result.checks.map((x,index) => <li key={x}><span className={s.preparationNumber} aria-hidden="true">{String(index+1).padStart(2,'0')}</span><div><h4>{['Zdjęcia miejsca','Wymiary i lokalizacja',wrap ? 'Wykończenie i warunki' : 'Warunki montażu'][index] || 'Dodatkowe ustalenia'}</h4><p>{x}</p></div></li>)}</ol>
          <div className={s.quoteFooter}><p>Przed montażem potwierdzamy materiał, zgodność z podłożem i zakres prac.</p><div className={s.quoteActions}><button type="button" className={s.secondary} onClick={share}>Zapisz wybór na później</button></div></div>
          {status && <div role="status" className={s.status}>{status}</div>}
        </section>
      </>}
    </section>

    <SolutionLibrary items={library} group={group} onGroup={setGroup} search={search} onSearch={setSearch}/>
    <ParameterGuide/>
    <FinderFaq/>
  </main>;
}

