import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

export const GalleryWrap = styled.section`
  width: min(100%, 66rem);
  display: grid;
  gap: 1.2rem;
  margin: 0 auto;

  ${media.lg`
    width: 100%;
  `}
`;

export const GalleryMain = styled.figure`
  margin: 0;
`;

export const GalleryViewport = styled.div`
  position: relative;
  isolation: isolate;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border: 1px solid var(--border-light);
  border-radius: 2.6rem;
  background: rgba(233, 241, 238, 0.72);
  box-shadow: var(--shadow-md);

  > img {
    position: absolute;
    inset: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }

  .gallery-zoom {
    position: absolute;
    right: 1.4rem;
    top: 1.4rem;
    z-index: 4;
    min-height: 4.1rem;
    padding: 0 1.35rem;
    border: 1px solid rgba(255, 255, 255, 0.62);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.88);
    color: var(--font-title);
    font-family: inherit;
    font-size: 1.3rem;
    font-weight: 800;
    cursor: zoom-in;
    box-shadow: 0 0.8rem 2rem rgba(17, 27, 24, 0.12);
    transition:
      transform var(--transition-fast),
      background var(--transition-fast);
  }

  .gallery-zoom:hover {
    transform: translateY(-1px);
    background: #fffdf8;
  }

  ${media.sm`
    aspect-ratio: 4 / 3;
    border-radius: 2rem;
  `}
`;

export const GalleryCaption = styled.figcaption`
  position: absolute;
  left: 1.4rem;
  bottom: 1.4rem;
  z-index: 3;
  max-width: min(48rem, calc(100% - 2.8rem));
  padding: 0.85rem 1.15rem;
  border-radius: 1.4rem;
  background: rgba(255, 255, 255, 0.9);
  color: var(--font-title);
  font-size: 1.35rem;
  font-weight: 800;
  line-height: 1.35;
  box-shadow: 0 0.8rem 2rem rgba(17, 27, 24, 0.12);

  ${media.sm`
    left: 1rem;
    bottom: 1rem;
    max-width: calc(100% - 2rem);
    font-size: 1.18rem;
  `}
`;

export const GalleryArrow = styled.button`
  position: absolute;
  top: 50%;
  ${({ $side }) => ($side === 'left' ? 'left: 1.3rem;' : 'right: 1.3rem;')}
  z-index: 5;
  display: grid;
  place-items: center;
  width: 4.7rem;
  height: 4.7rem;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.64);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--font-title);
  cursor: pointer;
  box-shadow: 0 1rem 2.4rem rgba(17, 27, 24, 0.16);
  transform: translateY(-50%);
  transition:
    transform var(--transition-fast),
    background var(--transition-fast),
    box-shadow var(--transition-fast);

  span {
    display: block;
    margin-top: -0.2rem;
    font-size: 3.1rem;
    line-height: 1;
  }

  &:hover {
    transform: translateY(calc(-50% - 1px));
    background: #fffdf8;
    box-shadow: var(--shadow-md);
  }

  ${media.sm`
    width: 4rem;
    height: 4rem;
    ${({ $side }) => ($side === 'left' ? 'left: 0.8rem;' : 'right: 0.8rem;')}

    span {
      font-size: 2.6rem;
    }
  `}
`;

export const GalleryThumbs = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  max-width: 100%;
  padding: 0.15rem 0.1rem 0.55rem;
  scroll-snap-type: x proximity;
  scrollbar-width: thin;
`;

export const GalleryThumb = styled.button`
  position: relative;
  flex: 0 0 10.4rem;
  min-width: 0;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  padding: 0;
  border: 1px solid ${({ $active }) => ($active ? 'rgba(43, 98, 86, 0.66)' : 'var(--border-light)')};
  border-radius: 1.6rem;
  background: rgba(248, 244, 236, 0.9);
  cursor: pointer;
  scroll-snap-align: start;
  box-shadow: ${({ $active }) => ($active ? 'var(--shadow-sm)' : 'none')};
  transition:
    border-color var(--transition-fast),
    box-shadow var(--transition-fast);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 0 0 0 ${({ $active }) => ($active ? '0.3rem' : '0')} rgba(43, 98, 86, 0.24);
    pointer-events: none;
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  span {
    position: absolute;
    left: 0.8rem;
    bottom: 0.8rem;
    display: grid;
    place-items: center;
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.9);
    color: var(--font-title);
    font-size: 1.08rem;
    font-weight: 800;
  }

  &:hover {
    border-color: rgba(43, 98, 86, 0.44);
    box-shadow: var(--shadow-sm);
  }

  ${media.sm`
    flex-basis: 8.8rem;
    border-radius: 1.3rem;
  `}
`;

export const Lightbox = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1100;
  display: grid;
  place-items: center;
  padding: 2rem;
  background: rgba(22, 28, 26, 0.84);

  ${GalleryArrow} {
    position: fixed;
  }
`;

export const LightboxInner = styled.figure`
  width: min(100%, 96rem);
  max-height: 92vh;
  margin: 0;
  display: grid;
  gap: 1rem;
  justify-items: center;

  figcaption {
    color: #fffdf8;
    font-size: 1.45rem;
    line-height: 1.6;
    text-align: center;
  }
`;

export const LightboxViewport = styled.div`
  position: relative;
  width: min(92vw, 96rem);
  height: min(72vh, 60rem);
  display: grid;
  place-items: center;
  overflow: hidden;
  border-radius: 1.8rem;
  background: rgba(233, 241, 238, 0.12);
  box-shadow: var(--shadow-lg);

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }

  ${media.sm`
    width: min(92vw, 100%);
    height: min(62vh, 44rem);
    border-radius: 1.4rem;
  `}
`;

export const LightboxClose = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  z-index: 6;
  width: 4.6rem;
  height: 4.6rem;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  color: var(--font-title);
  font-size: 2.4rem;
  line-height: 1;
  cursor: pointer;
`;
