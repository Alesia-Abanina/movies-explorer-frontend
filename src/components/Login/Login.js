import React from 'react';
import './Login.css';
import AuthForm from '../AuthForm/AuthForm';

function Login() {
  return (
    <AuthForm
      title="Рады видеть!"
      buttonText="Войти"
      linkTitle="Ещё не зарегистрированы?"
      linkName="Регистрация"
      linkRoute="/signup"
    >
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

export default Login;
