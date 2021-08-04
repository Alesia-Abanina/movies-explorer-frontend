import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies() {
  const isLoading = false;
  return (
    <section>
      <Header isLoggedIn={true} />
      <SearchForm />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList canSave={true} />
      )}
      <Footer />
    </section>
  )
}

export default Movies;
