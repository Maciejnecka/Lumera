import React from 'react';
import FilmDetailPage from '../../FilmDetailPage';
import { getFilmByPath } from '../../../data/filmsData';

const FolieMatowePage = () => (
  <FilmDetailPage film={getFilmByPath('/folie-matowe')} />
);

export default FolieMatowePage;
