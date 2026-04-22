import React from 'react';
import FilmDetailPage from '../../FilmDetailPage';
import { getFilmByPath } from '../../../data/filmsData';

const FolieProjekcyjnePage = () => (
  <FilmDetailPage film={getFilmByPath('/folie-projekcyjne')} />
);

export default FolieProjekcyjnePage;
