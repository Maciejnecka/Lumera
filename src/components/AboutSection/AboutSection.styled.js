import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

export const AboutSectionWrap = styled.section`
  padding: 6rem 5vw 0;
  overflow: hidden;
`;

export const SectionIntro = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto 2.6rem;
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
    max-width: 90rem;
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
`;

export const AboutGrid = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 1.8rem;
  min-width: 0;

  ${media.lg`
    grid-template-columns: 1fr;
  `}
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

export const StoryCard = styled.article`
  ${cardStyles}
  min-width: 0;
`;

export const ValuesCard = styled.article`
  ${cardStyles}
  min-width: 0;

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
