import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const portfolio = ["Статичный сайт", "Адаптивный сайт", "Одностраничное приложение"];
  return (
    <div>
      <h3 className="">Портфолио</h3>
      <ul className="portfolio__list">
        {portfolio.map((item) => (
          <li className="portfolio__item">{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Portfolio;
