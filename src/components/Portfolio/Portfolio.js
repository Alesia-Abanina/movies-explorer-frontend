import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link" href=" ">Статичный сайт</a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href=" ">Адаптивный сайт</a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href=" ">Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
