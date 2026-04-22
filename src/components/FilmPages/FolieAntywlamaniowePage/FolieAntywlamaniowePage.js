import React from 'react';
import FilmDetailPage from '../../FilmDetailPage';
import { getFilmByPath } from '../../../data/filmsData';

const FolieAntywlamaniowePage = () => (
  <FilmDetailPage film={getFilmByPath('/folie-antywlamaniowe')} />
);

export default FolieAntywlamaniowePage;
