import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
  const { theme = 'light', isBurgerOpen } = props;

  return (
    <div className={`${isBurgerOpen && "navigation__overlay"}`} >
      <nav className={`navigation ${isBurgerOpen && "navigation_active"}`} >
        <div className="navigation__movies">
          <NavLink to="/" className={`navigation__link navigation__link_${theme}`}
            activeClassName={'navigation__link_active'} exact>Главная
          </NavLink>
          <NavLink to="movies" className={`navigation__link navigation__link_${theme}`}
            activeClassName="navigation__link_active">Фильмы
          </NavLink>
          <NavLink to="saved-movies" className={`navigation__link navigation__link_${theme}`}
            activeClassName="navigation__link_active">Сохранённые фильмы
          </NavLink>
        </div>
        <Link to="profile" className={`navigation__link navigation__link_${theme}`}>
          <span className="navigation__profile-text">Аккаунт</span>
          <div className="navigation__profile-icon"></div>
        </Link>
      </nav>
    </div>
  )
}

export default Navigation;
