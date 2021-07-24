import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';

function Header(props) {
  const { isLoggedIn } = props;
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />

      {isLoggedIn ? (
        <div className="header__nav">
          <div>
            <Link to=" " className="header__link">Фильмы</Link>
            <Link to=" " className="header__link">Сохранённые фильмы</Link>
          </div>
          <Link to=" " className="header__link">Аккаунт</Link>
        </div>
      ) : (
        <div className="header__auth">
          <Link to="signup" className="header__link">Регистрация</Link>
          <Link to="signin" className="header__link header__link_active">Войти</Link>
        </div>
      )}
    </header>
  )
}

export default Header;
