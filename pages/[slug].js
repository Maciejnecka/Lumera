import FilmDetailPage from '../src/components/FilmDetailPage';
import LocalWindowFilmsPage, {
  LcdInstallationPage,
  LocalWindowFilmsKatowicePage,
} from '../src/components/LocalWindowFilmsPage/LocalWindowFilmsPage';
import PrivacyPolicyPage from '../src/components/PrivacyPolicyPage';
import SeoLandingPage from '../src/components/SeoLandingPage';
import LocalServicesHubPage from '../src/components/LocalServicesHubPage';
import { filmsData, getFilmByPath } from '../src/data/filmsData';
import {
  getLocalServicePageByPath,
  localServicePagesData,
} from '../src/data/localServicePagesData';
import { getProblemPageByPath, problemPagesData } from '../src/data/problemPagesData';
import PageSeo, { buildBreadcrumbSchema } from '../src/seo/pageSeo';

const localPages = {
  'montaz-folii-okiennych-krakow': {
    path: '/montaz-folii-okiennych-krakow',
    component: LocalWindowFilmsPage,
    breadcrumbs: [
      { label: 'Strona główna', href: '/' },
      { label: 'Montaż folii okiennych w Krakowie', href: '/montaz-folii-okiennych-krakow' },
    ],
  },
  'montaz-folii-okiennych-katowice': {
    path: '/montaz-folii-okiennych-katowice',
    component: LocalWindowFilmsKatowicePage,
    breadcrumbs: [
      { label: 'Strona główna', href: '/' },
      { label: 'Montaż folii okiennych w Katowicach', href: '/montaz-folii-okiennych-katowice' },
    ],
  },
  'montaz-folii-lcd': {
    path: '/montaz-folii-lcd',
    component: LcdInstallationPage,
    breadcrumbs: [
      { label: 'Strona główna', href: '/' },
      { label: 'Montaż folii LCD', href: '/montaz-folii-lcd' },
    ],
  },
  'folie-okienne-lokalnie': {
    path: '/folie-okienne-lokalnie',
    component: LocalServicesHubPage,
    breadcrumbs: [
      { label: 'Strona główna', href: '/' },
      { label: 'Folie okienne lokalnie', href: '/folie-okienne-lokalnie' },
    ],
  },
  'polityka-prywatnosci': {
    path: '/polityka-prywatnosci',
    component: PrivacyPolicyPage,
    breadcrumbs: [
      { label: 'Strona główna', href: '/' },
      { label: 'Polityka prywatności', href: '/polityka-prywatnosci' },
    ],
  },
};

const buildFaqSchema = (entity) =>
  entity?.faq?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: entity.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

const buildFilmBreadcrumbs = (film) => [
  { label: 'Strona główna', href: '/' },
  { label: film.name, href: film.path },
];

const buildProblemBreadcrumbs = (page) => [
  { label: 'Strona główna', href: '/' },
  { label: page.title, href: page.path },
];

const buildLocalServiceBreadcrumbs = (page) => [
  { label: 'Strona główna', href: '/' },
  { label: page.title, href: page.path },
];

const withBreadcrumbSchema = (breadcrumbs, ...schemas) => [
  buildBreadcrumbSchema(breadcrumbs),
  ...schemas.filter(Boolean),
];

const SlugPage = ({ slug, path }) => {
  const film = getFilmByPath(path);
  const problemPage = getProblemPageByPath(path);
  const localServicePage = getLocalServicePageByPath(path);
  const localPage = localPages[slug];

  if (film) {
    const breadcrumbs = buildFilmBreadcrumbs(film);

    return (
      <>
        <PageSeo
          path={film.path}
          extraSchema={withBreadcrumbSchema(breadcrumbs, buildFaqSchema(film))}
        />
        <FilmDetailPage film={film} breadcrumbs={breadcrumbs} />
      </>
    );
  }

  if (localPage) {
    const LocalComponent = localPage.component;
    const breadcrumbs = localPage.breadcrumbs;

    return (
      <>
        <PageSeo
          path={localPage.path}
          extraSchema={withBreadcrumbSchema(breadcrumbs)}
        />
        <LocalComponent breadcrumbs={breadcrumbs} />
      </>
    );
  }

  if (problemPage) {
    const breadcrumbs = buildProblemBreadcrumbs(problemPage);

    return (
      <>
        <PageSeo
          path={problemPage.path}
          extraSchema={withBreadcrumbSchema(breadcrumbs, buildFaqSchema(problemPage))}
        />
        <SeoLandingPage page={problemPage} type="problem" breadcrumbs={breadcrumbs} />
      </>
    );
  }

  if (localServicePage) {
    const breadcrumbs = buildLocalServiceBreadcrumbs(localServicePage);

    return (
      <>
        <PageSeo
          path={localServicePage.path}
          extraSchema={withBreadcrumbSchema(breadcrumbs)}
        />
        <SeoLandingPage
          page={localServicePage}
          type="local-service"
          breadcrumbs={breadcrumbs}
        />
      </>
    );
  }

  return null;
};

export const getStaticPaths = () => {
  const filmPaths = filmsData.map((film) => ({
    params: { slug: film.path.replace('/', '') },
  }));
  const localPaths = Object.keys(localPages).map((slug) => ({
    params: { slug },
  }));
  const problemPaths = problemPagesData.map((page) => ({
    params: { slug: page.slug },
  }));
  const localServicePaths = localServicePagesData.map((page) => ({
    params: { slug: page.slug },
  }));

  return {
    paths: [...filmPaths, ...localPaths, ...problemPaths, ...localServicePaths],
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const slug = params.slug;

  return {
    props: {
      slug,
      path: `/${slug}`,
    },
  };
};

export default SlugPage;
