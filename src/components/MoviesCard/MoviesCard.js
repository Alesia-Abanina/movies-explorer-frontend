import React from 'react';
import './MoviesCard.css';
import movie from '../../images/movie.png';

function MoviesCard(props) {
  const { isSaved } = props;
  return (
    <li className="movies-card">
      <img src={movie} alt="" className="movies-card__img"></img>

      <button type="button" className={`movies-card__save ${isSaved && "movies-card__save_active"}`}></button>
      {/* <button type="button" className="movies-card__delete"></button> */}
      <div className="movies-card__description">
        <h2 className="movies-card__title">movies-card</h2>
        <div className="movies-card__time">1h 17m</div>
      </div>
    </li>
  )
}

export default MoviesCard;
