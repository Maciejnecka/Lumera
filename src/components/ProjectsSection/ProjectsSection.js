import React from 'react';
import { getFeaturedProjects } from '../../data/projectPagesData';
import {
  ProjectCardBody,
  ProjectCardImage,
  ProjectMeta,
  ProjectsWrap,
  SectionIntro,
  ProjectsGrid,
  ProjectCard,
  ProjectsActions,
} from './ProjectsSection.styled';

const featuredProjects = getFeaturedProjects(3);

const ProjectsSection = () => {
  return (
    <ProjectsWrap id="realizacje">
      <SectionIntro data-aos="fade-up">
        <span>Realizacje</span>
        <h2>Realne montaże, które pokazują efekt na szybie.</h2>
        <p>
          Na stronie głównej pokazujemy tylko wybrane realizacje. Pełne galerie,
          opis problemu i powiązane usługi są dostępne na osobnych podstronach realizacji.
        </p>
      </SectionIntro>

      <ProjectsGrid>
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.path}
            href={project.path}
            data-aos="fade-up"
            data-aos-delay={index * 70}
          >
            <ProjectCardImage>
              <img
                src={project.coverImage}
                width={project.coverWidth}
                height={project.coverHeight}
                alt={project.images?.[0]?.alt || project.title}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
              <span>{project.city}</span>
            </ProjectCardImage>
            <ProjectCardBody>
              <ProjectMeta>
                <span>{project.serviceType}</span>
              </ProjectMeta>
              <h3>{project.title}</h3>
              <p>{project.seoDescription}</p>
            </ProjectCardBody>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      <ProjectsActions data-aos="fade-up">
        <a href="/realizacje">Zobacz wszystkie realizacje</a>
      </ProjectsActions>
    </ProjectsWrap>
  );
};

export default ProjectsSection;
