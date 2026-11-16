import Link from 'next/link';
import s from './ServicePageParts.module.css';

export function ServicePageNavigation({ items }) {
  return <nav className={s.navigation} aria-label="Na tej stronie">{items.map(([href, label]) => <a key={href} href={href}>{label}</a>)}</nav>;
}

export function ServiceQuote({ topic, architectural = false }) {
  return <section className={s.quote} id="wycena">
    <div><span className={s.eyebrow}>Od wyboru do realizacji</span><h2>{architectural ? 'Pokaż nam powierzchnię. Zaplanujemy nowe wykończenie.' : 'Pokaż nam przeszklenie. Dobierzemy rozwiązanie.'}</h2><p>{architectural ? 'Przygotuj zdjęcia całości i detali, wymiary, liczbę elementów oraz miejscowość. Dopisz oczekiwany kierunek wykończenia.' : 'Przygotuj zdjęcia, wymiary i liczbę szyb oraz miejscowość. Dopisz, jaki efekt chcesz uzyskać i jaki jest dostęp do miejsca montażu.'}</p></div>
    <div className={s.action}><Link href={`/kontakt?temat=${encodeURIComponent(topic)}`}>Przejdź do formularza wyceny <span aria-hidden="true">→</span></Link><p>Temat usługi będzie już wybrany. Materiał, zgodność z podłożem i zakres prac potwierdzamy przed montażem.</p></div>
  </section>;
}
