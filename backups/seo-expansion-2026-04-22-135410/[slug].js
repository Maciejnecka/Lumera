import FilmDetailPage from '../src/components/FilmDetailPage';
import LocalWindowFilmsPage, {
  LocalWindowFilmsKatowicePage,
} from '../src/components/LocalWindowFilmsPage/LocalWindowFilmsPage';
import PrivacyPolicyPage from '../src/components/PrivacyPolicyPage';
import { filmsData, getFilmByPath } from '../src/data/filmsData';
import PageSeo from '../src/seo/pageSeo';

const localPages = {
  'montaz-folii-okiennych-krakow': {
    path: '/montaz-folii-okiennych-krakow',
    component: LocalWindowFilmsPage,
  },
  'montaz-folii-okiennych-katowice': {
    path: '/montaz-folii-okiennych-katowice',
    component: LocalWindowFilmsKatowicePage,
  },
  'polityka-prywatnosci': {
    path: '/polityka-prywatnosci',
    component: PrivacyPolicyPage,
  },
};

const buildFaqSchema = (film) =>
  film?.faq?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: film.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

const SlugPage = ({ slug, path }) => {
  const film = getFilmByPath(path);
  const localPage = localPages[slug];

  if (film) {
    return (
      <>
        <PageSeo path={film.path} extraSchema={buildFaqSchema(film)} />
        <FilmDetailPage film={film} />
      </>
    );
  }

  if (localPage) {
    const LocalComponent = localPage.component;

    return (
      <>
        <PageSeo path={localPage.path} />
        <LocalComponent />
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

  return {
    paths: [...filmPaths, ...localPaths],
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
