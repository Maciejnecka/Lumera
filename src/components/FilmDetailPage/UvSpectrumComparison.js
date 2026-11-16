import { useState } from 'react';
import styles from './UvSpectrumComparison.module.css';

export default function UvSpectrumComparison({ spectrum }) {
  const [selected, setSelected] = useState(1);
  const wavelength = spectrum.wavelengths[selected];
  return <section className={styles.panel} aria-labelledby="uv-spectrum-title">
    <span className={styles.eyebrow}>Zakres filtrowania ma znaczenie</span>
    <h2 id="uv-spectrum-title">{spectrum.title}</h2>
    <p>{spectrum.intro}</p>
    <fieldset className={styles.controls}>
      <legend>Wybierz długość fali</legend>
      <div>{spectrum.wavelengths.map((item, index) => <button type="button" key={item.nm} aria-pressed={selected === index} onClick={() => setSelected(index)}>{item.nm} <span>nm</span></button>)}</div>
    </fieldset>
    <div className={styles.context} aria-live="polite"><strong>{wavelength.nm} nm · {wavelength.label}</strong><p>{wavelength.description}</p></div>
    <div className={styles.scale}><span>Przepuszczanie przy {wavelength.nm} nm</span><span>mniej przechodzi ← → więcej przechodzi</span></div>
    <div className={styles.models} aria-live="polite">
      {spectrum.models.map((model) => {
        const [low, high, label] = model.readings[selected];
        return <article key={model.name} style={{ '--spectrum-color': model.color }}>
          <div className={styles.modelHeading}><h3>{model.name}</h3><strong>{label}</strong></div>
          <div className={styles.track} aria-hidden="true"><span style={{ width: `${(low + high) / 2}%` }} /></div>
          <p>{model.summary}</p>
        </article>;
      })}
    </div>
    <details className={styles.details}><summary>Porównaj wszystkie odczyty z wykresów</summary>
      <p>To przepuszczanie przy wybranych długościach fali, a nie procent ochrony UV. Na małym ekranie przesuń tabelę w bok.</p>
      <div className={styles.tableWrap} role="region" aria-label="Przybliżone przepuszczanie folii przy 380–500 nm" tabIndex={0}><table><caption>Orientacyjne odczyty — transmisja promieniowania</caption><thead><tr><th scope="col">Model</th>{spectrum.wavelengths.map((item) => <th scope="col" key={item.nm}>{item.nm} nm</th>)}</tr></thead><tbody>{spectrum.models.map((model) => <tr key={model.name}><th scope="row">{model.name}</th>{model.readings.map((reading, index) => <td key={spectrum.wavelengths[index].nm}>{reading[2]}</td>)}</tr>)}</tbody></table></div>
    </details>
    <p className={styles.note}>{spectrum.note}</p>
  </section>;
}
