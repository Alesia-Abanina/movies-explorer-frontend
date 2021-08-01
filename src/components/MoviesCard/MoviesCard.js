import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
  const { canSave, movie } = props;
  const { title, duration, thumbnail } = movie;

  const [isSaved, setIsSaved] = React.useState(false);
  const [isMouseOver, setMouseOver] = React.useState(false);

  const handleMovieSave = () => {
    setIsSaved(!isSaved);
  }

  const handleMovieDelete = () => {

  }

  const handleMouseEnter = () => {
    setMouseOver(true);
  }

  const handleMouseLeave = () => {
    setMouseOver(false);
  }

  return (
    <div className="movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={thumbnail} alt="" className="movies-card__img"></img>
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
        <h2 className="movies-card__title">{title}</h2>
        <div className="movies-card__time">{duration}</div>
      </div>
    </div>
  )
}

export default MoviesCard;
