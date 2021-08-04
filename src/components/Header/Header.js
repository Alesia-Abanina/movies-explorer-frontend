import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  const { isLoggedIn, theme = 'light' } = props;
  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  });

  const handleBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const handleWindowResize = () => {
    if (window.innerWidth > 768) {
      setIsBurgerOpen(false);
    }
  };

  return (
    <header className={`header header__theme_${theme}`}>
      <Link to="/">
        <img className="header__logo" src={logo} alt="Логотип" />
      </Link>
      {
        isLoggedIn ? (
          <div className="header__nav">
            <Navigation theme={theme} isBurgerOpen={isBurgerOpen} />
            <button type="button"
              className={`header__burger ${isBurgerOpen && "header__burger_active"} header__burger_theme_${theme}`}
              onClick={handleBurgerClick}>
            </button>
          </div>
        ) : (
          <div className="header__auth">
            <Link to="signup" className="header__link header__link_dark">Регистрация</Link>
            <Link to="signin" className="header__link header__button">Войти</Link>
          </div>
        )
      }
    </header>
  )
}

export default Header;
