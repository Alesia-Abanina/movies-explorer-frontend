import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  const { isLoggedIn, theme = 'light' } = props;
  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);

  const handleBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
    // isBurgerOpen ? setHiddenHeader(false) : setHiddenHeader(true);
  };

  return (
    <header className={`header header__theme_${theme}`}>
      <Link to="/">
        <img className="header__logo" src={logo} alt="Логотип" />
      </Link>
      {isLoggedIn ? (
        <>
          <Navigation theme={theme} />
          <button type="button" className="header__burger"
            onClick={handleBurgerClick}>
          </button>
        </>
      ) : (
        <div className="header__auth">
          <Link to="signup" className="header__link header__link_dark">Регистрация</Link>
          <Link to="signin" className="header__link header__button">Войти</Link>
        </div>
      )}
    </header>
  )
}

export default Header;
