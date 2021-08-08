import React from 'react';
import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ searchCriteria, onSearch }) {
  const nameRef = React.useRef();
  const [isCheckboxSelected, setIsCheckboxSelected] = React.useState(false);

  React.useEffect(() => {
    nameRef.current.value = searchCriteria.keyword ?? '';
    setIsCheckboxSelected(searchCriteria.isShort ?? false);
  }, [searchCriteria]);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(nameRef.current.value, isCheckboxSelected);
  }

  const handleCheckboxChange = () => {
    setIsCheckboxSelected(!isCheckboxSelected);
  }

  return (
    <section className="search">
      <form className="search-form" onSubmit={handleSearch}>
        <div className="search-form__input-container">
          <img className="search-form__icon" src={searchIcon} alt="Поиск"></img>
          <input className="search-form__input" ref={nameRef} placeholder="Фильм" />
          <button className="search-form__button" type="submit">Найти</button>
        </div>
        <div className="search-form__separator"></div>
        <FilterCheckbox text="Короткометражки" isSelected={searchCriteria.isShort} onChange={handleCheckboxChange}/>
      </form>
    </section>
  );
}

export default SearchForm;
