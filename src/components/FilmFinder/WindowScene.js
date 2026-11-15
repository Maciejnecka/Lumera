import React, { useId } from 'react';
import { getFinderTint } from '../../lib/filmFinder';

// Original vector illustration. It explains optical effects, not measured appearance.
export default function WindowScene({ effect = 'clear', tone, light, variantName, night = false, outside = false, lcdOn = false, wrap = false, decor = 'wood', surface = '' }) {
  const uid = useId().replace(/:/g, '');
  const id = key => `${uid}-${key}`;
  const matte = ['matte', 'frosted', 'balcony'].includes(effect) || (effect === 'lcd' && !lcdOn);
  const reflective = effect === 'reflective' || effect === 'balanced';
  const muted = effect === 'neutral' || effect === 'selective';
  const tint = getFinderTint(light);
  const exterior = outside && !wrap;
  const isDoor = surface === 'doors';
  return (
    <svg data-view={exterior ? 'exterior' : 'interior'} data-variant={variantName} data-lighting={night ? 'evening' : 'day'} viewBox="0 0 760 500" role="img" aria-label={wrap ? 'Autorska ilustracja zmiany dekoru istniejącej powierzchni' : `Poglądowy efekt ${matte ? 'matowego' : reflective ? 'refleksyjnego' : 'przejrzystego'} szkła, ${night ? 'wieczorem' : 'w dzień'}, widok ${outside ? 'od zewnątrz' : 'od środka'}`}>
      <defs>
        <linearGradient id={id('wall')} x2="1" y2="1"><stop stopColor="#f3eee3"/><stop offset="1" stopColor="#d4d2c2"/></linearGradient>
        <linearGradient id={id('sky')} x2="0" y2="1"><stop stopColor={night ? '#162d40' : '#b9d8d2'}/><stop offset="1" stopColor={night ? '#4c6570' : '#eef0d4'}/></linearGradient>
        <linearGradient id={id('glass')} x2="1" y2="1"><stop stopColor="#f5ffff" stopOpacity=".64"/><stop offset=".5" stopColor="#d6ebe6" stopOpacity=".08"/><stop offset="1" stopColor="#fff" stopOpacity=".28"/></linearGradient>
        <linearGradient id={id('mirror')} x2="1" y2=".4"><stop stopColor="#b6d0cb"/><stop offset=".5" stopColor="#e3efea"/><stop offset="1" stopColor="#759b94"/></linearGradient>
        <linearGradient id={id('room')} x2="0" y2="1"><stop stopColor={night ? '#ffe6ae' : '#e4cfac'}/><stop offset="1" stopColor={night ? '#c6a16d' : '#afa891'}/></linearGradient>
        <radialGradient id={id('lamplight')}><stop stopColor="#fff3bd" stopOpacity=".66"/><stop offset="1" stopColor="#ffdc8c" stopOpacity="0"/></radialGradient>
        <radialGradient id={id('spill')}><stop stopColor="#f8da91" stopOpacity=".42"/><stop offset="1" stopColor="#f8da91" stopOpacity="0"/></radialGradient>
        <filter id={id('blur')}><feGaussianBlur stdDeviation="12"/></filter>
        <clipPath id={id('pane')}><rect x="164" y="72" width="439" height="309" rx="3"/></clipPath>
        <pattern id={id('wood')} width="80" height="360" patternUnits="userSpaceOnUse"><rect width="80" height="360" fill="#a87c51"/><path d="M12 0Q54 80 22 180T20 360M44 0Q8 150 57 230T58 360M70 0Q35 130 76 280" fill="none" stroke="#79542e" strokeWidth="2" opacity=".36"/><path d="M30 0Q70 130 37 240T36 360" fill="none" stroke="#d5b386" strokeWidth="4" opacity=".45"/></pattern>
        <pattern id={id('stone')} width="230" height="190" patternUnits="userSpaceOnUse"><rect width="230" height="190" fill="#b9b8ae"/><path d="M-30 20L78 62 103 104 250 161M75 60L116 26 185 14M104 103L75 190" fill="none" stroke="#e3e0d7" strokeWidth="3" opacity=".8"/></pattern>
        <linearGradient id={id('metal')}><stop stopColor="#858f89"/><stop offset=".45" stopColor="#e0e4db"/><stop offset="1" stopColor="#82948a"/></linearGradient>
      </defs>
      <rect width="760" height="500" fill={exterior ? night ? '#263d50' : '#d1d8d6' : `url(#${id('wall')})`}/>
      {exterior && <g data-scene="facade" stroke={night ? '#3c5363' : '#abb8b5'} strokeWidth="2"><path d="M0 29H760M0 155H144M623 155H760M0 281H144M623 281H760M90 29V155M681 155V281"/><path d="M0 400H760V500H0Z" fill={night ? '#182e3b' : '#adb9b5'}/><path d="M0 450H760M100 400L30 500M320 400L300 500M540 400L570 500"/></g>}
      {!exterior && <g data-scene="room-floor"><path d="M0 393L760 365V500H0Z" fill="#c8c1ab"/>
      <path d="M0 466L760 410M250 500L381 384M600 500L542 380" fill="none" stroke="#b5ae99" strokeWidth="1"/></g>}
      {wrap ? <>
        <ellipse cx="375" cy="422" rx="222" ry="23" fill="#7c7666" opacity=".19"/>
        <path d="M190 100L520 80 559 105V405L520 429 190 410Z" fill="#58645a"/>
        <path d="M190 100L520 80V429L190 410Z" fill={decor === 'solid' ? '#ece7dc' : `url(#${id(decor)})`}/>
        {isDoor ? <><path d="M212 120L498 103V402L212 386Z" fill="none" stroke="#655b49" strokeOpacity=".4" strokeWidth="3"/><rect x="452" y="245" width="28" height="6" rx="3" fill="#3b4741"/></> : <><path d="M355 90V419" stroke="#5b5748" strokeWidth="3" opacity=".7"/><rect x="336" y="235" width="5" height="62" rx="2" fill="#33423d"/><rect x="367" y="235" width="5" height="62" rx="2" fill="#33423d"/></>}
        <rect x="611" y="276" width="7" height="120" fill="#7c8576"/><path d="M615 320Q552 270 584 209Q619 232 615 290Q620 200 652 183Q681 242 620 308Q660 255 695 282Q677 327 615 343" fill="#5b7561"/><path d="M588 387H649L640 438H597Z" fill="#ddd1b8"/>
      </> : <>
        {exterior && night && <ellipse cx="384" cy="284" rx="327" ry="204" fill={`url(#${id('spill')})`}/>}
        <rect x="144" y="53" width="479" height="350" fill={exterior && night ? '#526771' : '#ede9db'}/>
        <g clipPath={`url(#${id('pane')})`}>
          <rect x="164" y="72" width="439" height="309" fill={`url(#${id(outside ? 'room' : 'sky')})`}/>
          <g filter={matte && effect !== 'balcony' ? `url(#${id('blur')})` : undefined}>
            {outside ? <>
              <path d="M168 310L603 296V381H168" fill={night ? '#c2a479' : '#aaa18a'}/>
              {night && <ellipse cx="505" cy="226" rx="154" ry="165" fill={`url(#${id('lamplight')})`}/>}
              <rect x="223" y="279" width="231" height="76" rx="17" fill={night ? '#82927a' : '#7a8d7c'}/><rect x="233" y="263" width="91" height="46" rx="12" fill={night ? '#a0aa88' : '#879a88'}/><rect x="335" y="263" width="108" height="46" rx="12" fill={night ? '#b2b696' : '#91a18a'}/>
              <circle cx="420" cy="198" r="20" fill={night ? '#5b6153' : '#596259'}/><path d="M389 264Q388 218 419 219Q451 222 455 273Z" fill="#596259"/>
              <path d="M502 189L513 337M475 187H540L524 130H491Z" fill={night ? '#fff1b8' : '#c4bdac'} stroke={night ? '#a49267' : '#82795f'} strokeWidth="3"/>
              {night && <><path d="M494 185L455 307H573L526 185Z" fill="#ffe7a1" opacity=".13"/><ellipse cx="513" cy="330" rx="78" ry="20" fill="#f6d88e" opacity=".25"/></>}
            </> : <>
              <circle cx="533" cy="124" r={night ? '20' : '28'} fill={night ? '#f6edc8' : '#f7e4ad'}/>
              <path d="M158 273Q281 180 394 265T650 218V389H158Z" fill={night ? '#395a56' : '#9bb39a'}/>
              <path d="M170 282H260V190H333V324H365V226H432V332H610V382H170Z" fill={night ? '#344a4e' : '#d9d4bb'}/>
              {[0,1,2].map(i => <g key={i} fill={night ? '#ddc589' : '#8fa8a0'}><rect x={275+i*17} y="207" width="9" height="17"/><rect x={275+i*17} y="240" width="9" height="17"/><rect x={275+i*17} y="273" width="9" height="17"/></g>)}
              <path d="M490 380V234M491 300Q432 278 454 241Q484 250 490 281Q473 212 502 198Q539 247 496 292Q535 249 555 281Q541 318 491 318" fill={night ? '#294a43' : '#6e9378'} stroke={night ? '#294a43' : '#6e9378'} strokeWidth="4"/>
            </>}
          </g>
          {reflective && !(night && outside) && <><rect x="164" y="72" width="439" height="309" fill={`url(#${id('mirror')})`} opacity={outside ? tint?.reflection ?? .77 : .08}/><path d="M173 270L427 73H507L164 339Z" fill="#f7fffb" opacity=".16"/></>}
          {reflective && night && outside && <rect x="164" y="72" width="439" height="309" fill="#9eb4c5" opacity=".035"/>}
          {tint && <rect data-layer="tint" x="164" y="72" width="439" height="309" fill={tone || '#142b30'} opacity={outside && !night ? tint.darkness * .4 : tint.darkness}/>}
          {muted && !tint && <rect x="164" y="72" width="439" height="309" fill={effect === 'neutral' ? '#5f776d' : '#c7d9cb'} opacity={effect === 'neutral' ? '.18' : '.09'}/>}
          {matte && <rect data-layer="matte" x="164" y={effect === 'balcony' ? '236' : '72'} width="439" height={effect === 'balcony' ? '145' : '309'} fill={tone || (exterior && night ? '#f6e2b9' : '#e8efea')} opacity=".88"/>}
          {effect === 'frosted' && [0,1,2,3,4,5].map(i => <path key={i} d={`M164 ${100+i*48}H603`} stroke="#fafcf5" strokeWidth="17" opacity=".68"/>)}
          {effect === 'birds' && Array.from({length:8},(_,i)=>Array.from({length:5},(_,j)=><circle key={`${i}-${j}`} cx={188+i*56} cy={98+j*63} r="3.5" fill="#f8fcf4"/>))}
          {effect === 'projection' && <><rect x="164" y="72" width="439" height="309" fill="#546d67" opacity=".88"/><path d="M274 286L369 166 459 286Z" fill="#c7dcc6"/><circle cx="470" cy="159" r="27" fill="#e7c995"/><path d="M255 320H521" stroke="#e2eadf" strokeWidth="3"/></>}
          {!matte && <rect x="164" y="72" width="439" height="309" fill={`url(#${id('glass')})`} opacity={exterior && night ? .12 : .5}/> }
          <path d="M164 381V72H603V381M383 72V381" fill="none" stroke={exterior && night ? '#283e48' : '#354d44'} strokeWidth="12"/>
          <rect x="360" y="217" width="6" height="40" rx="3" fill="#d6d6c5"/>
        </g>
        <path d="M144 391H623L651 410H126Z" fill={exterior && night ? '#77877e' : '#ebe7d7'}/>
        <path d="M144 403H623V412H144Z" fill={exterior && night ? '#435b61' : '#9ca695'}/>
        {exterior && night && <path data-scene="window-light-spill" d="M147 412H622L748 500H34Z" fill={`url(#${id('spill')})`}/>}
        {!outside ? <g data-scene="interior-furniture"><path d="M144 413L319 500H524L623 413Z" fill="#f6e7ba" opacity={night ? '.04' : '.19'}/>
        <path d="M64 289V417M64 346Q18 326 32 296Q62 300 64 329Q60 264 85 256Q107 290 70 340Q100 301 121 323Q109 354 66 364" fill="#67866c" stroke="#67866c" strokeWidth="4"/>
        <path d="M38 403H95L85 449H49Z" fill="#d7c7a8"/>
        <ellipse cx="668" cy="431" rx="58" ry="10" fill="#928f79" opacity=".2"/><path d="M629 365H704V422H629Z" fill="#bbab8d"/><path d="M620 365L667 344 716 365Z" fill="#d2c4a9"/><path d="M647 422V443M689 422V443" stroke="#797b68" strokeWidth="5"/></g> : <g data-scene="exterior-garden"><path d="M0 471Q28 396 63 432Q80 380 113 438Q139 413 158 478Z" fill={night ? '#29483f' : '#6b8979'}/><path d="M612 484Q627 430 653 452Q670 402 698 446Q729 411 760 464V500H612Z" fill={night ? '#203e38' : '#577a69'}/><path d="M22 486H152M620 492H760" stroke={night ? '#3c5656' : '#8a9b91'} strokeWidth="7"/></g>}
      </>}
    </svg>
  );
}
