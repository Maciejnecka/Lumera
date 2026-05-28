import ProjectDetailPage from '../../src/components/ProjectDetailPage';
import {
  getProjectPageBySlug,
  projectPagesData,
} from '../../src/data/projectPagesData';
import PageSeo, { buildBreadcrumbSchema, siteUrl } from '../../src/seo/pageSeo';

const buildProjectBreadcrumbs = (project) => [
  { label: 'Strona główna', href: '/' },
  { label: 'Realizacje', href: '/realizacje' },
  { label: project.title, href: project.path },
];

const buildProjectSchema = (project) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${siteUrl}${project.path}#article`,
  headline: project.title,
  description: project.seoDescription,
  articleSection: 'Realizacje folii okiennych',
  keywords: project.tags?.join(', '),
  image: project.images.map((image) => `${siteUrl}${image.full}`),
  datePublished: project.datePublished,
  dateModified: project.dateModified || project.datePublished,
  inLanguage: 'pl-PL',
  author: {
    '@id': `${siteUrl}/#localbusiness`,
  },
  publisher: {
    '@id': `${siteUrl}/#localbusiness`,
  },
  mainEntityOfPage: `${siteUrl}${project.path}`,
  spatialCoverage: {
    '@type': 'Place',
    name: project.city,
  },
  about: [
    {
      '@type': 'Service',
      name: project.serviceType,
      url: `${siteUrl}${project.relatedFilmPath}`,
    },
    {
      '@type': 'Place',
      name: project.city,
    },
  ],
});

const buildFaqSchema = (project) =>
  project.faq?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: project.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

const ProjectPage = ({ project }) => {
  const breadcrumbs = buildProjectBreadcrumbs(project);

  return (
    <>
      <PageSeo
        path={project.path}
        extraSchema={[
          buildBreadcrumbSchema(breadcrumbs),
          buildProjectSchema(project),
          buildFaqSchema(project),
        ]}
      />
      <ProjectDetailPage project={project} breadcrumbs={breadcrumbs} />
    </>
  );
};

export const getStaticPaths = () => ({
  paths: projectPagesData.map((project) => ({
    params: { slug: project.slug },
  })),
  fallback: false,
});

export const getStaticProps = ({ params }) => ({
  props: {
    project: getProjectPageBySlug(params.slug),
  },
});

export default ProjectPage;
