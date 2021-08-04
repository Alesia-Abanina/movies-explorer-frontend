import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/MoviesApi';

function Movies() {
  const isLoading = false;
  const [movies, setMovies] = React.useState([]);

  const handleSearch = (keyword) => {
    moviesApi.getMovies()
      .then((res) => {
        setMovies(res.reduce((accum, movie) => {
          const h = Math.floor(movie.duration / 60);
          const m = movie.duration % 60;

          if (movie.nameRU.toLowerCase().includes(keyword.toLowerCase())) {
            accum.push({
              title: movie.nameRU,
              duration: `${h !== 0 ? h + 'ч' : ''} ${m}м`,
              thumbnail: moviesApi.getBaseUrl() + movie.image.url
            });
          }

          return accum;
        }, []));
      })
      .catch(err => console.log(err));
  }

  return (
    <section>
      <Header isLoggedIn={true} />
      <SearchForm onSearch={handleSearch} />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList canSave={true} movies={movies} />
      )}
      <Footer />
    </section>
  )
}

export default Movies;
