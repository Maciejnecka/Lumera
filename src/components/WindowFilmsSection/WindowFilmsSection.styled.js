import styled from 'styled-components';
import Link from 'next/link';

export const WindowFilmsWrap = styled.section`
  position: relative;
  padding: 7rem 5vw 4.5rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    height: 48rem;
    background:
      radial-gradient(circle at 18% 24%, rgba(255, 189, 41, 0.14), transparent 32%),
      radial-gradient(circle at 84% 8%, rgba(43, 98, 86, 0.1), transparent 28%),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.42) 0%,
        rgba(248, 244, 236, 0.22) 62%,
        rgba(248, 244, 236, 0) 100%
      );
    mask-image: linear-gradient(180deg, #000 0%, #000 74%, transparent 100%);
    pointer-events: none;
  }
`;

export const ProblemGrid = styled.div`
  position: relative;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto 2.8rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.2rem;
  min-width: 0;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const ProblemCard = styled(Link)`
  min-width: 0;
  padding: 1.8rem;
  border: 1px solid rgba(43, 98, 86, 0.14);
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: var(--shadow-sm);
  transition:
    transform var(--transition-fast),
    box-shadow var(--transition-fast),
    border-color var(--transition-fast);

  span {
    display: block;
    margin-bottom: 0.8rem;
    color: var(--font-title);
    font-size: 1.8rem;
    font-weight: 800;
    line-height: 1.25;
  }

  p {
    margin: 0;
    color: var(--font-main);
    font-size: 1.42rem;
    line-height: 1.65;
  }

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(43, 98, 86, 0.28);
    box-shadow: var(--shadow-md);
  }
`;

export const SectionIntro = styled.div`
  position: relative;
  width: 100%;
  max-width: 92rem;
  margin: 0 auto 2.4rem;
  min-width: 0;
  text-align: center;

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 3.8rem;
    padding: 0 1.35rem;
    margin-bottom: 1.4rem;
    border: 1px solid rgba(43, 98, 86, 0.16);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.62);
    color: var(--accent-primary);
    font-size: 1.25rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h2 {
    max-width: 88rem;
    margin: 0 auto 1.7rem;
    color: var(--font-title);
    font-size: clamp(3rem, 4vw, 4.8rem);
    line-height: 1.04;
    letter-spacing: -0.04em;
  }

  p {
    max-width: 74rem;
    margin: 0 auto;
    color: var(--font-main);
    font-size: 1.75rem;
    line-height: 1.85;
  }
`;

export const SliderToolbar = styled.div`
  position: relative;
  width: 100%;
  max-width: 92rem;
  margin: 0 auto 2.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
  min-width: 0;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const SliderHint = styled.p`
  margin: 0;
  padding: 1rem 1.4rem;
  border: 1px solid rgba(35, 48, 44, 0.1);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.64);
  color: var(--font-dark);
  box-shadow: var(--shadow-sm);
  font-size: 1.42rem;
  line-height: 1.6;
  text-align: center;
`;

export const SliderControls = styled.div`
  display: inline-flex;
  gap: 0.8rem;
  flex: 0 0 auto;
`;

export const SliderButton = styled.button`
  width: 5.2rem;
  height: 5.2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid rgba(35, 48, 44, 0.14);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--font-title);
  box-shadow: var(--shadow-sm);
  font-size: 0;
  line-height: 0;
  cursor: pointer;
  transition:
    transform var(--transition-fast),
    background var(--transition-fast),
    box-shadow var(--transition-fast);

  &::before {
    content: '';
    width: 1rem;
    height: 1rem;
    display: block;
    border-top: 2px solid currentColor;
    border-right: 2px solid currentColor;
  }

  &:first-child::before {
    transform: translateX(0.15rem) rotate(-135deg);
  }

  &:last-child::before {
    transform: translateX(-0.15rem) rotate(45deg);
  }

  &:hover {
    transform: translateY(-2px);
    background: #fffdf8;
    box-shadow: var(--shadow-md);
  }
`;

export const FilmsSlider = styled.div`
  position: relative;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(28rem, 35rem);
  gap: 1.8rem;
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-inline: contain;
  padding: 0.2rem 0 1.4rem;
  scroll-snap-type: x proximity;
  min-width: 0;
  cursor: grab;
  scrollbar-color: rgba(43, 98, 86, 0.5) rgba(255, 255, 255, 0.58);
  scrollbar-width: thin;

  &.is-dragging {
    cursor: grabbing;
    scroll-snap-type: none;
    user-select: none;
  }

  &::-webkit-scrollbar {
    height: 12px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.58);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    border: 3px solid rgba(255, 255, 255, 0.58);
    background: rgba(43, 98, 86, 0.5);
  }

  @media (max-width: 600px) {
    grid-auto-columns: minmax(22rem, 86vw);
    cursor: auto;
  }
`;

export const FilmCard = styled.article`
  scroll-snap-align: start;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  gap: 1.35rem;
  min-width: 0;
  min-height: 100%;
  padding: 1.8rem;
  border: 1px solid var(--border-light);
  border-radius: 2.8rem;
  background: rgba(255, 255, 255, 0.84);
  box-shadow: var(--shadow-sm);
  transition:
    transform var(--transition-fast),
    box-shadow var(--transition-fast),
    border-color var(--transition-fast);

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(43, 98, 86, 0.2);
    box-shadow: var(--shadow-md);
  }

  h3 {
    margin: 0;
    color: var(--font-main);
    font-size: 1.6rem;
    line-height: 1.72;
    font-weight: 500;
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 4.6rem;
    padding: 0 1.5rem;
    border-radius: 999px;
    background: rgba(43, 98, 86, 0.1);
    color: var(--accent-primary);
    font-size: 1.45rem;
    font-weight: 700;
    transition:
      transform var(--transition-fast),
      background var(--transition-fast),
      color var(--transition-fast);
  }

  a:hover {
    transform: translateY(-1px);
    background: var(--accent-primary);
    color: #fffdf8;
  }
`;

export const FilmImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  display: block;
  border-radius: 2rem;
  background: rgba(249, 246, 240, 0.95);
  object-fit: cover;
`;

export const FilmMeta = styled.span`
  display: inline-block;
  color: var(--font-title);
  font-size: 2.05rem;
  line-height: 1.25;
  font-weight: 700;
  text-align: center;
`;
