import Link from 'next/link';
import styles from './SpecialFilmContent.module.css';
import UvSpectrumComparison from './UvSpectrumComparison';

function GlassDiagram({ bird }) {
  return (
    <figure className={styles.diagram}>
      <svg viewBox="0 0 720 230" role="img" aria-label={bird ? 'Porównanie szkła bez oznaczeń i szkła z regularnym wzorem' : 'Schemat wymiany ciepła przez szybę z warstwą Low-E'}>
        <defs>
          <pattern id="bird-marks" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="3" fill="#255b4c" /></pattern>
        </defs>
        <rect x="12" y="12" width="336" height="202" rx="18" fill="#edf3ef" />
        <rect x="372" y="12" width="336" height="202" rx="18" fill="#f5eedf" />
        {bird ? <>
          {[110, 470].map((x) => <g key={x}><path d={`M${x} 173V74m0 32l-26-22m26 44l24-23`} stroke="#7c9a80" strokeWidth="8" fill="none" /><circle cx={x} cy="74" r="28" fill="#c2d5bf" /></g>)}
          <rect x="74" y="56" width="214" height="130" rx="4" fill="#d0e4e9" fillOpacity=".5" stroke="#638083" strokeWidth="3" />
          <rect x="434" y="56" width="214" height="130" rx="4" fill="url(#bird-marks)" stroke="#638083" strokeWidth="3" />
          <text x="180" y="39" textAnchor="middle">Odbicie / pozorny przelot</text>
          <text x="540" y="39" textAnchor="middle">Regularne oznaczenie</text>
        </> : <>
          <text x="175" y="44" textAnchor="middle">Pomieszczenie</text><text x="545" y="44" textAnchor="middle">Na zewnątrz</text>
          <rect x="340" y="35" width="40" height="150" fill="#c2dce0" stroke="#77999e" strokeWidth="2" />
          <path d="M337 35V185" stroke="#bb8e36" strokeWidth="6" />
          <path d="M80 100H309l-16-10m16 10l-16 10M307 100q-38 60-95 60H100l16-10m-16 10l16 10" fill="none" stroke="#b37d32" strokeWidth="5" strokeLinecap="round" />
          <path d="M390 115H636l-16-10m16 10l-16 10" fill="none" stroke="#93a4a5" strokeWidth="3" strokeDasharray="7 7" />
          <text x="359" y="208" textAnchor="middle">Warstwa Low-E na szybie</text>
        </>}
      </svg>
      <figcaption>{bird ? 'Schemat ideowy. Nie przedstawia przebadanego produktu ani docelowego rozstawu wzoru.' : 'Schemat ideowy wymiany ciepła przez promieniowanie. Nie pokazuje wyniku pomiaru ani procentu oszczędności.'}</figcaption>
    </figure>
  );
}

export default function SpecialFilmContent({ film, closing = false }) {
  const contactHref = `/kontakt?temat=${film.id}`;
  if (closing) return (
    <section className={`${styles.section} ${styles.quote}`} id="wycena">
      <div><span className={styles.eyebrow}>Twój następny krok</span><h2>{film.cta}</h2><p>Przygotuj te informacje, a łatwiej określimy zakres prac i dobór materiału.</p><ul>{film.preparation.map((item) => <li key={item}>{item}</li>)}</ul></div>
      <div className={styles.quoteAction}><Link className={styles.button} href={contactHref}>Przejdź do zapytania <span aria-hidden="true">→</span></Link><p>Formularz otworzy się z wybraną usługą.</p><p>Dobór materiału, przygotowanie szyby, montaż i ewentualne prace dodatkowe określamy w wycenie. Gwarancję i jej warunki potwierdzamy dla wybranego rozwiązania.</p></div>
      <p className={styles.local}>Montaż Lumera: <Link href="/montaz-folii-okiennych-krakow">Kraków i okolice</Link> oraz <Link href="/montaz-folii-okiennych-katowice">Katowice i okolice</Link>. Możliwość realizacji potwierdzamy po ocenie zakresu.</p>
    </section>
  );
  return <div className={styles.content}>
    <nav className={styles.nav} aria-label="Na tej podstronie"><a href="#zastosowanie">Czy to dla mnie?</a><a href="#porownanie">Porównaj rozwiązania</a><a href="#pytania">Pytania i odpowiedzi</a><a href="#wycena">Przygotuj zapytanie →</a></nav>
    <section className={styles.section} id="zastosowanie"><span className={styles.eyebrow}>Zacznij od swojej sytuacji</span><h2>{film.contentTitle}</h2><div className={styles.cards}>{film.seoContentBlocks.map((block, index) => <article key={block.title}><span className={styles.number}>0{index + 1}</span><h3>{block.title}</h3><p>{block.text}</p></article>)}</div>
      {['thermal', 'anti-collision'].includes(film.id) && <GlassDiagram bird={film.id === 'anti-collision'} />}
    </section>
    <section className={`${styles.section} ${styles.comparison}`} id="porownanie">{film.spectrum && <UvSpectrumComparison spectrum={film.spectrum} />}<span className={styles.eyebrow}>Różnice, które mają znaczenie</span><h2>{film.tableTitle}</h2><div className={styles.tableScroll} role="region" aria-label={film.tableTitle} tabIndex="0"><table><thead><tr>{film.tableHeadings.map((heading) => <th scope="col" key={heading}>{heading}</th>)}</tr></thead><tbody>{film.tableRows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={index}>{cell}</th> : <td key={index}>{cell}</td>)}</tr>)}</tbody></table></div>{film.tableNote && <p className={styles.note}>{film.tableNote}</p>}</section>
    <section className={styles.section}><span className={styles.eyebrow}>Parametry bez skrótów myślowych</span><h2>{film.effectTitle}</h2><p className={styles.lead}>{film.effectLead}</p><dl className={styles.specs}>{film.effectDetails.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>
    <section className={styles.section}><h2>{film.choiceTitle}</h2><div className={styles.cards}>{film.choiceCards.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>{film.id === 'anti-uv' && <Link className={styles.textLink} href="/folie-przeciwsloneczne">Porównaj także folie przeciwsłoneczne →</Link>}{film.id === 'anti-eavesdropping' && <Link className={styles.textLink} href="/folie-matowe">Jeśli chodzi o ograniczenie wglądu, poznaj folie matowe →</Link>}</section>
  </div>;
}
