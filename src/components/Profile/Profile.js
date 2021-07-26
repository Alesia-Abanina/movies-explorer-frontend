import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';

function Profile() {
  return (
    <>
      <Header isLoggedIn={true} isDark={false} />
      <section className="profile">

        <div className="profile__container">

          <h2 className="profile__heading">Привет, Виталий!</h2>
          <form className="profile__form">
            <fieldset className="profile__input-container">
              <div className="profile__fields">
                <span className="profile__title">Имя</span>
                <input type="text" className="profile__input profile__text" value="victor" required />
              </div>
              <div className="profile__fields">
                <span className="profile__title">E-mail</span>
                <input type="text" className="profile__input profile__text" required />
              </div>
            </fieldset>
          </form>

          <div className="profile__confirmation">
            <button type="submit" className="profile__edit">Редактировать</button>
            <Link to="/" className="profile__exit ">Выйти из аккаунта</Link>
          </div>
        </div>

      </section>
    </>
  )
}

export default Profile;
