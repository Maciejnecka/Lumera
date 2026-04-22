import React from 'react';
import FilmDetailPage from '../../FilmDetailPage';
import { getFilmByPath } from '../../../data/filmsData';

const FolieZabezpieczajacePage = () => (
  <FilmDetailPage film={getFilmByPath('/folie-zabezpieczajace')} />
);

export default FolieZabezpieczajacePage;
