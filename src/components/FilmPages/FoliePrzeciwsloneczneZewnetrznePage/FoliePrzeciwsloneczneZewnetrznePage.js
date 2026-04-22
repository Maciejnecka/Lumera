import React from 'react';
import FilmDetailPage from '../../FilmDetailPage';
import { getFilmByPath } from '../../../data/filmsData';

const FoliePrzeciwsloneczneZewnetrznePage = () => (
  <FilmDetailPage film={getFilmByPath('/folie-przeciwsloneczne-zewnetrzne')} />
);

export default FoliePrzeciwsloneczneZewnetrznePage;
