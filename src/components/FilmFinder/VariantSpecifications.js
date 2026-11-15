import React from 'react';
import { finderVariantFields } from '../../data/filmFinderData';
import s from './FilmFinder.module.css';

export default function VariantSpecifications({ solution, variants = solution.variants || [], compact = false }) {
  return <div className={s.specifications}>
    {variants.map(variant => <article className={s.specificationCard} key={variant.name} data-model={variant.name}>
      <h4>{variant.name}</h4>
      <dl className={s.specificationGrid}>{finderVariantFields.filter(([key]) => variant[key] !== undefined && variant[key] !== null && variant[key] !== '').filter(([key]) => !compact || ['light','solar','uv','ir','mounting','securityClass','power','materialWarranty'].includes(key)).map(([key,label,unit]) => <div key={key}><dt>{solution.id === 'lcd' && key === 'light' ? 'Światło — tryb przejrzysty' : solution.id === 'lcd' && key === 'thickness' ? 'Grubość bez warstw ochronnych' : label}</dt><dd>{variant[key]}{unit}</dd></div>)}</dl>
    </article>)}
    {compact && variants.some(v => v.materialWarranty) && <p className={s.specificationNote}>*Gwarancja materiału według warunków producenta; zakres gwarancji montażu ustalamy osobno.</p>}
    {!compact && <p className={s.specificationNote}>Dane referencyjne konkretnego materiału. Brak parametru oznacza brak potwierdzonej wartości — nie wartość zerową. Redukcja UV, IR i energii słonecznej to odrębne wielkości; nie określają procentowego spadku temperatury pokoju. *Gwarancja materiału podlega warunkom producenta i nie jest gwarancją usługi montażu. Klasy ochrony wymagają dokumentacji układu szkło–folia–mocowanie. Dostępność i zgodność materiału potwierdzamy przy wycenie.</p>}
  </div>;
}
