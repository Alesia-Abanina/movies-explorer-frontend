import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ canSave, movies, onSave, onDelete }) {
  const [displayMoviesNumber, setDisplayMoviesNumber] = React.useState(12);
  const [moreMoviesNumber, setMoreMoviesNumber] = React.useState(3);

  React.useEffect(() => {
    const handleWindowResize = () => {
      setTimeout(() => setDefaultValues(), 500);
    };

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const setDefaultValues = () => {
    if (window.innerWidth <= 480) {
      if (displayMoviesNumber < 5) {
        setDisplayMoviesNumber(5);
      }
      setMoreMoviesNumber(1);
    } else if (window.innerWidth <= 768) {
      if (displayMoviesNumber < 8) {
        setDisplayMoviesNumber(8);
      }
      setMoreMoviesNumber(2);
    } else {
      if (displayMoviesNumber < 12) {
        setDisplayMoviesNumber(12);
      }
      setMoreMoviesNumber(3);
    }
  }

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
