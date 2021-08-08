import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onChange, isSelected }) {
  return (
    <div className="filter-checkbox__container">
      <label className="filter-checkbox__label">
        <input type="checkbox" className="filter-checkbox__input" defaultChecked={isSelected} onChange={onChange}></input>
        <span className="filter-checkbox__span"></span>
      </label>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;
