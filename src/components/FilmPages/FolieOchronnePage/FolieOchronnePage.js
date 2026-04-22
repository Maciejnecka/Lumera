import React from 'react';
import FilmDetailPage from '../../FilmDetailPage';
import { getFilmByPath } from '../../../data/filmsData';

const FolieOchronnePage = () => (
  <FilmDetailPage film={getFilmByPath('/folie-ochronne')} />
);

export default FolieOchronnePage;
