import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(43, 98, 86, 0.38);
    transform: scale(1);
  }

  70% {
    box-shadow: 0 0 0 1.1rem rgba(43, 98, 86, 0);
    transform: scale(1.08);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(43, 98, 86, 0);
    transform: scale(1);
  }
`;

export const SmartPreviewWrap = styled.div`
  display: grid;
  gap: ${(props) => (props.$variant === 'detail' ? '1.4rem' : '1rem')};
  align-self: start;
`;

export const SmartPreviewImageBox = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: ${(props) => (props.$variant === 'detail' ? '3rem' : '1.8rem')};
  background: rgba(249, 246, 240, 0.95);
  box-shadow: ${(props) => (props.$variant === 'detail' ? 'var(--shadow-lg)' : 'none')};
`;

export const SmartPreviewImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const SmartPreviewShade = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(135deg, rgba(18, 30, 34, 0.5), rgba(42, 63, 66, 0.18)),
    radial-gradient(circle at 24% 18%, rgba(255, 255, 255, 0.34), transparent 24%);
  opacity: ${(props) => (props.$isPowered ? '0.12' : '0.72')};
  transition: opacity 0.45s ease;
  pointer-events: none;
`;

export const SmartPreviewControl = styled.button`
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 0.9rem;
  justify-self: center;
  padding: 0.8rem 1.15rem 0.8rem 0.9rem;
  border: 1px solid rgba(35, 48, 44, 0.12);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.82);
  color: var(--font-dark);
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition:
    transform var(--transition-fast),
    background var(--transition-fast),
    box-shadow var(--transition-fast);

  &:hover {
    transform: translateY(-2px);
    background: #fffdf8;
    box-shadow: var(--shadow-md);
  }

  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`;

export const SmartPreviewDot = styled.span`
  width: 1.35rem;
  height: 1.35rem;
  display: inline-flex;
  flex: 0 0 auto;
  border-radius: 999px;
  background: ${(props) => (props.$isPowered ? '#d7b46a' : 'var(--accent-primary)')};
  animation: ${pulse} 1.8s ease-out infinite;
`;
