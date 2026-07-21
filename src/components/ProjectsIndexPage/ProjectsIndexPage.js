import React, { useMemo, useState } from 'react';
import {
  getFeaturedProjects,
  getProjectRegion,
  getProjectServiceFilters,
  projectPagesData,
} from '../../data/projectPagesData';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import {
  EmptyProjects,
  FilterGroup,
  ProjectCard,
  ProjectCardBody,
  ProjectCardImage,
  ProjectFilters,
  ProjectMeta,
  ProjectsGrid,
  ProjectsHero,
  ProjectsHeroCopy,
  ProjectsHeroPanel,
  ProjectsIndexWrap,
  ShowMoreButton,
} from './ProjectsIndexPage.styled';

const INITIAL_VISIBLE_PROJECTS = 9;
const ALL_FILTER = 'all';

const uniqueRegions = (items) =>
  [...new Set(items.map(getProjectRegion).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, 'pl')
  );

const uniqueServiceFilters = (items) =>
  [...new Set(items.flatMap(getProjectServiceFilters).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, 'pl')
  );

const formatRegionLabel = (region) => `${region} i okolice`;

const ProjectCardItem = ({ project, eager = false }) => (
  <ProjectCard href={project.path}>
    <ProjectCardImage>
      <img
        src={project.coverImage}
        width={project.coverWidth}
        height={project.coverHeight}
        alt={project.images?.[0]?.alt || project.title}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
      <span>{project.city}</span>
    </ProjectCardImage>
    <ProjectCardBody>
      <ProjectMeta>
        <span>{project.serviceType}</span>
      </ProjectMeta>
      <h2>{project.title}</h2>
      <p>{project.seoDescription}</p>
    </ProjectCardBody>
  </ProjectCard>
);

const ProjectsIndexPage = ({ breadcrumbs }) => {
  const [serviceFilter, setServiceFilter] = useState(ALL_FILTER);
  const [regionFilter, setRegionFilter] = useState(ALL_FILTER);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_PROJECTS);
  const heroProject = getFeaturedProjects(1)[0];

  const serviceTypes = useMemo(() => uniqueServiceFilters(projectPagesData), []);
  const regions = useMemo(() => uniqueRegions(projectPagesData), []);

  const filteredProjects = projectPagesData.filter((project) => {
    const matchesService =
      serviceFilter === ALL_FILTER || getProjectServiceFilters(project).includes(serviceFilter);
    const matchesRegion =
      regionFilter === ALL_FILTER || getProjectRegion(project) === regionFilter;

    return matchesService && matchesRegion;
  });

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = filteredProjects.length > visibleProjects.length;

  const setFilter = (setter) => (value) => {
    setter(value);
    setVisibleCount(INITIAL_VISIBLE_PROJECTS);
  };

  return (
    <ProjectsIndexWrap id="main-content">
      <ProjectsHero>
        <ProjectsHeroCopy data-aos="fade-up">
          <Breadcrumbs items={breadcrumbs} />
          <span>Realizacje Lumera</span>
          <h1>Realizacje z montaży folii okiennych.</h1>
          <p>
            Zbieramy tu konkretne montaże: problem klienta, dobrane rozwiązanie,
            zakres prac, efekt i zdjęcia. Dzięki temu łatwiej zobaczyć, jak dana folia
            zachowuje się na realnej szybie, a nie tylko w opisie produktu.
          </p>
        </ProjectsHeroCopy>
        <ProjectsHeroPanel href={heroProject.path} data-aos="fade-up" data-aos-delay="80">
          <img
            src={heroProject.coverImage}
            width={heroProject.coverWidth}
            height={heroProject.coverHeight}
            alt={heroProject.images?.[0]?.alt || heroProject.title}
            loading="eager"
            decoding="async"
          />
          <div>
            <span>Wyróżniona realizacja</span>
            <strong>{heroProject.title}</strong>
            <p>{heroProject.seoDescription}</p>
          </div>
        </ProjectsHeroPanel>
      </ProjectsHero>

      <ProjectFilters aria-label="Filtry realizacji" data-aos="fade-up">
        <FilterGroup>
          <span>Typ folii</span>
          <button
            type="button"
            className={serviceFilter === ALL_FILTER ? 'is-active' : undefined}
            onClick={() => setFilter(setServiceFilter)(ALL_FILTER)}
          >
            Wszystkie
          </button>
          {serviceTypes.map((serviceType) => (
            <button
              type="button"
              key={serviceType}
              className={serviceFilter === serviceType ? 'is-active' : undefined}
              onClick={() => setFilter(setServiceFilter)(serviceType)}
            >
              {serviceType}
            </button>
          ))}
        </FilterGroup>
        <FilterGroup>
          <span>Obszar</span>
          <button
            type="button"
            className={regionFilter === ALL_FILTER ? 'is-active' : undefined}
            onClick={() => setFilter(setRegionFilter)(ALL_FILTER)}
          >
            Wszystkie
          </button>
          {regions.map((region) => (
            <button
              type="button"
              key={region}
              className={regionFilter === region ? 'is-active' : undefined}
              onClick={() => setFilter(setRegionFilter)(region)}
            >
              {formatRegionLabel(region)}
            </button>
          ))}
        </FilterGroup>
      </ProjectFilters>

      {visibleProjects.length > 0 ? (
        <>
          <ProjectsGrid>
            {visibleProjects.map((project, index) => (
              <ProjectCardItem
                key={project.path}
                project={project}
                eager={index === 0}
              />
            ))}
          </ProjectsGrid>
          {hasMore && (
            <ShowMoreButton
              type="button"
              onClick={() => setVisibleCount((current) => current + INITIAL_VISIBLE_PROJECTS)}
            >
              Pokaż więcej realizacji
            </ShowMoreButton>
          )}
        </>
      ) : (
        <EmptyProjects>
          Nie ma jeszcze realizacji dla wybranego zestawu filtrów. Wyczyść filtry albo
          wróć do pełnej listy.
        </EmptyProjects>
      )}
    </ProjectsIndexWrap>
  );
};

export default ProjectsIndexPage;
