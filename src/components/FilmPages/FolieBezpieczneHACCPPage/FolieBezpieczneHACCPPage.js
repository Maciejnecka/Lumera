import React from 'react';
import FilmDetailPage from '../../FilmDetailPage';
import { getFilmByPath } from '../../../data/filmsData';

const FolieBezpieczneHACCPPage = () => (
  <FilmDetailPage film={getFilmByPath('/folie-bezpieczne-haccp')} />
);

export default FolieBezpieczneHACCPPage;
