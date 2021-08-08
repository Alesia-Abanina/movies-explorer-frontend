import React from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import ValidationError from '../ValidationError/ValidationError';
import { validation } from '../../utils/constants'

function Register({ onRegister }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };

  return (
    <AuthForm
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      linkTitle="Уже зарегистрированы?"
      linkName="Войти"
      linkRoute="/signin"
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <div className="auth-form__fields">
        <span className="auth-form__title">Имя</span>
        <input id="name-input" name="name" type="text"
          minLength="2" maxLength="30" pattern={validation.name} required
          className="auth-form__input" onChange={handleChange} />
        <ValidationError text={errors.name} />
      </div>

      <div className="auth-form__fields">
        <span className="auth-form__title">E-mail</span>
        <input id="email-input" name="email" type="email"
          pattern={validation.email} required
          className="auth-form__input" onChange={handleChange} />
        <ValidationError text={errors.email} />
      </div>

      <div className="auth-form__fields">
        <span className="auth-form__title">Пароль</span>
        <input id="password-input" name="password" type="password"
          className="auth-form__input" required onChange={handleChange} />
        <ValidationError text={errors.password} />
      </div>
    </AuthForm>
  )
}

export default Register;
