import styled from 'styled-components';

export const BreadcrumbNav = styled.nav`
  margin-bottom: 1.8rem;
`;

export const BreadcrumbList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.65rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const BreadcrumbItem = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  color: var(--font-main);
  font-size: 1.3rem;
  line-height: 1.5;

  &:not(:last-child)::after {
    content: '/';
    color: rgba(43, 98, 86, 0.45);
  }

  a {
    color: var(--accent-primary);
    transition: opacity var(--transition-fast);
  }

  a:hover {
    opacity: 0.72;
  }

  span[aria-current='page'] {
    color: rgba(27, 38, 35, 0.78);
  }
`;
