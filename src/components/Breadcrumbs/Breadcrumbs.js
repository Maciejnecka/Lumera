import React from 'react';
import Link from 'next/link';
import { BreadcrumbItem, BreadcrumbList, BreadcrumbNav } from './Breadcrumbs.styled';

const Breadcrumbs = ({ items = [] }) => {
  if (!items.length) return null;

  return (
    <BreadcrumbNav aria-label="Breadcrumb">
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <BreadcrumbItem key={`${item.label}-${index}`}>
              {isLast || !item.href ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbNav>
  );
};

export default Breadcrumbs;
