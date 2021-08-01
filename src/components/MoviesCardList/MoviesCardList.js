import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import thumbnail from '../../images/movie.png';

function MoviesCardList(props) {
  const { canSave } = props;
  const movies = [
    {
      title: 'В погоне за Бенкси',
      duration: '1ч 17м',
      thumbnail: thumbnail,
    },
    {
      title: 'В погоне за Бенкси',
      duration: '1ч 17м',
      thumbnail: thumbnail,
    },
  ];

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
