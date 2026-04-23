import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

export const AboutSectionWrap = styled.section`
  position: relative;
  padding: 7.2rem 5vw 7rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 12% 18%, rgba(214, 177, 104, 0.16), transparent 28%),
      radial-gradient(circle at 86% 12%, rgba(43, 98, 86, 0.1), transparent 24%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: clamp(4rem, 7vw, 8rem);
    background: linear-gradient(
      180deg,
      rgba(248, 244, 236, 0) 0%,
      rgba(248, 244, 236, 0.86) 72%,
      rgba(248, 244, 236, 1) 100%
    );
    pointer-events: none;
  }
`;

export const SectionIntro = styled.div`
  position: relative;
  width: 100%;
  padding: 3.2rem;
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
  grid-template-columns: minmax(0, 1.45fr) minmax(28rem, 0.78fr);
  gap: 2rem;
  align-items: stretch;
  min-width: 0;

  ${media.lg`
    grid-template-columns: 1fr;
  `}
`;

export const IntroNote = styled.p`
  max-width: 56rem;
  margin: 2.2rem 0 0;
  padding: 1.5rem 1.8rem;
  border: 1px solid rgba(43, 98, 86, 0.12);
  border-radius: 2rem;
  background: rgba(250, 247, 241, 0.88);
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
    padding: 1.2rem 1.4rem;
    border-radius: 1.6rem;
    background: rgba(248, 244, 236, 0.92);
  }
`;
