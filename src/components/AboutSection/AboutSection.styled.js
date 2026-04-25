import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

export const AboutSectionWrap = styled.section`
  position: relative;
  isolation: isolate;
  padding: 7.2rem 5vw 7rem;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(247, 241, 233, 0.08) 0%,
    rgba(248, 244, 236, 0.34) 24%,
    rgba(248, 244, 236, 0.42) 62%,
    rgba(247, 241, 233, 0.12) 100%
  );

  &::before {
    content: '';
    position: absolute;
    inset: -6rem 0;
    background:
      radial-gradient(circle at 12% 18%, rgba(214, 177, 104, 0.16), transparent 28%),
      radial-gradient(circle at 86% 12%, rgba(43, 98, 86, 0.1), transparent 24%);
    -webkit-mask-image: linear-gradient(
      180deg,
      transparent 0%,
      #000 18%,
      #000 76%,
      transparent 100%
    );
    mask-image: linear-gradient(
      180deg,
      transparent 0%,
      #000 18%,
      #000 76%,
      transparent 100%
    );
    pointer-events: none;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: clamp(10rem, 15vw, 17rem);
    background: linear-gradient(
      180deg,
      rgba(248, 244, 236, 0) 0%,
      rgba(247, 241, 233, 0.44) 42%,
      rgba(247, 241, 233, 0.7) 68%,
      rgba(247, 241, 233, 0.3) 88%,
      rgba(247, 241, 233, 0) 100%
    );
    pointer-events: none;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

export const SectionIntro = styled.div`
  position: relative;
  width: 100%;
  padding: clamp(2.6rem, 4vw, 3.8rem);
  border: 1px solid rgba(35, 48, 44, 0.08);
  border-radius: 3.2rem;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.78), rgba(248, 244, 236, 0.9)),
    radial-gradient(circle at top left, rgba(255, 255, 255, 0.45), transparent 42%);
  box-shadow: var(--shadow-md);
  min-width: 0;

  span {
    display: inline-block;
    margin-bottom: 1rem;
    color: var(--accent-primary);
    font-size: 1.25rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h2 {
    max-width: 72rem;
    margin: 0 0 1.6rem;
    color: var(--font-title);
    font-size: clamp(3rem, 4vw, 4.8rem);
    line-height: 1.08;
    letter-spacing: -0.04em;
  }

  p {
    max-width: 74rem;
    margin: 0;
    color: var(--font-main);
    font-size: 1.75rem;
    line-height: 1.85;
  }

  ${media.sm`
    padding: 2.4rem;
    border-radius: 2.4rem;
  `}
`;

export const AboutGrid = styled.div`
  position: relative;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.44fr) minmax(28rem, 0.8fr);
  gap: 2rem;
  align-items: stretch;
  min-width: 0;

  ${media.lg`
    grid-template-columns: 1fr;
  `}
`;

export const IntroNote = styled.p`
  max-width: 65rem;
  margin: 2.2rem 0 0;
  padding: 1.7rem 1.9rem 1.7rem 2.2rem;
  border: 1px solid rgba(43, 98, 86, 0.12);
  border-radius: 2rem;
  background:
    linear-gradient(90deg, rgba(43, 98, 86, 0.08), rgba(250, 247, 241, 0.9) 1.2rem),
    rgba(250, 247, 241, 0.88);
  color: var(--font-dark);
  font-size: 1.55rem;
  line-height: 1.75;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.55);
`;

const cardStyles = `
  padding: 3rem;
  border: 1px solid var(--border-light);
  border-radius: 2.4rem;
  background: rgba(255, 255, 255, 0.76);
  box-shadow: var(--shadow-sm);

  span {
    display: inline-block;
    margin-bottom: 1rem;
    color: var(--accent-primary);
    font-size: 1.2rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h3 {
    margin: 0 0 1.4rem;
    color: var(--font-title);
    font-size: 2.6rem;
    line-height: 1.2;
  }

  p,
  li {
    color: var(--font-main);
    font-size: 1.7rem;
    line-height: 1.8;
  }
`;

export const ValuesCard = styled.article`
  ${cardStyles}
  min-width: 0;
  height: 100%;
  display: grid;
  align-content: start;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.88), rgba(248, 244, 236, 0.96));
  box-shadow: var(--shadow-md);

  ${media.lg`
    height: auto;
  `}

  ul {
    display: grid;
    gap: 1rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    position: relative;
    padding: 1.2rem 1.4rem;
    padding-left: 4rem;
    border-radius: 1.6rem;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.52), rgba(248, 244, 236, 0.92));
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.55);
  }

  li::before {
    content: '';
    position: absolute;
    left: 1.35rem;
    top: 1.55rem;
    width: 1.2rem;
    height: 1.2rem;
    border: 0.28rem solid rgba(43, 98, 86, 0.18);
    border-top-color: var(--accent-primary);
    border-radius: 999px;
  }
`;

export const PlacesPanel = styled.div`
  position: relative;
  width: 100%;
  max-width: var(--max-width);
  margin: 2rem auto 0;
  padding: clamp(2.2rem, 3vw, 3rem);
  overflow: hidden;
  border: 1px solid rgba(43, 98, 86, 0.12);
  border-radius: 3rem;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(248, 244, 236, 0.92)),
    radial-gradient(circle at 8% 0%, rgba(214, 177, 104, 0.16), transparent 34%),
    radial-gradient(circle at 94% 18%, rgba(43, 98, 86, 0.1), transparent 26%);
  box-shadow: var(--shadow-md);

  ${media.sm`
    border-radius: 2.4rem;
  `}
`;

export const PlacesHeader = styled.div`
  width: 100%;
  max-width: 78rem;
  margin: 0 auto 2rem;
  text-align: center;

  span {
    display: inline-flex;
    align-items: center;
    min-height: 3.4rem;
    padding: 0 1.2rem;
    margin-bottom: 1rem;
    border: 1px solid rgba(43, 98, 86, 0.14);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.62);
    color: var(--accent-primary);
    font-size: 1.15rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h3 {
    margin: 0 0 1rem;
    color: var(--font-title);
    font-size: clamp(2.6rem, 3.4vw, 4rem);
    line-height: 1.08;
    letter-spacing: -0.035em;
  }

  p {
    max-width: 70rem;
    margin: 0 auto;
    color: var(--font-main);
    font-size: 1.62rem;
    line-height: 1.75;
  }

  ${media.sm`
    text-align: left;
  `}
`;

export const PlacesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1.2rem;
  min-width: 0;

  ${media.lg`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `}

  ${media.sm`
    grid-template-columns: 1fr;
  `}
`;

export const PlaceCard = styled.article`
  min-width: 0;
  padding: 1.6rem 1.35rem 1.55rem;
  border: 1px solid rgba(43, 98, 86, 0.14);
  border-radius: 1.8rem;
  background: rgba(255, 255, 255, 0.72);
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition:
    transform var(--transition-fast),
    border-color var(--transition-fast),
    box-shadow var(--transition-fast),
    background var(--transition-fast);

  strong {
    display: block;
    margin: 1rem 0 0.55rem;
    color: var(--font-title);
    font-size: 1.62rem;
    line-height: 1.25;
  }

  p {
    margin: 0;
    color: var(--font-main);
    font-size: 1.28rem;
    line-height: 1.55;
  }

  &:hover {
    transform: translateY(-0.35rem);
    border-color: rgba(43, 98, 86, 0.28);
    background: rgba(255, 255, 255, 0.9);
    box-shadow: var(--shadow-md);
  }

  ${media.sm`
    display: grid;
    grid-template-columns: 7rem minmax(0, 1fr);
    column-gap: 1.3rem;
    align-items: center;
    text-align: left;

    strong {
      margin-top: 0;
    }
  `}
`;

export const PlaceIcon = styled.div`
  width: 8rem;
  height: 8rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border: 1px solid rgba(43, 98, 86, 0.12);
  border-radius: 1.7rem;
  background:
    linear-gradient(180deg, rgba(244, 249, 247, 0.84), rgba(238, 244, 240, 0.62)),
    radial-gradient(circle at 30% 14%, rgba(214, 177, 104, 0.16), transparent 44%);
  color: rgba(43, 98, 86, 0.78);
  transition:
    transform var(--transition-fast),
    background var(--transition-fast),
    color var(--transition-fast);

  svg {
    width: 5.7rem;
    height: 5.7rem;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.45;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  ${PlaceCard}:hover & {
    transform: scale(1.04);
    background:
      linear-gradient(180deg, rgba(238, 248, 242, 0.96), rgba(251, 248, 241, 0.86));
    color: var(--accent-primary);
  }

  ${media.sm`
    grid-row: 1 / span 2;
    width: 7rem;
    height: 7rem;

    svg {
      width: 4.9rem;
      height: 4.9rem;
    }
  `}
`;
