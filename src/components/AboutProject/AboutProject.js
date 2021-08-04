import React from 'react';
import './AboutProject.css';
import Section from '../Section/Section';

function AboutProject() {
  return (
    <Section title="О проекте" id="about-project">
      <div className="about-project__columns">
        <div className="about-project__column">
          <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__description">Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.
          </p>
        </div>

        <div className="about-project__column">
          <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__description">У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__plan">
        <span className="about-project__plan-column about-project__plan-backend">1 неделя</span>
        <span className="about-project__plan-column about-project__plan-frontend">4 недели</span>
        <span className="about-project__plan-column about-project__plan-text">Back-end</span>
        <span className="about-project__plan-column about-project__plan-text">Front-end</span>
      </div>
    </Section>
  )
}

export default AboutProject;
