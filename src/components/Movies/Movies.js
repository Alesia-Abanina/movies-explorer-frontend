import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({ searchCriteria, loggedIn, isLoading, onSearch, movies, notFound, onMovieSave, onDelete }) {
  return (
    <section className="movies">
      <Header loggedIn={loggedIn} />
      <div className="movies__form">
        <SearchForm searchCriteria={searchCriteria} onSearch={onSearch} />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList canSave={true} movies={movies} notFound={notFound} onSave={onMovieSave} onDelete={onDelete} />
        )}
      </div>
      <Footer />
    </section>
  )
}

export default Movies;
