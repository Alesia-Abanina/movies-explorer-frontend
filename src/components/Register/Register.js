import React from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import './Register.css';
import AuthForm from '../AuthForm/AuthForm';

function Register({ onRegister }) {
  const { values, handleChange, resetFrom, errors, isValid, isValidInputs } =
    useFormWithValidation();


  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    });
    //.then(resetFrom);
  };

  return (
    <AuthForm
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      linkTitle="Уже зарегистрированы?"
      linkName="Войти"
      linkRoute="/signin"
      onSubmit={handleSubmit}
    >
      <div className="auth-form__fields">
        <span className="auth-form__title">Имя</span>
        <input id="name-input" name="name" type="text"
          className="auth-form__input" onChange={handleChange} />
        <span className="auth-form__item-error"></span>
      </div>

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

export default Register;
