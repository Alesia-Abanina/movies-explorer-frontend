import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ValidationError from '../ValidationError/ValidationError';
import {validation} from '../../utils/constants'

function Profile({ onUpdateProfile, onLogout, loggedIn }) {
  const { values, setValues, handleChange, errors, isValid} =
    useFormWithValidation();

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setValues({ ...currentUser })
  }, [currentUser, setValues]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateProfile({
      name: values.name,
      email: values.email,
    });
  };

  return (
    <>
      <Header loggedIn={loggedIn} isDark={false} />
      <section className="profile">
        <div className="profile__container">
          <h2 className="profile__heading">Привет, {currentUser.name}!</h2>
          <form className="profile__form" onSubmit={handleSubmit}>
            <fieldset className="profile__input-container">
              <div className="profile__fields">
                <span className="profile__title">Имя</span>
                <input id="name-input" name="name" type="text" value={values.name || ''}
                  minLength="2" maxLength="30" pattern={validation.name} required
                  className="profile__input" onChange={handleChange} />
              </div>
              <ValidationError text={errors.name}/>
              <div className="profile__fields">
                <span className="profile__title">E-mail</span>
                <input id="email-input" name="email"
                  pattern={validation.email} required
                  type="email" value={values.email || ''}
                  className="profile__input" onChange={handleChange} />
              </div>
              <ValidationError text={errors.email}/>
            </fieldset>
            <div className="profile__confirmation">
              <button type="submit" className="profile__edit" disabled={!isValid ? "true" : ""}>Редактировать</button>
              <Link to="/" className="profile__exit" onClick={onLogout}>Выйти из аккаунта</Link>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Profile;
