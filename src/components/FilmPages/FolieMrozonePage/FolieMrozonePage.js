import React from 'react';
import FilmDetailPage from '../../FilmDetailPage';
import { getFilmByPath } from '../../../data/filmsData';

const FolieMrozonePage = () => (
  <FilmDetailPage film={getFilmByPath('/folie-mrozone')} />
);

export default FolieMrozonePage;
