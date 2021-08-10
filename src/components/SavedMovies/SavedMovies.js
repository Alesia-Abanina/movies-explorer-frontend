import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({searchCriteria, loggedIn, isLoading, movies, notFound, onSearch, onDelete}) {
  return (
    <section className="saved-movies">
      <Header loggedIn={loggedIn}  />
      <div className="saved-movies__form">
        <SearchForm searchCriteria={searchCriteria} onSearch={onSearch}/>
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList canSave={false} movies={movies} notFound={notFound} onDelete={onDelete} />
        )}
      </div>
      <Footer />
    </section>
  )
}

export default SavedMovies;
