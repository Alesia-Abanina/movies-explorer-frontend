import React from 'react';
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className="movies">
      <Preloader />
      <ul className="movies__list">
        <li className="movies__item">
          <MoviesCard />
        </li>
        <li className="movies__item">
          <MoviesCard />
        </li>
        <li className="movies__item">
          <MoviesCard />
        </li>
        <li className="movies__item">
          <MoviesCard />
        </li>
        <li className="movies__item">
          <MoviesCard />
        </li>
      </ul>
      <button className="movies__button" type="button">Ещё</button>
    </section>
  )
}

export default MoviesCardList;
