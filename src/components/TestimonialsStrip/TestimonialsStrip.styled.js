import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

export const TestimonialsSection = styled.section`
  position: relative;
  width: 100%;
  padding: 3.6rem 5vw 6.2rem;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: clamp(4rem, 7vw, 8rem);
    background: linear-gradient(
      180deg,
      rgba(247, 241, 233, 0) 0%,
      rgba(247, 241, 233, 0.88) 72%,
      rgba(247, 241, 233, 1) 100%
    );
    pointer-events: none;
  }
`;

export const TestimonialsHeading = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto 2.2rem;
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
    max-width: 76rem;
    margin: 0;
    color: var(--font-title);
    font-size: clamp(2.7rem, 4vw, 4.2rem);
    line-height: 1.1;
    letter-spacing: -0.04em;
  }
`;

export const TestimonialsGrid = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.6rem;
  min-width: 0;

  ${media.lg`
    grid-template-columns: 1fr;
  `}
`;

export const ReviewCard = styled.article`
  min-width: 0;
  padding: 2.2rem;
  border: 1px solid var(--border-light);
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.76);
  box-shadow: var(--shadow-sm);

  span {
    display: inline-flex;
    margin-bottom: 1.2rem;
    color: var(--accent-primary);
    font-size: 1.15rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  p {
    margin: 0 0 1.4rem;
    color: var(--font-main);
    font-size: 1.65rem;
    line-height: 1.8;
  }

  strong {
    color: var(--font-title);
    font-size: 1.45rem;
  }
`;
