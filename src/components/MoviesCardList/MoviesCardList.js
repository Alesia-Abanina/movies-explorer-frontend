import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ canSave, movies }) {
  return (
    <section className="movies">
      <ul className="movies__list">
        {movies.map((movie, key) => (
          <li className="movies__item" key={key} >
            <MoviesCard canSave={canSave} movie={movie} />
          </li>
        ))}
      </ul>
      <button className="movies__button" type="button">Ещё</button>
    </section>
  )
}

export default MoviesCardList;
