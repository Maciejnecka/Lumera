import React from 'react';
import { filmsData } from '../../data/filmsData';
import { localServicePagesData } from '../../data/localServicePagesData';
import { getProjectsByFilmPath } from '../../data/projectPagesData';
import { serviceHubPagesData } from '../../data/serviceHubPagesData';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import ProjectGallery from '../ProjectGallery';
import RelatedProjectsSection from '../RelatedProjectsSection';
import {
  ProjectActions,
  ProjectEyebrow,
  ProjectFaq,
  ProjectHero,
  ProjectHeroCopy,
  ProjectHeroVisual,
  ProjectLead,
  ProjectLinkCard,
  ProjectLinkGrid,
  ProjectList,
  ProjectMetaCard,
  ProjectMetaGrid,
  ProjectNote,
  ProjectPageWrap,
  ProjectSection,
  ProjectSectionIntro,
  ProjectStoryCard,
  ProjectStoryGrid,
  ProjectTitle,
} from './ProjectDetailPage.styled';

const getFilm = (path) => filmsData.find((film) => film.path === path);
const getServiceHub = (path) => serviceHubPagesData.find((page) => page.path === path);
const getLocalService = (path) => localServicePagesData.find((page) => page.path === path);
const getServiceEntity = (path) => getFilm(path) || getServiceHub(path);

const storeContactTopic = (topic) => {
  if (!topic || typeof window === 'undefined') return;

  sessionStorage.setItem('lumera-contact-topic', topic);
};

const ProjectDetailPage = ({ project, breadcrumbs }) => {
  const relatedFilms = (project.relatedFilmPaths || [project.relatedFilmPath])
    .map(getFilm)
    .filter(Boolean);
  const relatedServiceEntities = (project.relatedServicePaths || project.relatedFilmPaths || [
    project.relatedFilmPath,
  ])
    .map(getServiceEntity)
    .filter(Boolean);
  const relatedLocalPages = (project.relatedLocalPaths || [project.relatedLocalPath])
    .map(getLocalService)
    .filter(Boolean);
  const relatedProjects = getProjectsByFilmPath(project.relatedFilmPath)
    .filter((item) => item.path !== project.path)
    .slice(0, 3);
  const storyTitle = project.storyTitle || 'Od problemu do dobranego efektu na szybie.';
  const coverCaption = project.coverCaption || 'Zdjęcie realizacji';

  return (
    <ProjectPageWrap id="main-content">
      <ProjectHero>
        <ProjectHeroCopy data-aos="fade-up">
          <Breadcrumbs items={breadcrumbs} />
          <ProjectEyebrow>{project.eyebrow}</ProjectEyebrow>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectLead>{project.lead}</ProjectLead>

          <ProjectMetaGrid>
            <ProjectMetaCard>
              <span>Miasto</span>
              <strong>{project.city}</strong>
            </ProjectMetaCard>
            <ProjectMetaCard>
              <span>Obiekt</span>
              <strong>{project.objectType}</strong>
            </ProjectMetaCard>
            <ProjectMetaCard>
              <span>Typ folii</span>
              <strong>{project.serviceType}</strong>
            </ProjectMetaCard>
          </ProjectMetaGrid>

          <ProjectActions>
            <a
              href="/kontakt"
              onClick={() => storeContactTopic(project.contactTopic)}
            >
              Zapytaj o podobny montaż
            </a>
            {relatedServiceEntities[0] && <a href={relatedServiceEntities[0].path}>Zobacz usługę</a>}
            <a href="/realizacje">Wróć do realizacji</a>
          </ProjectActions>
        </ProjectHeroCopy>

        <ProjectHeroVisual data-aos="fade-left">
          <img
            src={project.coverImage}
            width={project.coverWidth}
            height={project.coverHeight}
            alt={project.images?.[0]?.alt || project.title}
            loading="eager"
            decoding="async"
          />
          <figcaption>{coverCaption}</figcaption>
        </ProjectHeroVisual>
      </ProjectHero>

      <ProjectSection>
        <ProjectSectionIntro data-aos="fade-up">
          <span>Przebieg realizacji</span>
          <h2>{storyTitle}</h2>
        </ProjectSectionIntro>
        <ProjectStoryGrid>
          <ProjectStoryCard data-aos="fade-up">
            <h3>Problem</h3>
            <p>{project.problem}</p>
          </ProjectStoryCard>
          <ProjectStoryCard data-aos="fade-up" data-aos-delay="60">
            <h3>Rozwiązanie</h3>
            <p>{project.solution}</p>
          </ProjectStoryCard>
          <ProjectStoryCard data-aos="fade-up" data-aos-delay="120">
            <h3>Efekt</h3>
            <p>{project.result}</p>
          </ProjectStoryCard>
        </ProjectStoryGrid>
      </ProjectSection>

      <ProjectSection>
        <ProjectSectionIntro data-aos="fade-up">
          <span>Zakres prac</span>
          <h2>Co było ważne przy tym montażu?</h2>
          <p>{project.locationContext}</p>
        </ProjectSectionIntro>
        <ProjectList data-aos="fade-up">
          {project.scope.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ProjectList>
      </ProjectSection>

      <ProjectSection>
        <ProjectSectionIntro data-aos="fade-up">
          <span>Zdjęcia</span>
          <h2>Galeria realizacji</h2>
        </ProjectSectionIntro>
        <ProjectGallery images={project.images} />
      </ProjectSection>

      <ProjectSection>
        <ProjectSectionIntro data-aos="fade-up">
          <span>Powiązane usługi</span>
          <h2>Ten montaż łączy kilka tematów.</h2>
          <p>{project.relatedServicesIntro}</p>
        </ProjectSectionIntro>
        <ProjectLinkGrid>
          {relatedServiceEntities.map((film, index) => (
            <ProjectLinkCard
              key={film.path}
              href={film.path}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <span>Usługa</span>
              <strong>{film.name || film.title}</strong>
              <p>{film.shortDescription || film.seoDescription}</p>
            </ProjectLinkCard>
          ))}
          {relatedLocalPages.map((page, index) => (
            <ProjectLinkCard
              key={page.path}
              href={page.path}
              data-aos="fade-up"
              data-aos-delay={(relatedServiceEntities.length + index) * 50}
            >
              <span>Lokalnie</span>
              <strong>{page.title}</strong>
              <p>{page.seoDescription}</p>
            </ProjectLinkCard>
          ))}
          <ProjectLinkCard
            href="/kontakt"
            onClick={() => storeContactTopic(project.contactTopic)}
            data-aos="fade-up"
            data-aos-delay={(relatedServiceEntities.length + relatedLocalPages.length) * 50}
          >
            <span>Wycena</span>
            <strong>Zapytaj o podobny montaż</strong>
            <p>{project.whatToSend}</p>
          </ProjectLinkCard>
        </ProjectLinkGrid>
      </ProjectSection>

      <ProjectSection>
        <ProjectNote data-aos="fade-up">
          <p>{project.quote}</p>
        </ProjectNote>
      </ProjectSection>

      {project.faq?.length > 0 && (
        <ProjectSection>
          <ProjectSectionIntro data-aos="fade-up">
            <span>FAQ</span>
            <h2>Najczęstsze pytania przy podobnej realizacji</h2>
          </ProjectSectionIntro>
          <ProjectFaq data-aos="fade-up">
            {project.faq.map((item) => (
              <article key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </ProjectFaq>
        </ProjectSection>
      )}

      <RelatedProjectsSection
        projects={relatedProjects}
        title="Inne realizacje z podobnym typem folii"
        lead="Ta sekcja będzie rosła razem z kolejnymi realizacjami z montaży folii okiennych, bez ładowania pełnych galerii na stronach usług."
      />
    </ProjectPageWrap>
  );
};

export default ProjectDetailPage;
