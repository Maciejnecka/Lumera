import React from 'react';
import FilmDetailPage from '../../FilmDetailPage';
import { getFilmByPath } from '../../../data/filmsData';

const FolieNaPoliweglanPage = () => (
  <FilmDetailPage film={getFilmByPath('/folie-na-poliweglan')} />
);

export default FolieNaPoliweglanPage;
