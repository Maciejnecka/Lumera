import { finderGoals, finderPriorities, finderSolutions, windowSurfaces, wrapSurfaces, glassOptions, accessOptions, conditionOptions, wrapDecors, wrapSideOptions } from '../data/filmFinderData';

export const emptyFinderAnswers = { goal: '', surface: '', priority: '', glass: 'unknown', access: 'unknown', condition: 'unknown', side: '', decor: '', otherGoal: '', otherSurface: '', otherPriority: '', otherCondition: '', details: '' };
const otherSurface = { id: 'other', label: 'Inna lub nierozpoznana powierzchnia', note: 'Opisz, co widzisz. Pomożemy rozpoznać powierzchnię i dobrać rozwiązanie.' };
const otherPriority = { id: 'other', label: 'Inny efekt — opiszę go', note: 'Opisz, jaki rezultat chcesz uzyskać.' };
const surfaceIdsByGoal = {
  heat: ['window', 'roof', 'polycarbonate'],
  glare: ['window', 'roof', 'polycarbonate'],
  privacy: ['window', 'partition', 'balcony'],
  safety: ['window', 'partition', 'balcony', 'roof'],
  uv: ['window', 'roof'],
  cold: ['window', 'roof'],
  special: ['window', 'partition', 'balcony', 'roof', 'polycarbonate'],
};
export function finderSurfaces(goal) {
  if (goal === 'renovation') return [...wrapSurfaces, otherSurface];
  if (goal === 'other') return [...windowSurfaces, ...wrapSurfaces, otherSurface];
  const ids = Object.prototype.hasOwnProperty.call(surfaceIdsByGoal, goal) ? surfaceIdsByGoal[goal] : [];
  return ids.length ? [...windowSurfaces.filter(x => ids.includes(x.id)), otherSurface] : [];
}
export function finderPrioritiesFor(goal, surface) {
  if (goal === 'other') return [{ id: 'consult', label: 'Dobór na podstawie mojego opisu', note: 'Chcę omówić możliwe rozwiązania.' }, otherPriority];
  let options = Array.isArray(finderPriorities[goal]) ? finderPriorities[goal] : [];
  if (surface === 'polycarbonate' && ['heat', 'glare'].includes(goal)) options = options.filter(x => x.id !== 'balanced');
  if (goal === 'privacy') {
    if (surface === 'balcony') options = options.filter(x => ['constant', 'pattern'].includes(x.id));
    if (surface === 'partition') options = options.filter(x => x.id !== 'day');
    if (surface === 'window') options = options.filter(x => x.id !== 'switch');
  }
  if (goal === 'safety' && ['balcony', 'roof'].includes(surface)) options = options.filter(x => x.id !== 'intrusion').map(x => x.id === 'fragments' ? { ...x, note: surface === 'roof' ? 'Ocena zabezpieczenia szkła nad głową i jego mocowania.' : 'Ocena zabezpieczenia szkła balustrady i jego mocowania.' } : x);
  if (goal === 'uv' && surface === 'roof') options = options.filter(x => x.id !== 'heat');
  if (goal === 'special') {
    const allowed = surface === 'partition' ? ['projection', 'shield', 'removal'] : ['balcony', 'roof'].includes(surface) ? ['birds', 'removal'] : surface === 'polycarbonate' ? ['removal'] : null;
    if (allowed) options = options.filter(x => allowed.includes(x.id));
  }
  return options.length ? [...options, otherPriority] : [];
}
export const needsWrapSide = a => a.goal === 'renovation' && ['doors', 'frames'].includes(a.surface);
export const isCustomFinder = a => [a.goal, a.surface, a.priority, a.condition].includes('other');
export function finderConditions(a) {
  const kind = a.goal === 'renovation' ? 'wrap' : isCustomFinder(a) ? 'custom' : a.goal === 'cold' && a.priority === 'draft' ? 'draft' : ['window', 'roof'].includes(a.surface) ? 'glass' : a.surface;
  return { kind, glass: kind === 'glass', access: ['glass', 'balcony'].includes(kind), fixedAccess: a.surface === 'polycarbonate' ? 'yes' : null };
}
const validId = (list, id) => list.some(item => item.id === id);
const cleanText = (value, limit) => typeof value === 'string' ? value.replace(/[\u0000-\u0008\u000b-\u001f\u007f]/g, '').slice(0, limit) : '';

export function sanitizeFinderAnswers(input = {}) {
  input = input && typeof input === 'object' ? input : {};
  const goal = validId(finderGoals, input.goal) ? input.goal : '';
  const surfaceInput = input.surface === 'unknown' ? 'other' : input.surface;
  const surface = validId(finderSurfaces(goal), surfaceInput) ? surfaceInput : '';
  const priority = validId(finderPrioritiesFor(goal, surface), input.priority) ? input.priority : '';
  const condition = goal === 'renovation' && validId(conditionOptions, input.condition) ? input.condition : 'unknown';
  const fields = finderConditions({ goal, surface, priority, condition });
  const decor = goal === 'renovation' ? wrapDecors.find(x => x.id === input.decor && x.family === priority) || (priority ? wrapDecors.find(x => x.family === priority) : null) : null;
  return {
    goal,
    surface,
    priority,
    glass: fields.glass && validId(glassOptions, input.glass) ? input.glass : 'unknown',
    access: fields.fixedAccess || (fields.access && validId(accessOptions, input.access) ? input.access : 'unknown'),
    condition,
    side: needsWrapSide({goal, surface}) && validId(wrapSideOptions, input.side) ? input.side : '',
    decor: decor?.id || '',
    otherGoal: goal === 'other' ? cleanText(input.otherGoal, 300) : '',
    otherSurface: surface === 'other' ? cleanText(input.otherSurface || (input.surface === 'unknown' ? 'Powierzchnia do ustalenia — proszę o pomoc w rozpoznaniu.' : ''), 300) : '',
    otherPriority: priority === 'other' ? cleanText(input.otherPriority, 300) : '',
    otherCondition: condition === 'other' ? cleanText(input.otherCondition, 300) : '',
    details: goal ? cleanText(input.details, 600) : '',
  };
}

export function finderStepComplete(input, step) {
  const a = sanitizeFinderAnswers(input);
  if (step === 0) return Boolean(a.goal && (a.goal !== 'other' || a.otherGoal.trim()));
  if (step === 1) return Boolean(a.surface && (a.surface !== 'other' || a.otherSurface.trim()) && (!needsWrapSide(a) || a.side));
  if (step === 2) return Boolean(a.priority && (a.priority !== 'other' || a.otherPriority.trim()));
  return a.condition !== 'other' || Boolean(a.otherCondition.trim());
}

export function finderResumeStep(input, resultRequested = false) {
  for (let step = 0; step < 4; step++) if (!finderStepComplete(input, step)) return step;
  return resultRequested ? 4 : 3;
}

export function getFinderResult(input) {
  const a = sanitizeFinderAnswers(input);
  const complete = [0, 1, 2, 3].every(step => finderStepComplete(a, step));
  if (!complete) return { complete: false, solutions: [], notes: [], checks: [], title: 'Wybierz oczekiwany efekt' };
  if (isCustomFinder(a)) return {
    complete: true, title: 'Twój opis — dobór indywidualny', solutions: [],
    notes: ['Zachowaliśmy Twój opis. Rozwiązanie dobierzemy po sprawdzeniu zastosowania i powierzchni; własny opis nie jest automatycznie przypisywany do produktu.'],
    checks: ['Zdjęcia powierzchni oraz detali, których dotyczy opis.', 'Wymiary, liczba elementów i miejscowość.', 'Omówienie oczekiwanego efektu oraz warunków użytkowania.'],
  };
  let ids = [], notes = [], title = '', checks = [];
  const outside = ['window', 'roof', 'balcony', 'polycarbonate'].includes(a.surface);
  const solar = a.goal === 'heat' || a.goal === 'glare' || (a.goal === 'uv' && a.priority === 'heat');
  if (a.goal === 'renovation') {
    ids = ['wrap'];
    title = 'Nowe wykończenie na istniejącej powierzchni';
    checks = ['Zdjęcia całości, narożników, krawędzi i osprzętu.', 'Wymiary, liczba elementów oraz miejscowość.', 'Próbka dekoru w oświetleniu Twojego wnętrza.'];
    if (a.condition === 'damaged') notes.push('Najpierw ocena podłoża: odspojona powłoka, ubytki lub ślady wilgoci mogą wymagać naprawy albo wykluczyć oklejenie.');
    if (a.condition === 'unknown') notes.push('Stan podłoża potwierdzimy na zdjęciach i przy ocenie powierzchni.');
    if (a.surface === 'counter') notes.push('Przy recepcji ustalamy zakres oklejenia frontu, boków i blatu oraz kontakt z wodą, temperaturą i intensywność użytkowania.');
    if (a.surface === 'frames') notes.push('Przy ramach pokaż profile, uszczelki, narożniki i otwory odwodnienia.');
    if (needsWrapSide(a)) {
      if (a.side === 'outside') {
        notes.push('Wybrano stronę zewnętrzną. Pokazany dekor określa wygląd; konkretny materiał musi być przeznaczony do ekspozycji zewnętrznej i zgodny z podłożem. Dostępność takiego wykończenia potwierdzimy osobno.');
        checks[2] = 'Materiał do zastosowania zewnętrznego, ekspozycja na słońce i pogodę oraz próbka wykończenia.';
      } else if (a.side === 'inside') checks[2] = 'Próbka dekoru w oświetleniu wnętrza oraz ocena profili, krawędzi i osprzętu.';
      else notes.push('Strona oklejenia pozostaje do ustalenia. Wybierz stronę wewnętrzną lub zewnętrzną albo prześlij zdjęcia obu stron.');
    }
  } else if (a.goal === 'special') {
    title = finderSolutions.find(s => s.id === a.priority)?.name || 'Dobór specjalistyczny';
    if (a.surface === 'polycarbonate') notes.push('Demontaż na tworzywie wymaga oceny stanu podłoża i starej aplikacji. Nie stosujemy automatycznie metod przeznaczonych do szkła.');
    else ids = [a.priority];
    if (a.surface === 'roof') notes.push('Położenie przeszklenia nad głową wymaga odrębnej oceny dostępu i dopuszczenia materiału.');
  } else if (a.surface === 'polycarbonate') {
    if (solar) { ids = ['polycarbonate']; title = 'Materiał dopasowany do świetlika z tworzywa'; }
    else { title = 'Najpierw potwierdźmy rozwiązanie dla tworzywa'; notes.push('Wybrane podłoże to poliwęglan. Nie przenosimy na nie automatycznie rozwiązań do szkła. Oczekiwany efekt i dokumentację tworzywa trzeba sprawdzić indywidualnie.'); }
  } else if (a.surface === 'balcony' && a.goal === 'privacy') {
    if (a.goal === 'privacy' && ['constant', 'pattern'].includes(a.priority)) { ids = ['balcony']; title = 'Osłona widoku na wysokości balustrady'; }
    else if (a.goal === 'privacy' && a.priority === 'day') { ids = ['balcony']; title = 'Porównaj zakres osłony balustrady'; notes.push('Matowa osłona wymaga rezygnacji z wyraźnego widoku przez oklejoną część. Nie dobieramy automatycznie lustra na balustradę.'); }
    else { title = 'Balustrada wymaga osobnego doboru'; notes.push(solar ? 'Folia na dolnej balustradzie nie rozwiązuje nagrzewania mieszkania przez okna. Jeśli chcesz osłonić okno lub drzwi balkonowe, zmień powierzchnię na „Okno, drzwi balkonowe lub witryna”.' : 'Balustrada pracuje w warunkach zewnętrznych. Dobór do tej funkcji wymaga oceny szkła, mocowań i ekspozycji.'); }
  } else if (solar) {
    if (a.surface === 'partition') { title = 'Ustalmy, którędy słońce dociera do wnętrza'; notes.push('Wybrana ścianka jest wewnątrz budynku. Przy nagrzewaniu od słońca najpierw oceniamy okna zewnętrzne; nie dobieramy automatycznie folii przeciwsłonecznej na przegrodę wewnętrzną.'); }
    else if (a.surface === 'roof') { title = 'Dobór do przeszklenia dachowego'; notes.push('Szyby skośne i świetliki wymagają produktu dopuszczonego do takiego montażu. Nie traktujemy standardowych wariantów na okna pionowe jako zamienników.'); }
    else {
      title = a.priority === 'strong' ? 'Mocniejsza osłona, z akceptacją przyciemnienia' : a.priority === 'light' || a.goal === 'uv' ? 'Dużo światła i kontrola słońca' : 'Porównaj jasność z siłą osłony';
      ids = a.priority === 'strong' ? ['solar-reflective', 'selective', 'neutral'] : a.priority === 'light' || a.goal === 'uv' ? ['selective', 'neutral', 'solar-reflective'] : ['solar-reflective', 'selective', 'neutral'];
      if (a.access === 'no') {
        notes.push('Dostęp tylko od środka nie oznacza, że folia wewnętrzna będzie odpowiednia. Najpierw sprawdzamy pakiet i możliwość organizacji montażu zewnętrznego.');
        if (a.glass === 'single') ids = ['internal', ...ids.slice(0, 2)];
      }
    }
  } else if (a.goal === 'privacy') {
    if (a.surface === 'roof') { title = 'Osłona przeszklenia nad głową wymaga oceny'; notes.push('Dla prywatności na szybie dachowej trzeba potwierdzić materiał, ekspozycję i zakres osłony. Nie dobieramy tu automatycznie folii do przegród pionowych.'); }
    else {
      title = a.priority === 'day' ? 'Zachowaj widok, pamiętaj o świetle' : a.priority === 'switch' ? 'Prywatność wtedy, kiedy jej potrzebujesz' : 'Osłoń widok przez wybraną część szkła';
      ids = a.priority === 'day' ? ['mirror', 'matte'] : a.priority === 'switch' ? ['lcd', 'matte', 'frosted'] : a.priority === 'pattern' ? ['frosted', 'matte'] : a.surface === 'partition' ? ['matte', 'frosted', 'lcd'] : ['matte', 'frosted'];
      if (a.priority === 'day') notes.push('Lustro weneckie nie zapewnia tej samej prywatności wieczorem. Alternatywy matowe wymagają rezygnacji z wyraźnego widoku przez szkło.');
    }
  } else if (a.goal === 'safety') {
    ids = a.priority === 'intrusion' ? ['intrusion', 'safety'] : a.priority === 'surface' ? ['protective'] : ['balcony','roof'].includes(a.surface) ? ['safety'] : ['safety', 'haccp'];
    title = a.priority === 'intrusion' ? 'Dobierz zabezpieczenie całego przeszklenia' : a.priority === 'surface' ? 'Ochrona powierzchni w określonych warunkach' : 'Ograniczenie skutków rozbicia szkła';
    if (a.surface === 'roof') notes.push('Przy przeszkleniu nad głową potrzebna jest ocena całej konstrukcji. Folia nie zastępuje wymaganego rodzaju szkła ani naprawy uszkodzeń.');
  } else if (a.goal === 'uv') {
    title = 'Ochrona UV z zachowaniem jasnego szkła';
    if (a.surface === 'roof') notes.push('Dla szyby dachowej najpierw potwierdzamy dopuszczenie konkretnego materiału. Standardowych wariantów do przeszkleń pionowych nie dobieramy automatycznie.');
    else ids = ['uv'];
  }
  else if (a.goal === 'cold') {
    title = a.priority === 'draft' ? 'Najpierw sprawdź szczelność okna' : 'Sprawdź sens termoizolacji dla Twojej szyby';
    if (a.priority === 'draft' || a.surface === 'partition') notes.push('Folia nie uszczelnia stolarki i nie usuwa przeciągu. Źródło dyskomfortu trzeba rozpoznać przed wyborem materiału.');
    else if (a.surface === 'roof') notes.push('Przed wskazaniem folii termoizolacyjnej sprawdzimy dopuszczenie materiału do szyby dachowej, parametry pakietu i źródło dyskomfortu.');
    else { ids = ['lowe']; notes.push('Przy nowoczesnym pakiecie korzyść może być inna niż przy starszej szybie. Wymagamy danych okna przed rekomendacją materiału.'); }
  }
  if (a.goal !== 'renovation') {
    checks = ['Zdjęcia całej powierzchni i detali przy krawędziach.', 'Wymiary każdej tafli, liczba sztuk i miejscowość.', a.surface === 'polycarbonate' ? 'Rodzaj tworzywa, mocowania i dostęp do świetlika.' : a.surface === 'balcony' ? 'Mocowania balustrady, wysokość osłony, piętro i dostęp.' : outside ? 'Oznaczenia szyby, ekspozycja, piętro i dostęp od zewnątrz.' : 'Rodzaj podłoża i warunki po obu stronach przegrody.'];
    if (finderConditions(a).glass && a.glass === 'unknown') notes.push('Rodzaj szyby do ustalenia. Nie musisz go zgadywać — dołącz zdjęcie oznaczeń lub dokumentację okna.');
  }
  return { complete: true, title, solutions: [...new Set(ids)].map(id => finderSolutions.find(s => s.id === id)).filter(Boolean).map(s => ({...s, ...(s.variants ? {variants: getFinderVariants(s, a)} : {})})), notes: [...new Set(notes)], checks };
}

export function describeFinderAnswers(input) {
  const a = sanitizeFinderAnswers(input);
  const fields = finderConditions(a);
  return [
    ['Cel', a.goal === 'other' ? `Inny cel: ${a.otherGoal.trim()}` : finderGoals.find(x => x.id === a.goal)?.short],
    ['Powierzchnia', a.surface === 'other' ? `Inna powierzchnia: ${a.otherSurface.trim()}` : finderSurfaces(a.goal).find(x => x.id === a.surface)?.label],
    ['Priorytet', a.priority === 'other' ? `Inny efekt: ${a.otherPriority.trim()}` : finderPrioritiesFor(a.goal, a.surface).find(x => x.id === a.priority)?.label],
    ...(a.goal === 'renovation' ? [['Dekor poglądowy', wrapDecors.find(x => x.id === a.decor)?.label], ...(needsWrapSide(a) ? [['Strona oklejenia', wrapSideOptions.find(x => x.id === a.side)?.label || 'Do ustalenia']] : [])] : []),
    ...(a.goal === 'renovation' ? [['Stan', a.condition === 'other' ? a.otherCondition.trim() : conditionOptions.find(x => x.id === a.condition)?.label]] : [...(fields.glass ? [['Szyba', glassOptions.find(x => x.id === a.glass)?.label]] : []), ...(fields.fixedAccess ? [['Dostęp do świetlika', 'Wyłącznie od zewnątrz']] : fields.access ? [['Dostęp', accessOptions.find(x => x.id === a.access)?.label]] : [])]),
    ['Dodatkowe warunki', a.details.trim()],
  ].filter(([, value]) => value);
}

export function getFinderVariants(solution, input) {
  const {surface, access, glass} = sanitizeFinderAnswers(input);
  return (solution?.variants || []).filter(v => {
    if (v.excludedGlass?.includes(glass)) return false;
    const mounting = v.mounting?.toLocaleLowerCase('pl') || '';
    if (['balcony','roof'].includes(surface)) return mounting.includes('zew');
    if (surface === 'partition') return mounting.includes('wew');
    if (solution?.id === 'mirror' && surface === 'window' && access === 'no') return mounting.includes('wew');
    if (solution?.id === 'mirror' && surface === 'window' && access === 'yes') return mounting.includes('zew');
    return true;
  });
}

export function getFinderVariant(solution, input, requested) {
  const variants = getFinderVariants(solution, input);
  const explicit = variants.find(v => v.name === requested);
  if (explicit) return explicit;
  if (solution?.id === 'solar-reflective') {
    const priority = sanitizeFinderAnswers(input).priority;
    return variants.find(v => v.name === 'Silver ' + (priority === 'strong' ? '20' : priority === 'light' ? '50' : '40') + ' Comfort');
  }
  if (solution?.id === 'mirror') return variants.find(v => v.name === 'Mirror 40 zewnętrzna') || variants.find(v => v.name === 'R30 Mirror wewnętrzna') || variants[0];
  if (solution?.id === 'internal') return variants.find(v => v.name === (sanitizeFinderAnswers(input).priority === 'strong' ? 'R20 Silver' : sanitizeFinderAnswers(input).priority === 'light' ? 'Invisible Comfort' : 'R30 Silver')) || variants[0];
  if (solution?.id === 'neutral') return variants.find(v => v.name === (sanitizeFinderAnswers(input).priority === 'strong' ? 'Neutral 25' : 'Neutral 40')) || variants[0];
  if (solution?.id === 'polycarbonate') return variants.find(v => v.name === (sanitizeFinderAnswers(input).priority === 'strong' ? 'Polycarbon Silver' : 'Polycarbon White')) || variants[0];
  return variants[0];
}

// Deliberately illustrative contrast levels, not an optical calculation from VLT.
export function getFinderTint(light) {
  if (!Number.isFinite(light)) return null;
  const interpolate = points => {
    const value = Math.max(0, Math.min(100, light));
    for (let i = 1; i < points.length; i++) if (value <= points[i][0]) {
      const [x0,y0] = points[i-1], [x1,y1] = points[i];
      return Number((y0 + (value-x0) / (x1-x0) * (y1-y0)).toFixed(4));
    }
    return points[points.length-1][1];
  };
  return {darkness: interpolate([[0,.8],[16,.58],[40,.32],[55,.12],[100,0]]), reflection: interpolate([[0,.94],[16,.86],[40,.65],[55,.42],[100,.1]])};
}

export function finderShareHash(input, activeId, variants = {}) {
  const a = sanitizeFinderAnswers(input);
  const params = new URLSearchParams();
  Object.entries(a).forEach(([key, value]) => { if (value) params.set(key, value); });
  params.set('result', '1');
  const solution = getFinderResult(a).solutions.find(s => s.id === activeId);
  if (solution) params.set('film', solution.id);
  getFinderResult(a).solutions.forEach(s => {
    const variant = getFinderVariant(s, a, variants[s.id]);
    if (variant) params.set('shade-' + s.id, variant.name);
  });
  return `#${params.toString()}`;
}

export function buildFinderMessage(input, selectedIds, variants = {}) {
  const result = getFinderResult(input);
  const selected = Array.isArray(selectedIds) ? result.solutions.filter(x => selectedIds.includes(x.id)) : result.solutions;
  return ['Dobór Lumera — moje potrzeby:', ...describeFinderAnswers(input).map(([label, value]) => `${label}: ${value}`), selected.length ? `Chcę omówić: ${selected.map(s => { const v = getFinderVariant(s, input, variants[s.id]); return v ? s.name + ' — ' + v.name : s.name; }).join(', ')}.` : 'Proszę o indywidualną ocenę rozwiązania.', 'Dobór materiału wymaga potwierdzenia podłoża i warunków montażu.', '', 'Dodatkowe informacje:'].join('\n');
}

export function finderContactTopic(input, selectedIds) {
  const a = sanitizeFinderAnswers(input);
  const result = getFinderResult(a);
  const selected = result.solutions.find(x => selectedIds?.includes(x.id)) || result.solutions[0];
  if (selected) return selected.topic;
  return ({heat:'solar-films',glare:'solar-films',privacy:'matte',renovation:'architectural-wraps',safety:'security',uv:'anti-uv',cold:'thermal'})[a.goal] || 'wybierz';
}
