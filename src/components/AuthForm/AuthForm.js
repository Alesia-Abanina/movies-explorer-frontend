import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css';
import logo from '../../images/logo.svg';

function AuthForm(props) {
  const { title, linkName, linkTitle, linkRoute, buttonText, children, isValid, onSubmit } = props;

  return (
    <section className="auth-form">
      <Link to="/" className="auth-form__logo-link">
        <img src={logo} alt="Логотип проекта" className="auth-form__logo"></img>
      </Link>
      <h2 className="auth-form__heading">{title}</h2>
      <form className="auth-form__form" onSubmit={onSubmit} >
        <fieldset className="auth-form__input-container">
          {children}
        </fieldset>
        <div className="auth-form__confirmation">
          <button type="submit" className="auth-form__button" disabled={!isValid}>{buttonText}</button>
          <p className="auth-form__text">{linkTitle}
            <Link to={linkRoute} className="auth-form__link">{linkName}</Link>
          </p>
        </div>
      </form>
    </section>
  )
}

export default AuthForm;
