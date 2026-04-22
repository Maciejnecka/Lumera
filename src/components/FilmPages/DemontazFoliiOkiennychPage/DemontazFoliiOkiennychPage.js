import React from 'react';
import FilmDetailPage from '../../FilmDetailPage';
import { getFilmByPath } from '../../../data/filmsData';

const DemontazFoliiOkiennychPage = () => (
  <FilmDetailPage film={getFilmByPath('/demontaz-folii-okiennych')} />
);

export default DemontazFoliiOkiennychPage;
