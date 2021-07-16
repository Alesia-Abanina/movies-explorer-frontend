import React from 'react';
import './Promo.css';
import logo from '../../images/text-logo.svg';

function Promo() {
  return (
    <section className="promo">
      <div>
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <div className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект
          и его создателя.
        </div>
      </div>
      <img className="promo__img" src={logo} alt="Логотип" />
      <button></button>
    </section>
  )
}

export default Promo;
