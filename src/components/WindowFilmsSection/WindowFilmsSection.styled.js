import styled from 'styled-components';
import Link from 'next/link';

export const WindowFilmsWrap = styled.section`
  position: relative;
  isolation: isolate;
  padding: 7rem 5vw 7rem;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(247, 241, 233, 0.08) 0%,
    rgba(248, 244, 236, 0.34) 22%,
    rgba(248, 244, 236, 0.34) 70%,
    rgba(247, 241, 233, 0.12) 100%
  );

  &::before {
    content: '';
    position: absolute;
    inset: -6rem 0 auto;
    height: 58rem;
    background:
      radial-gradient(circle at 18% 24%, rgba(255, 189, 41, 0.14), transparent 32%),
      radial-gradient(circle at 84% 8%, rgba(43, 98, 86, 0.1), transparent 28%),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.42) 0%,
        rgba(248, 244, 236, 0.22) 62%,
        rgba(248, 244, 236, 0) 100%
      );
    -webkit-mask-image: linear-gradient(
      180deg,
      transparent 0%,
      #000 16%,
      #000 74%,
      transparent 100%
    );
    mask-image: linear-gradient(
      180deg,
      transparent 0%,
      #000 16%,
      #000 74%,
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
    height: clamp(9rem, 14vw, 16rem);
    background: linear-gradient(
      180deg,
      rgba(247, 241, 233, 0) 0%,
      rgba(247, 241, 233, 0.42) 46%,
      rgba(247, 241, 233, 0.68) 72%,
      rgba(247, 241, 233, 0.22) 92%,
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

export const ProblemGrid = styled.div`
  position: relative;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto 2.8rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.6rem;
  min-width: 0;

  @media (max-width: 1020px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const ProblemCard = styled(Link)`
  display: grid;
  grid-template-rows: auto 1fr;
  min-width: 0;
  overflow: hidden;
  border: 1px solid rgba(43, 98, 86, 0.14);
  border-radius: 2.6rem;
  background: rgba(255, 255, 255, 0.84);
  box-shadow: var(--shadow-sm);
  transition:
    transform var(--transition-fast),
    box-shadow var(--transition-fast),
    border-color var(--transition-fast);

  img {
    width: 100%;
    aspect-ratio: 16 / 9;
    display: block;
    object-fit: cover;
    background: rgba(249, 246, 240, 0.95);
  }

  div {
    display: grid;
    align-content: start;
    gap: 0.9rem;
    padding: 1.8rem;
    min-width: 0;
  }

  span {
    display: block;
    color: var(--font-title);
    font-size: clamp(1.9rem, 2.2vw, 2.35rem);
    font-weight: 800;
    line-height: 1.16;
  }

  p {
    margin: 0;
    color: var(--font-main);
    font-size: 1.42rem;
    line-height: 1.65;
  }

  strong {
    width: fit-content;
    min-height: 3.8rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.4rem;
    padding: 0 1.25rem;
    border-radius: 999px;
    background: rgba(43, 98, 86, 0.1);
    color: var(--accent-primary);
    font-size: 1.32rem;
    line-height: 1;
    font-weight: 800;
    transition:
      background var(--transition-fast),
      color var(--transition-fast);
  }

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(43, 98, 86, 0.28);
    box-shadow: var(--shadow-md);

    strong {
      background: var(--accent-primary);
      color: #fffdf8;
    }
  }
`;

export const SectionIntro = styled.div`
  position: relative;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto 2.4rem;
  min-width: 0;

  span {
    display: inline-flex;
    align-items: center;
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
    max-width: 76rem;
    margin: 0 0 1.7rem;
    color: var(--font-title);
    font-size: clamp(3rem, 4vw, 4.8rem);
    line-height: 1.04;
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

export const FeaturedFilm = styled.article`
  position: relative;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto 2.8rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(28rem, 0.86fr);
  gap: 1.6rem;
  align-items: stretch;
  min-width: 0;
  overflow: hidden;
  border: 1px solid rgba(43, 98, 86, 0.16);
  border-radius: 2.8rem;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: var(--shadow-md);
  transition:
    transform var(--transition-fast),
    box-shadow var(--transition-fast),
    border-color var(--transition-fast);

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(43, 98, 86, 0.28);
    box-shadow: var(--shadow-lg);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const FeaturedFilmCopy = styled.div`
  display: grid;
  align-content: center;
  gap: 1.2rem;
  padding: clamp(2rem, 4vw, 3rem);
  min-width: 0;

  > span {
    width: fit-content;
    min-height: 3.2rem;
    display: inline-flex;
    align-items: center;
    padding: 0 1.15rem;
    border: 1px solid rgba(43, 98, 86, 0.16);
    border-radius: 999px;
    background: rgba(43, 98, 86, 0.08);
    color: var(--accent-primary);
    font-size: 1.15rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h3 {
    max-width: 62rem;
    margin: 0;
    color: var(--font-title);
    font-size: clamp(2.6rem, 3.6vw, 4.2rem);
    line-height: 1.08;
    letter-spacing: -0.035em;
  }

  p {
    max-width: 68rem;
    margin: 0;
    color: var(--font-main);
    font-size: 1.62rem;
    line-height: 1.78;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 0.4rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 4.6rem;
    padding: 0 1.55rem;
    border-radius: 999px;
    color: #fffdf8;
    background: var(--accent-primary);
    font-size: 1.42rem;
    font-weight: 800;
    transition:
      transform var(--transition-fast),
      background var(--transition-fast);
  }

  a:last-child {
    border: 1px solid rgba(43, 98, 86, 0.18);
    background: rgba(43, 98, 86, 0.08);
    color: var(--accent-primary);
  }

  a:hover {
    transform: translateY(-1px);
  }
`;

export const FeaturedFilmVisual = styled.div`
  min-width: 0;
  min-height: 100%;
  background: rgba(249, 246, 240, 0.95);

  img {
    width: 100%;
    height: 100%;
    min-height: 34rem;
    display: block;
    object-fit: cover;
    transition: transform var(--transition);
  }

  ${FeaturedFilm}:hover & img {
    transform: scale(1.025);
  }

  @media (max-width: 560px) {
    img {
      min-height: 24rem;
    }
  }
`;

export const SliderToolbar = styled.div`
  position: relative;
  width: 100%;
  max-width: var(--max-width);
  margin: 2rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
  min-width: 0;
`;

export const SliderIntro = styled.div`
  position: relative;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto 1.8rem;
  padding-top: 0.6rem;
  display: grid;
  gap: 0.9rem;
  min-width: 0;

  span {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    min-height: 3.4rem;
    padding: 0 1.2rem;
    border: 1px solid rgba(43, 98, 86, 0.14);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.62);
    color: var(--accent-primary);
    font-size: 1.15rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  p {
    max-width: 76rem;
    margin: 0;
    color: var(--font-main);
    font-size: 1.62rem;
    line-height: 1.75;
  }
`;

export const SliderDots = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  flex-wrap: wrap;
`;

export const SliderDot = styled.button`
  width: ${(props) => (props.$isActive ? '2.8rem' : '0.95rem')};
  height: 0.95rem;
  border: 0;
  border-radius: 999px;
  background: ${(props) =>
    props.$isActive ? 'var(--accent-primary)' : 'rgba(43, 98, 86, 0.18)'};
  box-shadow: ${(props) =>
    props.$isActive ? '0 6px 14px rgba(43, 98, 86, 0.22)' : 'none'};
  cursor: pointer;
  transition:
    width var(--transition),
    background var(--transition),
    transform var(--transition),
    box-shadow var(--transition);

  &:hover {
    transform: translateY(-1px);
  }
`;

export const SliderControls = styled.div`
  display: inline-flex;
  gap: 1rem;
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
    transform var(--transition),
    opacity var(--transition),
    background var(--transition),
    box-shadow var(--transition);

  &::before {
    content: '';
    width: 1rem;
    height: 1rem;
    display: block;
    border-top: 2px solid currentColor;
    border-right: 2px solid currentColor;
    transition: transform var(--transition);
  }

  &:first-child::before {
    transform: translateX(0.15rem) rotate(-135deg);
  }

  &:last-child::before {
    transform: translateX(-0.15rem) rotate(45deg);
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px) scale(1.02);
    background: #fffdf8;
    box-shadow: var(--shadow-md);
  }

  &:disabled {
    opacity: 0.42;
    cursor: default;
    box-shadow: none;
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
  padding: 0.2rem 2.4rem 0.6rem 0;
  min-width: 0;
  cursor: grab;
  scroll-behavior: smooth;
  scroll-padding-inline-start: 0;
  scroll-snap-type: x proximity;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &.is-dragging {
    cursor: grabbing;
    scroll-behavior: auto;
    scroll-snap-type: none;
    user-select: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 600px) {
    grid-auto-columns: minmax(22rem, 82vw);
    padding-right: 5vw;
    cursor: auto;
  }
`;

export const FilmCard = styled.article`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  gap: 1.35rem;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
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
