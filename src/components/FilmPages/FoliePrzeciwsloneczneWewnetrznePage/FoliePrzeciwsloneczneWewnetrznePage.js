import React from 'react';
import FilmDetailPage from '../../FilmDetailPage';
import { getFilmByPath } from '../../../data/filmsData';

const FoliePrzeciwsloneczneWewnetrznePage = () => (
  <FilmDetailPage film={getFilmByPath('/folie-przeciwsloneczne-wewnetrzne')} />
);

export default FoliePrzeciwsloneczneWewnetrznePage;
