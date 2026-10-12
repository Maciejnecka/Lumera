import { localServicePagesData } from './localServicePagesData';

export const localCityLinksData = [
  {
    path: '/montaz-folii-okiennych-krakow',
    city: 'Kraków',
    title: 'Montaż folii okiennych w Krakowie',
    seoDescription: 'Dobór folii do mieszkań, biur i witryn w Krakowie i okolicach: słońce, prywatność oraz zabezpieczenie szyb.',
  },
  {
    path: '/montaz-folii-okiennych-katowice',
    city: 'Katowice',
    title: 'Montaż folii okiennych w Katowicach',
    seoDescription: 'Folie okienne do biur, lokali i mieszkań w Katowicach i okolicach. Dobór rozwiązania i ustalenie zakresu montażu.',
  },
];

export const getLocalPageLink = (path) =>
  [...localCityLinksData, ...localServicePagesData].find((page) => page.path === path);
