import React, { useId } from 'react';
import { wrapDecors, wrapSurfaces } from '../../data/filmFinderData';
import styles from './DecorScene.module.css';

// Original SVG scenes and textures: style directions, never supplier swatches.
export default function DecorScene({ surface = '', decor = 'oak', side = '' }) {
  const uid = useId().replace(/:/g, '');
  const id = key => `${uid}-${key}`;
  const selected = wrapDecors.find(x => x.id === decor) || wrapDecors[0];
  const exterior = ['doors', 'frames'].includes(surface) && side === 'outside';
  const fill = `url(#${id('finish')})`;
  const label = wrapSurfaces.find(x => x.id === surface)?.label;
  if (side === 'both') return <div className={styles.both} data-side="both" role="group" aria-label="Podgląd oklejenia obu stron">{[['inside', 'Od wewnątrz'], ['outside', 'Od zewnątrz']].map(([view, title]) => <figure key={view}><DecorScene surface={surface} decor={decor} side={view}/><figcaption>{title}</figcaption></figure>)}</div>;
  return <svg viewBox="0 0 760 500" role="img" data-decor={selected.id} data-surface={surface || 'overview'} data-side={side || 'unspecified'} aria-label={`Pracownia dekorów: ${label || 'wybierz powierzchnię'}, ${selected.label}${exterior ? ', strona zewnętrzna' : side === 'inside' ? ', strona wewnętrzna' : ''}. Ilustracja poglądowa.`}>
    <defs>
      <linearGradient id={id('wall')} x2="1" y2="1"><stop stopColor={exterior ? '#e5e7e1' : '#f3eee3'}/><stop offset="1" stopColor={exterior ? '#bccac5' : '#d8d6c8'}/></linearGradient>
      <linearGradient id={id('sky')} x2="0" y2="1"><stop stopColor="#a9cdc9"/><stop offset="1" stopColor="#e9ebd8"/></linearGradient>
      <linearGradient id={id('sheen')} x2="1" y2="1"><stop stopColor="#fff" stopOpacity=".23"/><stop offset=".5" stopColor="#fff" stopOpacity="0"/><stop offset="1" stopColor="#243f36" stopOpacity=".12"/></linearGradient>
      <pattern id={id('finish')} width={selected.family === 'stone' ? 250 : 86} height="320" patternUnits="userSpaceOnUse">
        <rect width="250" height="320" fill={selected.color}/>
        {selected.family === 'wood' && <g fill="none" stroke={selected.detail}><path d="M8-10Q48 75 18 160T22 330M40-10Q10 85 48 180T50 330M73-10Q44 140 77 230T70 330" strokeWidth="2" opacity=".5"/><path d="M31-10Q67 65 34 180T36 330" strokeWidth="5" opacity=".25"/><ellipse cx="54" cy="142" rx="8" ry="33" opacity=".45"/></g>}
        {selected.family === 'stone' && <g fill="none" stroke={selected.detail} opacity={selected.id === 'marble' ? '.7' : '.28'}><path d="M-15 17L74 54 104 125 259 182M74 54L151 23 239 37M104 125L79 219 135 320" strokeWidth="2"/><path d="M-12 25L69 65 93 137 252 191M93 137L70 225 125 320" strokeWidth=".8"/></g>}
        {selected.family === 'metal' && <g stroke={selected.detail} opacity=".3">{Array.from({length: 32}, (_, i) => <path key={i} d={`M0 ${i * 10}H250`} strokeWidth={i % 3 ? '.5' : '1.5'}/>)}</g>}
      </pattern>
    </defs>
    <rect width="760" height="500" fill={`url(#${id('wall')})`}/>
    {exterior ? <g stroke="#aebdb5" fill="none"><path d="M0 55H760M0 155H760M0 255H760M0 355H760M72 55V155M663 155V255M68 255V355"/><path d="M0 416H760V500H0Z" fill="#adb9ae"/><path d="M0 464H760M110 416L54 500M355 416L345 500M620 416L676 500"/></g> : <g><path d="M0 420L760 390V500H0Z" fill="#c6c0ac"/><path d="M0 472L760 426M170 500L293 408M600 500L532 400" fill="none" stroke="#ada995"/><path d="M0 415L760 386" stroke="#eeecdf" strokeWidth="7"/></g>}
    {surface === 'doors' ? <g data-object="doors">
      <ellipse cx="377" cy="446" rx="180" ry="12" fill="#344d3c" opacity=".15"/>
      <rect x="213" y="53" width="318" height="391" fill="#6b776a" rx="3"/>
      <path d="M222 444V62H522V444H501V85H243V444Z" fill={fill} data-finish="door-frame"/>
      <rect x="249" y="91" width="246" height="349" fill={fill} data-finish="door-leaf"/>
      <rect x="249" y="91" width="246" height="349" fill={`url(#${id('sheen')})`}/>
      <path d="M265 107H479V422H265Z" stroke={selected.detail} strokeOpacity=".35" fill="none"/>
      <path d="M478 246H446" stroke="#49594e" strokeWidth="7" strokeLinecap="round"/><circle cx="479" cy="246" r="7" fill="#536559"/><rect x="476" y="269" width="5" height="12" rx="2" fill="#43594b"/>
      {exterior ? <><rect x="559" y="181" width="47" height="31" rx="3" fill="#7a8a7f"/><path d="M570 196H594" stroke="#e8e9db" strokeWidth="3"/><rect x="165" y="101" width="14" height="64" rx="5" fill="#586e60"/><path d="M212 448H534L551 458H196Z" fill="#96a698"/></> : <><path d="M145 209H194M151 209V237M185 209V237" stroke="#a0957d" strokeWidth="5"/><rect x="559" y="242" width="10" height="14" rx="2" fill="#f8f6ec"/></>}
    </g> : surface === 'furniture' ? <g data-object="furniture">
      <ellipse cx="373" cy="440" rx="265" ry="19" fill="#3f5446" opacity=".15"/>
      <path d="M126 105L603 85 636 112V425L603 449 126 431Z" fill="#667362"/>
      <path d="M126 105L603 85V436L126 419Z" fill={fill} data-finish="furniture-fronts"/>
      <path d="M126 105L603 85V436L126 419Z" fill={`url(#${id('sheen')})`}/>
      <path d="M283 98V424M444 92V430M444 269L603 268M444 349L603 351" fill="none" stroke="#34483c" strokeOpacity=".6" strokeWidth="3"/>
      <path d="M264 235V286M303 235V286M425 235V286M503 292H547M503 373H547" fill="none" stroke="#43584a" strokeWidth="5" strokeLinecap="round"/>
      <path d="M142 433V451M589 442V458" stroke="#536454" strokeWidth="8"/>
      <path d="M151 80H227L214 105H163Z" fill="#eee6d6"/><path d="M175 78Q151 47 170 32Q190 46 184 74Q190 39 210 42Q217 67 187 81" fill="#80957b"/>
    </g> : surface === 'counter' ? <g data-object="reception">
      <text x="380" y="115" textAnchor="middle" fill="#7a8f7b" fontFamily="Georgia, serif" fontSize="26" letterSpacing="9">RECEPCJA</text>
      <ellipse cx="382" cy="434" rx="279" ry="22" fill="#3a5141" opacity=".15"/>
      <rect x="361" y="185" width="68" height="48" rx="4" fill="#586d60"/><path d="M395 231V247M374 247H414" fill="none" stroke="#586d60" strokeWidth="6"/>
      <path d="M131 271L592 239 642 272V427L592 447 131 421Z" fill="#6b7c6a"/>
      <path d="M131 271L592 239V447L131 421Z" fill={fill} data-finish="reception-front"/>
      <path d="M592 239L642 272V427L592 447Z" fill={fill} data-finish="reception-side"/>
      <path d="M592 239L642 272V427L592 447Z" fill="#193628" opacity=".16"/>
      <path d="M117 265L592 230 656 267 641 281 592 251 117 284Z" fill="#eeeadd"/>
      <path d="M145 407L578 430" stroke="#a8b2a0" strokeWidth="8"/>
      <path d="M177 325L544 309" stroke={selected.detail} opacity=".25"/>
      <rect x="185" y="237" width="34" height="24" rx="3" fill="#7c927e"/><path d="M202 237V198M202 218Q169 207 181 192Q201 199 202 210Q204 181 222 185Q228 205 205 216" fill="#668570" stroke="#668570" strokeWidth="3"/>
    </g> : surface === 'frames' ? <g data-object="window-frames">
      <rect x="133" y="67" width="494" height="329" fill="#8a9b8b"/>
      <rect x="152" y="86" width="456" height="290" fill={`url(#${id('sky')})`}/>
      {exterior ? <g><rect x="152" y="86" width="456" height="290" fill="#d9cfb7"/><path d="M166 308H579V376H166Z" fill="#b5ac91"/><rect x="212" y="277" width="260" height="70" rx="14" fill="#8fa58f"/><rect x="224" y="261" width="109" height="44" rx="11" fill="#9fb19a"/><rect x="346" y="261" width="112" height="44" rx="11" fill="#a8b89f"/><path d="M531 176V327M508 177H553L542 133H520Z" fill="#ede0b9" stroke="#8c8c71" strokeWidth="3"/></g> : <g><circle cx="534" cy="139" r="28" fill="#f2e4b7"/><path d="M152 284Q267 182 387 263T608 240V376H152Z" fill="#91ae93"/><path d="M177 376V243H257V376M454 376V220H535V376" fill="#d8d6bd"/><path d="M281 376V219M281 279Q240 254 256 232Q277 240 281 260Q281 216 304 207Q324 243 288 278Q323 254 338 275Q318 300 284 300" fill="#6f957b"/></g>}
      <path d="M144 78H616V385H144ZM165 99V364H367V99ZM393 99V364H595V99Z" fill={fill} fillRule="evenodd" data-finish="window-profiles"/>
      <path d="M166 100H366V363H166ZM394 100H594V363H394Z" fill="none" stroke="#344f41" strokeWidth="3"/>
      <path d="M174 340L360 110M405 330L583 108" stroke="#fff" strokeWidth="18" opacity=".13"/>
      <rect x={exterior ? '400' : '350'} y="222" width="6" height="35" rx="3" fill="#e7e7da"/>
      <path d="M126 389H635L654 404H111Z" fill={exterior ? '#9dad9f' : '#eae5d5'}/>
    </g> : <g data-object="overview" fill={fill}>
      <rect x="92" y="123" width="151" height="286" rx="3"/><path d="M104 409V136H231V409" fill="none" stroke="#566c59" strokeWidth="9"/><path d="M213 267H193" stroke="#46624f" strokeWidth="5"/>
      <rect x="278" y="172" width="184" height="237" rx="3"/><path d="M370 172V409" stroke="#536b57" strokeWidth="3"/>
      <path d="M493 286L658 272 691 299V412L493 400Z"/><path d="M486 285L659 267 698 296" fill="none" stroke="#ede8d9" strokeWidth="12"/>
      <text x="380" y="67" textAnchor="middle" fill="#5b775f" fontFamily="Georgia, serif" fontSize="24">Wybierz element. Przymierz dekor.</text>
    </g>}
    {['doors', 'frames'].includes(surface) ? exterior ? <g data-setting="exterior-planting">
      <path d="M0 465Q15 427 38 441Q45 406 72 416Q93 422 91 444Q120 421 143 458L155 478H0Z" fill="#66836f"/>
      <path d="M0 478H160" stroke="#8e9e8e" strokeWidth="8"/>
      <path d="M690 445V302M690 376L664 342M691 351L714 320" fill="none" stroke="#637d64" strokeWidth="6"/>
      <path d="M689 365Q640 366 647 333Q623 303 651 283Q644 252 678 253Q700 228 716 263Q748 257 741 291Q766 318 735 337Q733 366 689 365Z" fill="#7c987b"/>
      <ellipse cx="691" cy="450" rx="48" ry="8" fill="#879d85"/>
    </g> : <g data-setting="interior-potted-plant">
      <ellipse cx="664" cy="465" rx="43" ry="9" fill="#7d806c" opacity=".16"/>
      <path d="M662 421V312M662 372L639 345M663 352L688 323" fill="none" stroke="#6c8569" strokeWidth="4"/>
      <path d="M661 377Q611 371 621 339Q646 333 661 365Q645 322 662 297Q689 312 668 352Q680 312 706 316Q718 349 667 365Q702 353 715 374Q698 400 664 389Z" fill="#819274"/>
      <path d="M633 417H695L685 464H643Z" fill="#d6bea0"/>
      <path d="M637 423H691" stroke="#baa081" strokeWidth="3"/>
    </g> : surface === 'counter' && <g fill="#819274"><path d="M29 452Q26 403 46 390Q65 402 61 433Q62 388 82 384Q104 418 75 447Z"/><path d="M679 463Q668 415 688 401Q709 408 707 442Q717 401 735 415Q749 442 726 468Z"/></g>}
  </svg>;
}
