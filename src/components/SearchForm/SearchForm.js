import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search">
      <form className="search-form">
        <div className="search-form__input-container">
          <input className="search-form__input" placeholder="Фильм" required />
          <button className="search-form__button" type="submit" />
        </div>
        <div className="search-form__">
          <FilterCheckbox text="Короткометражки" />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
