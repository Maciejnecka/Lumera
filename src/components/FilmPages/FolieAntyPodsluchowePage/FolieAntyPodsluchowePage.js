import React from 'react';
import FilmDetailPage from '../../FilmDetailPage';
import { getFilmByPath } from '../../../data/filmsData';

const FolieAntyPodsluchowePage = () => (
  <FilmDetailPage film={getFilmByPath('/folie-anty-podsluchowe')} />
);

export default FolieAntyPodsluchowePage;
