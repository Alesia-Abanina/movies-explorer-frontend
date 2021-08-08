import React from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import './Login.css';
import AuthForm from '../AuthForm/AuthForm';
import ValidationError from '../ValidationError/ValidationError';
import {validation} from '../../utils/constants'

function Login({ onLogin }) {
  const { values, handleChange, errors, isValid } =
    useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <AuthForm
      title="Рады видеть!"
      buttonText="Войти"
      linkTitle="Ещё не зарегистрированы?"
      linkName="Регистрация"
      linkRoute="/signup"
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <div className="auth-form__fields">
        <span className="auth-form__title">E-mail</span>
        <input id="email-input" name="email" type="email"
          pattern={validation.email} required
          className="auth-form__input" onChange={handleChange} />
        <ValidationError text={errors.email}/>
      </div>

      <div className="auth-form__fields">
        <span className="auth-form__title">Пароль</span>
        <input id="password-input" name="password" type="password"
          className="auth-form__input" required onChange={handleChange} />
        <ValidationError text={errors.password}/>
      </div>
    </AuthForm>
  )
}

export default Login;
