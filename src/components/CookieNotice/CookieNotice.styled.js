import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

export const CookieNoticeWrap = styled.div`
  position: fixed;
  left: 50%;
  bottom: 2rem;
  z-index: 1200;
  width: min(calc(100% - 2.4rem), 76rem);
  transform: translateX(-50%);
`;

export const CookieNoticeInner = styled.div`
  display: grid;
  gap: 1.2rem;
  padding: 1.6rem 1.8rem;
  border: 1px solid rgba(35, 48, 44, 0.1);
  border-radius: 2rem;
  background: rgba(255, 253, 248, 0.96);
  box-shadow: 0 20px 44px rgba(23, 36, 32, 0.16);
  backdrop-filter: blur(14px);

  ${media.sm`
    padding: 1.5rem;
    border-radius: 1.6rem;
  `}
`;

export const CookieNoticeText = styled.p`
  margin: 0;
  color: var(--font-dark);
  font-size: 1.42rem;
  line-height: 1.65;
`;

export const CookieNoticeActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  a,
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 4.2rem;
    padding: 0 1.5rem;
    border-radius: 999px;
    font-family: inherit;
    font-size: 1.35rem;
    font-weight: 700;
  }

  a {
    border: 1px solid rgba(35, 48, 44, 0.12);
    background: rgba(255, 255, 255, 0.72);
    color: var(--font-dark);
  }

  button {
    border: 0;
    background: linear-gradient(135deg, var(--accent-primary), #3f7a6e);
    color: #fffdf8;
    cursor: pointer;
  }

  ${media.sm`
    justify-content: stretch;

    a,
    button {
      width: 100%;
    }
  `}
`;
