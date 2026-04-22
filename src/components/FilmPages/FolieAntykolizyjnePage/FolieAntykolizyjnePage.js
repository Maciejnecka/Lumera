import React from 'react';
import FilmDetailPage from '../../FilmDetailPage';
import { getFilmByPath } from '../../../data/filmsData';

const FolieAntykolizyjnePage = () => (
  <FilmDetailPage film={getFilmByPath('/folie-antykolizyjne')} />
);

export default FolieAntykolizyjnePage;
