import React from 'react';
import headerImage from '../../img/HeaderBuilding.webp';
import headerImageSmall from '../../img/HeaderBuilding-800.webp';
import {
  HeroSection,
  HeroContent,
  HeroCopy,
  HeroBadge,
  HeroTitle,
  HeroLead,
  HeroLocation,
  HeroPromise,
  HeroPromiseLink,
  HeroHighlights,
  HighlightItem,
  HeroActions,
  PrimaryButton,
  SecondaryButton,
  HeroImageWrap,
  HeroImageFrame,
  HeroStatCard,
} from './Header.styled';

const Header = () => {
  const heroImageSrc = headerImage.src || headerImage;
  const heroImageSmallSrc = headerImageSmall.src || headerImageSmall;

  return (
    <HeroSection id="start">
      <HeroContent>
        <HeroCopy data-aos="fade-up">
          <HeroBadge>Lumera • nowa marka od doświadczonych montażystów</HeroBadge>

          <HeroTitle>
            Folie okienne, które poprawiają komfort domu, biura i lokalu bez
            wymiany szyb.
          </HeroTitle>

          <HeroLead>
            Pomagamy ograniczyć nagrzewanie pomieszczeń, zmniejszyć odblaski i
            zwiększyć prywatność tam, gdzie naprawdę ma to znaczenie. Stawiamy
            na dobrze dobraną folię, czysty montaż i efekt, który od razu robi
            różnicę w codziennym użytkowaniu wnętrza.
          </HeroLead>

          <HeroLocation>
            Montaż folii okiennych w Krakowie, Katowicach i okolicach. Przy
            większych realizacjach działamy na terenie całej Polski.
          </HeroLocation>

          <HeroPromise>
            <span>Dobierzemy folię za Ciebie</span>
            <strong>Nie musisz wiedzieć, jakiej folii potrzebujesz.</strong>
            <p>
              Wyślij zdjęcie okna, orientacyjne wymiary i krótki opis problemu.
              Wymiary najlepiej podać od uszczelki do uszczelki.
              Podpowiemy, które rozwiązanie ma sens przed umawianiem montażu.
            </p>
            <HeroPromiseLink href="#kontakt">Wyślij zdjęcia do oceny</HeroPromiseLink>
          </HeroPromise>

          <HeroHighlights>
            <HighlightItem>Mniej słońca i odblasków</HighlightItem>
            <HighlightItem>Większa prywatność we wnętrzach</HighlightItem>
            <HighlightItem>Montaż dopasowany do rodzaju przeszkleń</HighlightItem>
          </HeroHighlights>

          <HeroActions>
            <PrimaryButton href="#kontakt">Poproś o wycenę</PrimaryButton>
            <SecondaryButton href="#folie-okienne">
              Zobacz rodzaje folii
            </SecondaryButton>
          </HeroActions>
        </HeroCopy>

        <HeroImageWrap data-aos="fade-left">
          <HeroImageFrame>
            <img
              src={heroImageSrc}
              srcSet={`${heroImageSmallSrc} 800w, ${heroImageSrc} 1400w`}
              sizes="(max-width: 900px) 100vw, 46vw"
              alt="Jasne, nowoczesne wnętrze z dużymi przeszkleniami"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
          </HeroImageFrame>

          <HeroStatCard className="hero-card--top">
            <span>Dla klienta</span>
            <strong>czytelna oferta i spokojny, konkretny sposób komunikacji</strong>
          </HeroStatCard>

          <HeroStatCard className="hero-card--bottom">
            <span>Efekt</span>
            <strong>więcej komfortu, prywatności i estetyki bez remontu</strong>
          </HeroStatCard>
        </HeroImageWrap>
      </HeroContent>
    </HeroSection>
  );
};

export default Header;
