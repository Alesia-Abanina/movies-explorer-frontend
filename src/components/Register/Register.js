import React from 'react';
import './Register.css';
import AuthForm from '../AuthForm/AuthForm';

function Register() {
  return (
    <AuthForm
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      linkTitle="Уже зарегистрированы?"
      linkName="Войти"
      linkRoute="/signin"
    >
      <div className="auth-form__fields">
        <span className="auth-form__title">Имя</span>
        <input type="text" className="auth-form__input" />
        <span className="auth-form__item-error"></span>
      </div>

      <div className="auth-form__fields">
        <span className="auth-form__title">E-mail</span>
        <input type="text" className="auth-form__input" required />
        <span className="auth-form__item-error"></span>
      </div>

      <div className="auth-form__fields">
        <span className="auth-form__title">Пароль</span>
        <input type="password" className="auth-form__input" required />
        <span className="auth-form__item-error">Что-то пошло не так...</span>
      </div>

    </AuthForm>
  )
}

export default Register;
