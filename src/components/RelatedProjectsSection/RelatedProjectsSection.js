import React from 'react';
import {
  RelatedProjectBody,
  RelatedProjectCard,
  RelatedProjectImage,
  RelatedProjectsGrid,
  RelatedProjectsIntro,
  RelatedProjectsWrap,
} from './RelatedProjectsSection.styled';

const RelatedProjectsSection = ({
  projects = [],
  title = 'Realizacje z tym typem folii',
  lead = 'Zobacz podobne montaże i przejdź od zdjęć do konkretnej usługi lub wyceny.',
}) => {
  if (!projects.length) return null;

  return (
    <RelatedProjectsWrap>
      <RelatedProjectsIntro data-aos="fade-up">
        <span>Realizacje</span>
        <h2>{title}</h2>
        <p>{lead}</p>
      </RelatedProjectsIntro>
      <RelatedProjectsGrid>
        {projects.map((project, index) => (
          <RelatedProjectCard
            key={project.path}
            href={project.path}
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <RelatedProjectImage>
              <img
                src={project.coverImage}
                width={project.coverWidth}
                height={project.coverHeight}
                alt={project.images?.[0]?.alt || project.title}
                loading="lazy"
                decoding="async"
              />
            </RelatedProjectImage>
            <RelatedProjectBody>
              <span>{project.city} / {project.serviceType}</span>
              <strong>{project.title}</strong>
              <p>{project.seoDescription}</p>
            </RelatedProjectBody>
          </RelatedProjectCard>
        ))}
      </RelatedProjectsGrid>
    </RelatedProjectsWrap>
  );
};

export default RelatedProjectsSection;
