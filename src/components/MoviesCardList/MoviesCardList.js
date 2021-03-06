import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { moviesList } from '../../utils/constants'

function MoviesCardList({ canSave, movies, onSave, onDelete }) {
  const [displayMoviesNumber, setDisplayMoviesNumber] = React.useState(12);
  const [moreMoviesNumber, setMoreMoviesNumber] = React.useState(3);

  React.useEffect(() => {
    const setCards = ({ cards, more }) => {
      if (displayMoviesNumber < cards) {
        setDisplayMoviesNumber(cards);
      }
      setMoreMoviesNumber(more);
    }

    const setDefaultValues = () => {
      if (window.innerWidth <= 480) {
        setCards(moviesList.small);
      } else if (window.innerWidth <= 768) {
        setCards(moviesList.medium);
      } else {
        setCards(moviesList.large);
      }
    }

    const handleWindowResize = () => {
      setTimeout(() => setDefaultValues(), 500);
    };

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [displayMoviesNumber, moreMoviesNumber]);

  const handleMore = () => {
    setDisplayMoviesNumber(displayMoviesNumber + moreMoviesNumber);
  }

  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        {movies.reduce((list, movie) => {
          if (list.length < displayMoviesNumber || !canSave) {
            list.push(
              <li className="movies-cards__item" key={movie.movieId} >
                <MoviesCard canSave={canSave} movie={movie} onSave={onSave} onDelete={onDelete} />
              </li>
            )
          }
          return list;
        }, [])}
      </ul>
      {canSave && movies.length > displayMoviesNumber && <button className="movies-cards__button" type="button" onClick={handleMore}>Ещё</button>}
      {movies.length === 0 && <p className="movies-cards__not-found">Ничего не найдено</p>}
    </section>
  )
}

export default MoviesCardList;
