import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

export const ProcessWrap = styled.section`
  padding: 6.4rem 5vw 0;
  overflow: hidden;
`;

export const ProcessIntro = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto 2.4rem;
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
    max-width: 86rem;
    margin: 0 0 1.5rem;
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

export const ProcessGrid = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.4rem;
  min-width: 0;

  ${media.lg`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `}

  ${media.sm`
    grid-template-columns: 1fr;
  `}
`;

export const ProcessStep = styled.article`
  min-width: 0;
  padding: 2.3rem;
  border: 1px solid var(--border-light);
  border-radius: 2.2rem;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(248, 244, 236, 0.9));
  box-shadow: var(--shadow-sm);

  span {
    width: 4.2rem;
    height: 4.2rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.4rem;
    border-radius: 999px;
    background: rgba(43, 98, 86, 0.11);
    color: var(--accent-primary);
    font-size: 1.35rem;
    font-weight: 800;
  }

  h3 {
    margin: 0 0 1rem;
    color: var(--font-title);
    font-size: 2.05rem;
    line-height: 1.25;
  }

  p {
    margin: 0;
    color: var(--font-main);
    font-size: 1.55rem;
    line-height: 1.75;
  }
`;
