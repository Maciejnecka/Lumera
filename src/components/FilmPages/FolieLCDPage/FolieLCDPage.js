import React from 'react';
import FilmDetailPage from '../../FilmDetailPage';
import { getFilmByPath } from '../../../data/filmsData';

const FolieLCDPage = () => <FilmDetailPage film={getFilmByPath('/folie-lcd')} />;

export default FolieLCDPage;
