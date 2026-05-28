import ProjectsIndexPage from '../src/components/ProjectsIndexPage';
import { projectPagesData } from '../src/data/projectPagesData';
import PageSeo, { buildBreadcrumbSchema, siteUrl } from '../src/seo/pageSeo';

const breadcrumbs = [
  { label: 'Strona główna', href: '/' },
  { label: 'Realizacje', href: '/realizacje' },
];

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${siteUrl}/realizacje#collection`,
  name: 'Realizacje Lumera',
  description:
    'Realizacje z montaży folii okiennych Lumera: demontaż starych folii, efekt przed i po oraz powiązane usługi.',
  url: `${siteUrl}/realizacje`,
  inLanguage: 'pl-PL',
  isPartOf: {
    '@id': `${siteUrl}/#website`,
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: projectPagesData.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: project.title,
      url: `${siteUrl}${project.path}`,
    })),
  },
};

const ProjectsPage = () => (
  <>
    <PageSeo
      path="/realizacje"
      extraSchema={[buildBreadcrumbSchema(breadcrumbs), collectionSchema]}
    />
    <ProjectsIndexPage breadcrumbs={breadcrumbs} />
  </>
);

export default ProjectsPage;
