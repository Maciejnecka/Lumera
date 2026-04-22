import React from 'react';
import FilmDetailPage from '../../FilmDetailPage';
import { getFilmByPath } from '../../../data/filmsData';

const FolieLustraWeneckiePage = () => (
  <FilmDetailPage film={getFilmByPath('/folie-lustra-weneckie')} />
);

export default FolieLustraWeneckiePage;
