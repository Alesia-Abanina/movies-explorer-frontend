import React from 'react';
import './AboutMe.css';
import Section from '../Section/Section';
import Portfolio from '../Portfolio/Portfolio';
import photo from '../../images/photo.jpg';

function AboutMe() {
  const socialMedias = ["Facebook", "Github"];
  return (
    <Section className="about-me" title="Студент">
      <div className="about-me__block">
        <div className="about-me__info">
          <h2 className="about-me__title">Алеся</h2>
          <p className="about-me__subtitle">Фронтенд-разработчик, 29 лет</p>
          <p className="about-me__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года
            работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className="about-me__list">
            {socialMedias.map((socialMedia) => (
              <li className="about-me__item">{socialMedia}</li>
            ))}
          </ul>
        </div>
        <div className="about-me__image">
          <img className="about-me__photo" src={photo} alt="Фотография студента"></img>
        </div>
      </div>

      <Portfolio />
    </Section>
  )
}

export default AboutMe;
