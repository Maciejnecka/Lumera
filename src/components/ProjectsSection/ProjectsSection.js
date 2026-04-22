import React from 'react';
import {
  ProjectsWrap,
  SectionIntro,
  ProjectsGrid,
  ProjectCard,
} from './ProjectsSection.styled';

const useCases = [
  {
    title: 'Mieszkania i domy z mocnym słońcem',
    text:
      'Folie pomagają ograniczyć nagrzewanie salonu, sypialni albo dużych przeszkleń od strony południowej i zachodniej.',
  },
  {
    title: 'Biura, gabinety i sale spotkań',
    text:
      'Dobieramy rozwiązania pod komfort pracy przy monitorach, prywatność rozmów i estetyczny wygląd szklanych ścian.',
  },
  {
    title: 'Lokale usługowe i witryny',
    text:
      'Folie mogą poprawić wygląd witryny, ograniczyć wgląd do środka, zabezpieczyć szybę albo chronić ekspozycję przed UV.',
  },
];

const ProjectsSection = () => {
  return (
    <ProjectsWrap id="realizacje">
      <SectionIntro data-aos="fade-up">
        <span>Zastosowania</span>
        <h2>Najczęściej pomagamy tam, gdzie szkło mocno wpływa na komfort wnętrza.</h2>
        <p>
          Do czasu rozbudowy portfolio pokazujemy typowe sytuacje, w których
          montaż folii okiennych ma praktyczny sens dla klienta.
        </p>
      </SectionIntro>

      <ProjectsGrid>
        {useCases.map((item, index) => (
          <ProjectCard
            key={item.title}
            data-aos="fade-up"
            data-aos-delay={index * 70}
          >
            <span>Typowe zastosowanie</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsWrap>
  );
};

export default ProjectsSection;
