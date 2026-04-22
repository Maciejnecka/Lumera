import React from 'react';
import FilmDetailPage from '../../FilmDetailPage';
import { getFilmByPath } from '../../../data/filmsData';

const FolieAntyUVPage = () => (
  <FilmDetailPage film={getFilmByPath('/folie-anty-uv')} />
);

export default FolieAntyUVPage;
