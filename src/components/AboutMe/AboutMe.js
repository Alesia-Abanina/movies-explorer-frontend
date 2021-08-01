import React from 'react';
import './AboutMe.css';
import Section from '../Section/Section';
import Portfolio from '../Portfolio/Portfolio';
import photo from '../../images/photo.jpg';

function AboutMe() {
  const socialMedias = [
    { title: 'Facebook', link: 'https://www.facebook.com' },
    { title: 'Github', link: 'https://github.com/Alesia-Abanina' }
  ];
  return (
    <Section title="Студент">
      <div className="about-me__block">
        <div className="about-me__info">
          <h2 className="about-me__title">Алеся</h2>
          <p className="about-me__subtitle">Фронтенд-разработчик, 29 лет</p>
          <p className="about-me__description">Я родилась в Ставропольском крае, долгое время жила и работала в Москве. У меня есть муж
            и дочь. Я люблю путешевствовать и изучать новое. Недавно начала постигать веб разработку. Работала в авиации, но несколько лет назад переехала в Австралию.
            После того, как пройдет курс по веб разработке планирую пойти в интернатуру в IT компанию.
          </p>
          <ul className="about-me__list">
            {socialMedias.map((socialMedia, key) => (
              <li className="about-me__item" key={key}>
                <a href={socialMedia.link} target="_blank" rel="noreferrer" className="about-me__link">{socialMedia.title}</a>
              </li>
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
