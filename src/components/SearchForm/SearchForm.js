import React from 'react';
import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search">
      <form className="search-form">
        <div className="search-form__input-container">
          <img className="search-form__icon" src={searchIcon} alt="Поиск"></img>
          <input className="search-form__input" placeholder="Фильм" required />
          <button className="search-form__button" type="submit">Найти</button>
        </div>
        <div className="search-form__separator"></div>
        <FilterCheckbox text="Короткометражки" />
      </form>
    </section>
  );
}

export default SearchForm;
