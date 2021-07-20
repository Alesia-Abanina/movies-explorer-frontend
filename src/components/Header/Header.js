import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />
      <div>
        <Link to="sign-up" className="header__link">Регистрация</Link>
        <Link to="sign-in" className="header__link header__link_active">Войти</Link>
      </div>
    </header>
  )
}

export default Header;
