import React from 'react';
import FilmDetailPage from '../../FilmDetailPage';
import { getFilmByPath } from '../../../data/filmsData';

const FolieTermoizolacyjnePage = () => (
  <FilmDetailPage film={getFilmByPath('/folie-termoizolacyjne')} />
);

export default FolieTermoizolacyjnePage;
