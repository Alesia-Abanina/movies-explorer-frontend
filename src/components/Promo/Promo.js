import React from 'react';
import './Promo.css';
import logo from '../../images/text-logo.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__info">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект
          и его создателя.
        </p>
        <a href="#about-project" className="promo__btn promo__learn-more">Узнать больше</a>
      </div>
      <img className="promo__img" src={logo} alt="Логотип" />
    </section>
  )
}

export default Promo;
