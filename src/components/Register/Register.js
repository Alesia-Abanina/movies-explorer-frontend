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
      </div>

      <div className="auth-form__fields">
        <span className="auth-form__title">E-mail</span>
        <input type="text" className="auth-form__input" required />
      </div>

      <div className="auth-form__fields">
        <span className="auth-form__title">Пароль</span>
        <input type="password" className="auth-form__input" required />
      </div>

    </AuthForm>
  )
}

export default Register;
