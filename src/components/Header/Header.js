import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';

function Header(props) {
  const { isLoggedIn, isDark } = props;
  return (
    <header className={`header ${isDark && "header__theme_dark"}`}>
      <img className="header__logo" src={logo} alt="Логотип" />

      {isLoggedIn ? (
        <nav className="header__nav">
          <div className="header__movies">
            <Link to="movies" className="header__link">Фильмы</Link>
            <Link to="saved-movies" className="header__link">Сохранённые фильмы</Link>
          </div>
          <Link to="profile" className="header__link">
            <span className="header__profile-text">Аккаунт</span>
            <div className="header__profile-icon"></div>
          </Link>
        </nav>
      ) : (
        <div className="header__auth">
          <Link to="signup" className="header__link header__link_dark">Регистрация</Link>
          <Link to="signin" className="header__link header__link_active">Войти</Link>
        </div>
      )}
    </header>
  )
}

export default Header;
