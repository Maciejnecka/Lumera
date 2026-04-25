import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

export const ProcessWrap = styled.section`
  position: relative;
  isolation: isolate;
  padding: 6.4rem 5vw 6.8rem;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: clamp(6rem, 10vw, 11rem);
    background: linear-gradient(
      180deg,
      rgba(247, 241, 233, 0) 0%,
      rgba(247, 241, 233, 0.58) 58%,
      rgba(247, 241, 233, 0.88) 86%,
      rgba(247, 241, 233, 1) 100%
    );
    pointer-events: none;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
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

export const ProcessFlow = styled.div`
  --flow-line: rgba(43, 98, 86, 0.2);
  --flow-line-active: rgba(43, 98, 86, 0.72);
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1.2rem;
  min-width: 0;
  align-items: start;

  ${media.lg`
    grid-template-columns: 1fr;
    gap: 1rem;
  `}
`;

export const ProcessConnector = styled.span`
  position: absolute;
  left: calc(50% + 3.2rem);
  right: calc(-50% + 3.2rem);
  top: 3.2rem;
  height: 0.2rem;
  background:
    linear-gradient(90deg, var(--flow-line-active), rgba(43, 98, 86, 0.12)),
    repeating-linear-gradient(
      90deg,
      transparent 0,
      transparent 0.8rem,
      rgba(43, 98, 86, 0.38) 0.8rem,
      rgba(43, 98, 86, 0.38) 1.2rem
    );
  opacity: 0.72;
  pointer-events: none;
  transform-origin: left center;
  z-index: 1;
  transition:
    opacity var(--transition-fast),
    transform var(--transition-fast);

  &::after {
    content: '';
    position: absolute;
    right: 50%;
    top: 50%;
    width: 1rem;
    height: 1rem;
    border-top: 2px solid rgba(43, 98, 86, 0.78);
    border-right: 2px solid rgba(43, 98, 86, 0.78);
    transform: translate(50%, -50%) rotate(45deg);
  }

  ${media.lg`
    left: calc(1.5rem + 3.2rem);
    right: auto;
    top: calc(1.3rem + 6.4rem);
    width: 0.2rem;
    height: calc(100% + 1rem);
    background:
      linear-gradient(180deg, var(--flow-line-active), rgba(43, 98, 86, 0.12)),
      repeating-linear-gradient(
        180deg,
        transparent 0,
        transparent 0.8rem,
        rgba(43, 98, 86, 0.38) 0.8rem,
        rgba(43, 98, 86, 0.38) 1.2rem
      );
    transform-origin: center top;

    &::after {
      width: 2.4rem;
      height: 2.4rem;
      display: block;
      right: auto;
      left: 50%;
      top: 25%;
      bottom: auto;
      border: 1px solid rgba(43, 98, 86, 0.18);
      border-radius: 999px;
      background:
        linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(246, 241, 232, 0.94));
      box-shadow: 0 0.8rem 1.8rem rgba(43, 98, 86, 0.12);
      transform: translate(-50%, -50%);
    }

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 25%;
      width: 0.72rem;
      height: 0.72rem;
      border-right: 2px solid rgba(43, 98, 86, 0.82);
      border-bottom: 2px solid rgba(43, 98, 86, 0.82);
      transform: translate(-50%, -62%) rotate(45deg);
      z-index: 2;
    }
  `}
`;

export const ProcessIcon = styled.div`
  position: relative;
  z-index: 2;
  width: 6.4rem;
  height: 6.4rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  border: 1px solid rgba(43, 98, 86, 0.18);
  border-radius: 999px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(246, 241, 232, 0.94)),
    radial-gradient(circle at 30% 18%, rgba(215, 180, 106, 0.34), transparent 38%);
  box-shadow:
    0 1.4rem 3rem rgba(43, 98, 86, 0.1),
    inset 0 0 0 0.8rem rgba(43, 98, 86, 0.045);
  transition:
    transform var(--transition-fast),
    border-color var(--transition-fast),
    background var(--transition-fast),
    box-shadow var(--transition-fast);

  svg {
    width: 2.8rem;
    height: 2.8rem;
    fill: none;
    stroke: var(--accent-primary);
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  ${media.lg`
    margin: 0;
    flex: 0 0 auto;
  `}
`;

export const ProcessStep = styled.article`
  position: relative;
  display: grid;
  align-content: start;
  justify-items: center;
  min-width: 0;
  padding: 0 0.8rem;
  text-align: center;
  transition:
    transform var(--transition-fast),
    filter var(--transition-fast);

  &::before {
    content: '';
    position: absolute;
    inset: 3.2rem 0 auto;
    height: 0.1rem;
    background: rgba(43, 98, 86, 0.08);
    transform: translateY(-50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 2.6rem 50% auto;
    width: 7.8rem;
    height: 7.8rem;
    border-radius: 999px;
    background: rgba(215, 180, 106, 0.12);
    filter: blur(12px);
    transform: translateX(-50%);
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--transition-fast);
  }

  &:hover {
    transform: translateY(-0.45rem);

    ${ProcessIcon} {
      transform: scale(1.06);
      border-color: rgba(43, 98, 86, 0.32);
      background:
        linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(235, 244, 236, 0.92)),
        radial-gradient(circle at 30% 18%, rgba(215, 180, 106, 0.42), transparent 40%);
      box-shadow:
        0 1.7rem 3.4rem rgba(43, 98, 86, 0.16),
        inset 0 0 0 0.8rem rgba(43, 98, 86, 0.07);
    }

    ${ProcessConnector} {
      opacity: 1;
      transform: scaleX(1.03);
    }
  }

  &:hover::after {
    opacity: 1;
  }

  small {
    width: fit-content;
    max-width: 100%;
    min-height: 3.2rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.9rem;
    padding: 0 1.1rem;
    border: 1px solid rgba(43, 98, 86, 0.13);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.62);
    color: var(--accent-primary);
    font-size: 1.08rem;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  h3,
  p,
  small {
    position: relative;
    z-index: 2;
  }

  h3 {
    max-width: 18rem;
    margin: 0 0 0.8rem;
    color: var(--font-title);
    font-size: clamp(1.82rem, 1.7vw, 2.18rem);
    line-height: 1.12;
  }

  p {
    max-width: 21rem;
    margin: 0;
    color: var(--font-main);
    font-size: 1.36rem;
    line-height: 1.58;
  }

  ${media.lg`
    grid-template-columns: 6.4rem minmax(0, 1fr);
    column-gap: 1.6rem;
    justify-items: start;
    padding: 1.3rem 1.5rem;
    border: 1px solid var(--border-light);
    border-radius: 2.2rem;
    text-align: left;
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(248, 244, 236, 0.9));
    box-shadow: var(--shadow-sm);

    &::before,
    &::after {
      display: none;
    }

    ${ProcessIcon} {
      grid-row: 1 / span 3;
    }

    small {
      margin-bottom: 0.6rem;
    }

    h3,
    p {
      max-width: none;
    }

    &:hover {
      transform: translateY(-0.2rem);

      ${ProcessConnector} {
        transform: scaleY(1.02);
      }
    }
  `}
`;
