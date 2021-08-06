import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ canSave, movies, notFound }) {
  return (
    <section className="movies">
      <ul className="movies__list">
        {movies.map((movie, key) => (
          <li className="movies__item" key={key} >
            <MoviesCard canSave={canSave} movie={movie} />
          </li>
        ))}
      </ul>
      {movies.length > 0 && <button className="movies__button" type="button">Ещё</button>}
      {notFound && <p className="movies__not-found">Ничего не найдено</p>}
    </section>
  )
}

export default MoviesCardList;
