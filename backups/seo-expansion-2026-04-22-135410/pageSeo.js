import Head from 'next/head';
import { filmsData } from '../data/filmsData';

const siteUrl = 'https://lumera.pl';
const defaultTitle = 'Lumera | Montaż folii okiennych Kraków i okolice';
const defaultDescription =
  'Lumera oferuje montaż folii okiennych do domów, mieszkań, biur i lokali w Krakowie i okolicach. Folie przeciwsłoneczne, matowe, ochronne, antywłamaniowe i inne rozwiązania.';

const staticPages = {
  '/': {
    title: defaultTitle,
    description: defaultDescription,
  },
  '/montaz-folii-okiennych-krakow': {
    title: 'Montaż folii okiennych Kraków i okolice | Lumera',
    description:
      'Montaż folii okiennych w Krakowie i okolicach. Folie przeciwsłoneczne, matowe, ochronne, antywłamaniowe, specjalistyczne oraz demontaż folii.',
  },
  '/montaz-folii-okiennych-katowice': {
    title: 'Montaż folii okiennych Katowice i okolice | Lumera',
    description:
      'Montaż folii okiennych w Katowicach i okolicach. Dobór folii przeciwsłonecznych, matowych, ochronnych, antywłamaniowych i specjalistycznych.',
  },
  '/polityka-prywatnosci': {
    title: 'Polityka prywatności | Lumera',
    description:
      'Polityka prywatności Lumera: informacje o przetwarzaniu danych z formularza kontaktowego, załączników, kontaktu mailowego i telefonicznego.',
  },
};

const trimDescription = (text) => {
  if (!text) return defaultDescription;
  return text.length > 155 ? `${text.slice(0, 152).trim()}...` : text;
};

export const getSeoForPath = (path = '/') => {
  const normalizedPath = path === '' ? '/' : path;
  const film = filmsData.find((item) => item.path === normalizedPath);
  const staticPage = staticPages[normalizedPath];

  if (film) {
    return {
      title: `${film.name} Kraków i Katowice | Lumera`,
      description: trimDescription(film.seoDescription || film.lead),
      url: `${siteUrl}${film.path}`,
      type: 'service',
    };
  }

  return {
    title: staticPage?.title || defaultTitle,
    description: staticPage?.description || defaultDescription,
    url: `${siteUrl}${normalizedPath === '/' ? '/' : normalizedPath}`,
    type: 'website',
  };
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#localbusiness`,
  name: 'Lumera',
  url: siteUrl,
  image: `${siteUrl}/og-image.svg`,
  logo: `${siteUrl}/favicon.svg`,
  email: 'biuro@folielumera.pl',
  telephone: '+48605505714',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ul. Łanowa 14',
    postalCode: '32-064',
    addressLocality: 'Rudawa',
    addressCountry: 'PL',
  },
  areaServed: [
    { '@type': 'City', name: 'Kraków' },
    { '@type': 'City', name: 'Katowice' },
    { '@type': 'Place', name: 'Rudawa' },
    { '@type': 'Place', name: 'Zabierzów' },
    { '@type': 'Place', name: 'Krzeszowice' },
    { '@type': 'AdministrativeArea', name: 'Małopolskie' },
    { '@type': 'AdministrativeArea', name: 'Śląskie' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '15:00',
    },
  ],
  makesOffer: filmsData.map((film) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: film.name,
      url: `${siteUrl}${film.path}`,
      areaServed: 'Kraków, Katowice i okolice',
    },
  })),
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: 'Lumera',
  url: siteUrl,
  inLanguage: 'pl-PL',
  publisher: {
    '@id': `${siteUrl}/#localbusiness`,
  },
};

const PageSeo = ({ path = '/', extraSchema }) => {
  const seo = getSeoForPath(path);

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pl_PL" />
      <meta property="og:site_name" content="Lumera" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={`${siteUrl}/og-image.svg`} />
      <meta property="og:image:alt" content="Logo Lumera oraz opis: folie okienne i montaż" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.svg`} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {extraSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(extraSchema) }}
        />
      )}
    </Head>
  );
};

export default PageSeo;
