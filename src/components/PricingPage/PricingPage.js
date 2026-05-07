import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import {
  pricingFactors,
  pricingGroups,
  pricingHeroPoints,
  pricingProcess,
} from '../../data/pricingPageData';
import { filmsData } from '../../data/filmsData';
import {
  PricingWrap,
  PricingHero,
  PricingEyebrow,
  PricingTitle,
  PricingLead,
  PricingActions,
  PricingHeroGrid,
  PricingHeroCard,
  PricingNotice,
  PricingSection,
  PricingSectionHeading,
  PricingCards,
  PricingCard,
  PricingCardMedia,
  PricingCardBody,
  PricingCardMeta,
  PricingPill,
  PricingLabel,
  PricingValue,
  PricingCardNote,
  PricingFactorsGrid,
  PricingFactorCard,
  PricingProcessGrid,
  PricingProcessCard,
  PricingProcessStep,
  PricingFinalCta,
} from './PricingPage.styled';

const pricingFilmMap = new Map(filmsData.map((film) => [film.id, film]));

const getCardData = (item) => {
  const film = pricingFilmMap.get(item.filmId);

  return {
    ...item,
    title: film?.name || item.title,
    path: film?.path || item.path || '/#kontakt',
    image: film?.image || null,
    shortDescription: film?.shortDescription || item.shortDescription || '',
  };
};

const PricingPage = ({ breadcrumbs }) => {
  return (
    <main id="main-content">
      <PricingWrap>
        <PricingHero>
          <Breadcrumbs items={breadcrumbs} />
          <PricingEyebrow>Cennik orientacyjny</PricingEyebrow>
          <PricingTitle>Cennik folii okiennych i usług Lumera</PricingTitle>
          <PricingLead>
            To nie jest sztywny cennik, tylko czytelny punkt odniesienia, który
            pomaga oszacować budżet przed rozmową. Ostateczna cena zawsze zależy od
            rodzaju szyby, warunków montażu, dostępu, wymiarów i zakresu prac.
          </PricingLead>

          <PricingActions>
            <Link href="/#kontakt">Poproś o realną wycenę</Link>
            <a href="#zakresy-cen">Przejdź do zakresów cen</a>
          </PricingActions>

          <PricingHeroGrid>
            {pricingHeroPoints.map((point) => (
              <PricingHeroCard key={point.label}>
                <span>{point.label}</span>
                <strong>{point.value}</strong>
                <p>{point.description}</p>
              </PricingHeroCard>
            ))}
          </PricingHeroGrid>

          <PricingNotice>
            Podane zakresy mają charakter orientacyjny. Finalny koszt realizacji
            ustalamy dopiero po poznaniu specyfiki montażu, rodzaju przeszklenia,
            wymiarów oraz warunków na miejscu.
          </PricingNotice>
        </PricingHero>

        {pricingGroups.map((group) => (
          <PricingSection
            key={group.id}
            id={group.id === 'standard' ? 'zakresy-cen' : undefined}
          >
            <PricingSectionHeading>
              <span>{group.eyebrow || group.title}</span>
              <h2>{group.title}</h2>
              <p>{group.lead}</p>
            </PricingSectionHeading>

            <PricingCards>
              {group.items.map((item) => {
                const card = getCardData(item);

                return (
                  <PricingCard key={card.filmId || card.title}>
                    <PricingCardMedia>
                      {card.image ? <img src={card.image} alt="" /> : null}
                    </PricingCardMedia>

                    <PricingCardBody>
                      <div>
                        <h3>{card.title}</h3>
                        <p>{card.shortDescription}</p>
                      </div>

                      <PricingCardMeta>
                        <div>
                          <PricingLabel>Cena orientacyjna</PricingLabel>
                          <PricingValue>{card.serviceRange}</PricingValue>
                        </div>
                        <div>
                          <PricingLabel>Typowa gwarancja</PricingLabel>
                          <PricingPill>{card.warranty}</PricingPill>
                        </div>
                      </PricingCardMeta>

                      <PricingCardNote>{card.note}</PricingCardNote>

                      <Link href={card.path}>Zobacz podstronę tej folii</Link>
                    </PricingCardBody>
                  </PricingCard>
                );
              })}
            </PricingCards>
          </PricingSection>
        ))}

        <PricingSection>
          <PricingSectionHeading>
            <span>Co zmienia cenę</span>
            <h2>Od czego finalnie zależy wycena?</h2>
            <p>
              Chcemy, żeby orientacyjna cena była czytelna, ale jednocześnie uczciwa.
              Na finalną wycenę wpływa nie tylko rodzaj folii, ale też cała specyfika
              montażu i samego przeszklenia.
            </p>
          </PricingSectionHeading>

          <PricingFactorsGrid>
            {pricingFactors.map((factor) => (
              <PricingFactorCard key={factor}>{factor}</PricingFactorCard>
            ))}
          </PricingFactorsGrid>
        </PricingSection>

        <PricingSection>
          <PricingSectionHeading>
            <span>Jak to działa</span>
            <h2>Jak dochodzimy do finalnej ceny i gwarancji?</h2>
            <p>
              Orientacyjny cennik ma ułatwiać pierwszy kontakt. Finalna cena i
              warunki gwarancji są zawsze doprecyzowywane pod konkretną szybę,
              wybraną folię i realne warunki montażu.
            </p>
          </PricingSectionHeading>

          <PricingProcessGrid>
            {pricingProcess.map((item) => (
              <PricingProcessCard key={item.step}>
                <PricingProcessStep>{item.step}</PricingProcessStep>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </PricingProcessCard>
            ))}
          </PricingProcessGrid>
        </PricingSection>

        <PricingFinalCta>
          <div>
            <span>Ważne</span>
            <h2>
              Ten cennik pomaga wstępnie oszacować koszt, ale nie zastępuje
              indywidualnej wyceny przygotowanej pod konkretną realizację.
            </h2>
            <p>
              Jeśli chcesz poznać realny koszt, przygotujemy spokojną i konkretną
              wycenę na podstawie zdjęć, wymiarów oraz informacji o miejscu montażu.
              Dzięki temu otrzymasz propozycję dopasowaną do swojej przestrzeni,
              oczekiwań i rodzaju przeszklenia.
            </p>
          </div>

          <Link href="/#kontakt">Poproś o bezpłatną wycenę</Link>
        </PricingFinalCta>
      </PricingWrap>
    </main>
  );
};

export default PricingPage;
