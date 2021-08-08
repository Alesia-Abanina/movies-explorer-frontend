import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
  const { canSave, movie, onSave, onDelete } = props;
  const { nameRU, duration, thumbnail, saved, trailer } = movie;

  const [isSaved, setIsSaved] = React.useState(saved);
  const [isMouseOver, setMouseOver] = React.useState(false);

  const h = Math.floor(duration / 60);
  const m = duration % 60;
  const durationStr = `${h !== 0 ? h + 'ч' : ''} ${m}м`;

  const handleMovieSave = () => {
    if (!isSaved) {
      onSave(movie);
    } else {
      onDelete(movie);
    }
    setIsSaved(!isSaved);
  }

  const handleMovieDelete = () => {
    onDelete(movie);
  }

  const handleMouseEnter = () => {
    setMouseOver(true);
  }

  const handleMouseLeave = () => {
    setMouseOver(false);
  }

  const handleCardClick  = () => {
    window.open(trailer);
  }

  return (
    <div className="movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={thumbnail} alt={nameRU} className="movies-card__img" onClick={handleCardClick}></img>
      {canSave
        ? (
          <button type="button" onClick={handleMovieSave}
            className={`movies-card__button
            ${isSaved
                ? "movies-card__save_active"
                : isMouseOver && "movies-card__save"}`}>
          </button>
        )
        : (
          <button type="button"
            className={`movies-card__button ${isMouseOver && "movies-card__delete"}`}
            onClick={handleMovieDelete}>
          </button>
        )
      }

      <div className="movies-card__description">
        <h2 className="movies-card__title">{nameRU}</h2>
        <div className="movies-card__time">{durationStr}</div>
      </div>
    </div>
  )
}

export default MoviesCard;
