import React from 'react';
import Header from '../Header';
import AboutSection from '../AboutSection';
import TestimonialsStrip from '../TestimonialsStrip';
import WindowFilmsSection from '../WindowFilmsSection';
import ProcessSection from '../ProcessSection';
import ProjectsSection from '../ProjectsSection';
import { FinderTeaser } from '../FilmFinder/FinderLinks';

const HomePage = () => {
  return (
    <main id="main-content">
      <Header />
      <FinderTeaser />
      <AboutSection />
      <WindowFilmsSection />
      <ProcessSection />
      <TestimonialsStrip />
      <ProjectsSection />
    </main>
  );
};

export default HomePage;
