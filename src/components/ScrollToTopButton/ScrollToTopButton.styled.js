import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

export const ScrollButton = styled.button`
  position: fixed;
  right: 2.4rem;
  bottom: 2.4rem;
  z-index: 950;
  width: 5.4rem;
  height: 5.4rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.42);
  border-radius: 999px;
  background: linear-gradient(135deg, var(--accent-primary), #203b34);
  color: #fffdf8;
  box-shadow: 0 18px 38px rgba(31, 55, 48, 0.24);
  cursor: pointer;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  pointer-events: ${(props) => (props.$visible ? 'auto' : 'none')};
  transform: ${(props) =>
    props.$visible ? 'translateY(0) scale(1)' : 'translateY(1rem) scale(0.94)'};
  transition:
    opacity var(--transition-fast),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);

  &::before {
    content: '';
    width: 1rem;
    height: 1rem;
    display: block;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: translateY(0.18rem) rotate(225deg);
  }

  &:hover,
  &:focus-visible {
    transform: ${(props) =>
      props.$visible ? 'translateY(-0.2rem) scale(1.03)' : 'translateY(1rem) scale(0.94)'};
    box-shadow: 0 24px 46px rgba(31, 55, 48, 0.3);
  }

  ${media.sm`
    right: 1.6rem;
    bottom: 1.6rem;
    width: 4.8rem;
    height: 4.8rem;

    &::before {
      width: 0.9rem;
      height: 0.9rem;
    }
  `}
`;
