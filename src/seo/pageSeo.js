import Head from 'next/head';
import { filmsData } from '../data/filmsData';
import { localServicePagesData } from '../data/localServicePagesData';
import { problemPagesData } from '../data/problemPagesData';

export const siteUrl = 'https://lumera.pl';

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

const toAbsoluteUrl = (path = '/') => {
  if (!path) return siteUrl;
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
};

const normalizeSchemaInput = (schema) => {
  if (!schema) return [];
  return Array.isArray(schema) ? schema.filter(Boolean) : [schema];
};

export const getSeoForPath = (path = '/') => {
  const normalizedPath = path === '' ? '/' : path;
  const film = filmsData.find((item) => item.path === normalizedPath);
  const problemPage = problemPagesData.find((item) => item.path === normalizedPath);
  const localServicePage = localServicePagesData.find((item) => item.path === normalizedPath);
  const staticPage = staticPages[normalizedPath];

  if (film) {
    return {
      title: `${film.name} Kraków i Katowice | Lumera`,
      description: trimDescription(film.seoDescription || film.lead),
      url: `${siteUrl}${film.path}`,
      type: 'service',
    };
  }

  if (problemPage) {
    return {
      title: problemPage.seoTitle,
      description: trimDescription(problemPage.seoDescription),
      url: `${siteUrl}${problemPage.path}`,
      type: 'article',
    };
  }

  if (localServicePage) {
    return {
      title: localServicePage.seoTitle,
      description: trimDescription(localServicePage.seoDescription),
      url: `${siteUrl}${localServicePage.path}`,
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
  image: `${siteUrl}/og-image.png`,
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
    { '@type': 'Country', name: 'Polska' },
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
  makesOffer: [
    ...filmsData.map((film) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: film.name,
        url: `${siteUrl}${film.path}`,
        areaServed: [
          { '@type': 'City', name: 'Kraków' },
          { '@type': 'City', name: 'Katowice' },
          { '@type': 'Country', name: 'Polska' },
        ],
      },
    })),
    ...localServicePagesData.map((page) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: page.title,
        url: `${siteUrl}${page.path}`,
        areaServed: page.city,
      },
    })),
  ],
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

export const buildBreadcrumbSchema = (items = []) => {
  if (!items.length) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: toAbsoluteUrl(item.href || '/'),
    })),
  };
};

const PageSeo = ({ path = '/', extraSchema }) => {
  const seo = getSeoForPath(path);
  const schemas = [organizationSchema, websiteSchema, ...normalizeSchemaInput(extraSchema)];
  const openGraphType = seo.type === 'article' ? 'article' : 'website';

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={seo.url} />
      <meta property="og:type" content={openGraphType} />
      <meta property="og:locale" content="pl_PL" />
      <meta property="og:site_name" content="Lumera" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={`${siteUrl}/og-image.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Lumera - folie okienne i montaż" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
      {schemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
};

export default PageSeo;
