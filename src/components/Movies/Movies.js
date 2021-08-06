import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/MoviesApi';
import * as moviesUtils from '../../utils/MoviesUtils'

function Movies() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [notFound, setNotFound] = React.useState(false);

  const handleSearch = (keyword) => {
    setMovies([]);
    setIsLoading(true);
    setNotFound(false);

    moviesApi.getMovies()
      .then((allMovies) => {
        const converted = moviesUtils.convertMovies(allMovies);
        const filtered = moviesUtils.searchMovies(converted, keyword, false);

        if (filtered.length === 0) {
          setNotFound(true);
        }
        setMovies(filtered);
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }

  return (
    <section>
      <Header isLoggedIn={true} />
      <SearchForm onSearch={handleSearch} />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList canSave={true} movies={movies} notFound={notFound} />
      )}
      <Footer />
    </section>
  )
}

export default Movies;
