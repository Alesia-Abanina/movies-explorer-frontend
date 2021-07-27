import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <section>
      <Header isLoggedIn={true} />
      <SearchForm />
      <MoviesCardList canSave={true} />
      <Footer />
    </section>
  )
}

export default Movies;
