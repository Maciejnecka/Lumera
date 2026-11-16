import { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import DecorScene from '../FilmFinder/DecorScene';
import { wrapDecors } from '../../data/filmFinderData';
import { buildFinderMessage, finderShareHash } from '../../lib/filmFinder';
import { doorWrappingPageData as page } from '../../data/doorWrappingPageData';
import s from './DoorWrappingPage.module.css';

const contact = '/kontakt?temat=architectural-wraps';
const project = '/realizacje/oklejanie-drzwi-laminatem-architektonicznym-krakow';
const imageRoot = '/img/realizacje/oklejanie-drzwi-laminatem-architektonicznym-krakow';
const scopes = ['Skrzydło i futryna', 'Tylko skrzydło drzwi', 'Tylko futryna / ościeżnica'];
const breadcrumbs = [{ label: 'Strona główna', href: '/' }, { label: 'Okleiny architektoniczne', href: '/okleiny-i-laminaty-architektoniczne' }, { label: page.title, href: page.path }];

function DoorDecorWorkshop() {
  const [decor, setDecor] = useState('oak');
  const [side, setSide] = useState('inside');
  const [scope, setScope] = useState(scopes[0]);
  const selected = wrapDecors.find((item) => item.id === decor);
  const answers = { goal: 'renovation', surface: 'doors', priority: selected.family, decor, side, condition: 'unknown', details: `Zakres oklejania: ${scope}.` };
  const quote = `${contact}&dobor=${encodeURIComponent(buildFinderMessage(answers, ['wrap']))}`;
  return <section className={`${s.section} ${s.workshop}`} id="pracownia" aria-labelledby="decor-title">
    <div className={s.workshopHeading}><span className={s.eyebrow}>Pracownia dekorów Lumera</span><h2 id="decor-title">Przymierz nowy wygląd swoich drzwi.</h2><p>Wybierz kierunek wykończenia. Korzystasz z tej samej pracowni co w naszym doborze folii i oklein — tutaj od razu na drzwiach i futrynie.</p></div>
    <div className={s.workbench}>
      <div className={s.controls}>
        <fieldset><legend>1. Którą stronę chcesz okleić?</legend><div className={s.sideButtons}>{[['inside', 'Od wewnątrz'], ['outside', 'Od zewnątrz'], ['both', 'Obustronnie']].map(([id, label]) => <button type="button" key={id} aria-pressed={side === id} onClick={() => setSide(id)}>{label}</button>)}</div></fieldset>
        <fieldset><legend>2. Wybierz kierunek dekoru</legend><div className={s.swatches}>{wrapDecors.map((item) => <button type="button" key={item.id} aria-pressed={decor === item.id} onClick={() => setDecor(item.id)}><span className={s.swatch} style={{ background: item.color }} aria-hidden="true"/>{item.label}</button>)}</div></fieldset>
        <label className={s.scope} htmlFor="door-scope">3. Co chcesz odnowić?<select id="door-scope" value={scope} onChange={(event) => setScope(event.target.value)}>{scopes.map((item) => <option key={item}>{item}</option>)}</select></label>
      </div>
      <div className={s.preview}><DecorScene surface="doors" decor={decor} side={side}/><div className={s.chosen} aria-live="polite"><span>Twój kierunek</span><strong>{selected.label} · {side === 'both' ? 'obustronnie' : side === 'inside' ? 'od wewnątrz' : 'od zewnątrz'}</strong><p>{scope}. Ilustracja pokazuje wspólny dekor skrzydła i futryny; rzeczywisty zakres wyznacza Twój wybór powyżej.</p></div></div>
    </div>
    <div className={s.workshopFooter}><p>{['outside', 'both'].includes(side) ? 'Przy oklejaniu od zewnątrz potrzebny jest materiał do warunków zewnętrznych. Dostępność dekoru i możliwość aplikacji potwierdzamy osobno.' : 'Podgląd pokazuje kierunek stylistyczny. Nie jest próbnikiem konkretnej serii. Kolor, fakturę, połysk i zgodność z podłożem potwierdzimy przed montażem.'}</p><div className={s.actions}><Link className={s.primary} href={quote}>Wyceń drzwi z tym wyborem <span aria-hidden="true">→</span></Link><Link className={s.textLink} href={`/porownanie-folii-okiennych${finderShareHash(answers, 'wrap')}`}>Kontynuuj w pełnym konfiguratorze</Link></div></div>
  </section>;
}

export default function DoorWrappingPage() {
  return <main id="main-content" className={s.page}>
    <div className={s.container}>
      <Breadcrumbs items={breadcrumbs}/>
      <section className={s.hero}>
        <div><span className={s.eyebrow}>Okleiny architektoniczne · dobór i montaż</span><h1>Oklejanie drzwi i futryn<span>Nowy wygląd zaczyna się od wejścia.</span></h1><p className={s.lead}>{page.lead}</p><div className={s.actions}><a className={s.primary} href="#pracownia">Przymierz dekor na drzwiach <span aria-hidden="true">↓</span></a><Link className={s.secondary} href={contact}>Wyślij zdjęcia do wyceny</Link></div><p className={s.area}>Kraków i okolice · Katowice i okolice<br/>Większe realizacje poza regionem — po ustaleniu zakresu.</p></div>
        <figure className={s.heroImage}><img src={`${imageRoot}/03-drzwi-po-oklejeniu-laminatem-krakow.webp`} width="1200" height="1600" alt="Drzwi wejściowe po oklejeniu drewnopodobnym laminatem architektonicznym — realizacja Lumera w Krakowie" fetchPriority="high"/><figcaption><span>To nasza realizacja</span><Link href={project}>Zobacz te drzwi przed metamorfozą →</Link></figcaption></figure>
      </section>
      <nav className={s.nav} aria-label="Na stronie oklejania drzwi"><a href="#przed-i-po">Przed i po</a><a href="#pracownia">Wybierz dekor</a><a href="#zakres">Co oklejamy</a><a href="#cena">Cena i wycena</a><a href="#obszar">Gdzie montujemy</a><a href="#pytania">Pytania</a></nav>
      <section className={s.section} aria-labelledby="benefits-title"><span className={s.eyebrow}>Zachowaj to, co sprawne</span><h2 id="benefits-title">Zmień charakter drzwi. Dopasuj je do swojego wnętrza.</h2><div className={s.threeCards}>{page.benefits.map(([title, text], index) => <article className={s.card} key={title}><span className={s.step}>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className={`${s.section} ${s.caseStudy}`} id="przed-i-po"><div><span className={s.eyebrow}>Realizacja Lumera · Kraków</span><h2>Te same drzwi. Zupełnie inny odbiór wnętrza.</h2><p>Białe skrzydło odcinało się od drewnianej zabudowy przedpokoju. Oklejenie drzwi laminatem o drewnopodobnym wykończeniu połączyło wejście z otoczeniem. Zobacz rzeczywisty efekt przed i po.</p><Link className={s.textLink} href={project}>Poznaj zakres tej realizacji →</Link></div><figure><img src={`${imageRoot}/cover-hq-v2.webp`} width="1600" height="1200" alt="Przed i po: białe drzwi wejściowe po oklejeniu zyskały drewnopodobne wykończenie" loading="lazy"/><figcaption>Przykład oklejenia skrzydła drzwiowego. Zakres futryny ustalamy dla każdego zlecenia osobno.</figcaption></figure></section>
      <DoorDecorWorkshop/>
      <section className={s.section} id="zakres"><span className={s.eyebrow}>Skrzydło, futryna i detale</span><h2>Jakie drzwi i ościeżnice możemy odnowić?</h2><p>Najpierw sprawdzamy podłoże. Okleina zmienia wykończenie, ale nie zastępuje naprawy niesprawnej konstrukcji.</p><div className={s.twoCards}>{page.surfaces.map(([title, text]) => <article className={s.card} key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className={`${s.section} ${s.expertise}`}><span className={s.eyebrow}>Materiał dobrany do zadania</span><h2>{page.sections[0].heading}</h2><p>{page.sections[0].text}</p><Link className={s.textLink} href="/okleiny-i-laminaty-architektoniczne">Poznaj również oklejanie mebli, ram i zabudów →</Link></section>
      <section className={s.section}><h2>{page.sections[1].heading}</h2><p className={s.readable}>{page.sections[1].text}</p><div className={s.detailStrip}><span>Krawędzie</span><span>Przylgi i profile</span><span>Okolice klamki i zamka</span><span>Łączenia i kierunek wzoru</span></div></section>
      <section className={`${s.section} ${s.process}`}><span className={s.eyebrow}>Od pomysłu do montażu</span><h2>Nie musisz znać się na okleinach. Zacznij od zdjęcia.</h2><ol>{page.process.map(([title, text], index) => <li key={title}><span className={s.step}>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></section>
      <section className={s.section} id="cena"><span className={s.eyebrow}>Wycena konkretnego zakresu</span><h2>Ile kosztuje oklejanie drzwi i futryn?</h2><p className={s.readable}>Jedno skrzydło, obie strony czy cały komplet z ościeżnicą? To różne zlecenia. Dlatego cenę ustalamy na podstawie zdjęć i zakresu, zamiast sprowadzać pracę do samego metrażu.</p><div className={s.twoCards}>{page.pricing.map(([title, text]) => <article className={s.card} key={title}><h3>{title}</h3><p>{text}</p></article>)}</div><div className={s.priceAction}><p>Przygotuj zdjęcie całych drzwi i futryny, zbliżenia krawędzi oraz uszkodzeń. Dodaj wymiary, liczbę kompletów, miejscowość i informację o stronie montażu.</p><Link className={s.primary} href={contact}>Zapytaj o cenę swojego kompletu →</Link><Link className={s.textLink} href="/cennik">Zobacz orientacyjny cennik usług</Link></div></section>
      <section className={s.section}><h2>{page.sections[2].heading}</h2><p className={s.readable}>{page.sections[2].text}</p></section>
      <section className={s.section} id="obszar"><span className={s.eyebrow}>Lokalnie i przy większych projektach</span><h2>Oklejanie drzwi w Krakowie, Katowicach i okolicach</h2><div className={s.threeCards}>{page.locations.map((item) => <article className={s.card} key={item.title}><h3>{item.title}</h3><p>{item.text}</p><Link className={s.textLink} href={item.href}>{item.label} →</Link></article>)}</div></section>
      <section className={s.section} id="pytania"><span className={s.eyebrow}>Pytania przed decyzją</span><h2>Co warto wiedzieć o oklejaniu drzwi i futryn?</h2><div className={s.faq}>{page.faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></section>
      <section className={`${s.section} ${s.finalCta}`} id="wycena"><span className={s.eyebrow}>Twoje drzwi. Nowy kierunek.</span><h2>Masz zdjęcie? Masz już punkt wyjścia.</h2><p>Pokaż nam drzwi i futrynę. Opisz, co chcesz zmienić — dobierzemy materiał, ocenimy przygotowanie i ustalimy zakres wyceny.</p><div className={s.actions}><Link className={s.primary} href={contact}>Przejdź do wyceny oklejania →</Link><a className={s.secondary} href="tel:+48605505714">Porozmawiaj: 605 505 714</a></div><p className={s.small}>Wybór z pracowni przeniesiesz przyciskiem „Wyceń drzwi z tym wyborem” przy podglądzie.</p></section>
    </div>
  </main>;
}
