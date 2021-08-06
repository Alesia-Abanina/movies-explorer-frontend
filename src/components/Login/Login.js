import React from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import './Login.css';
import AuthForm from '../AuthForm/AuthForm';

function Login({ onLogin }) {
  const { values, handleChange, resetFrom, errors, isValid, isValidInputs } =
    useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin({
      email: values.email,
      password: values.password,
    });
    //.then(resetFrom);
  };

  return (
    <AuthForm
      title="Рады видеть!"
      buttonText="Войти"
      linkTitle="Ещё не зарегистрированы?"
      linkName="Регистрация"
      linkRoute="/signup"
      onSubmit={handleSubmit}
    >
      <div className="auth-form__fields">
        <span className="auth-form__title">E-mail</span>
        <input id="email-input" name="email" type="email"
          className="auth-form__input" required onChange={handleChange} />
        <span className="auth-form__item-error"></span>
      </div>

      <div className="auth-form__fields">
        <span className="auth-form__title">Пароль</span>
        <input id="password-input" name="password" type="password"
          className="auth-form__input" required onChange={handleChange} />
        <span className="auth-form__item-error">Что-то пошло не так...</span>
      </div>
    </AuthForm>
  )
}

export default Login;
