import React from 'react';
import './Techs.css';
import Section from '../Section/Section';

function Techs() {
  const technologies = ["HTML", "CSS", "JS", "React", "Git", "Express.js", "mongoDB"];
  return (
    <Section title="Технологии" gray={true}>
      <h2 className="techs__subtitle">7 технологий</h2>
      <p className="techs__description">На курсе веб-разработки мы освоили технологии,
        которые применили в дипломном проекте.
      </p>
      <ul className="techs__list">
        {technologies.map((tech) => (
          <li className="techs__item">{tech}</li>
        ))}
      </ul>
    </Section>
  )
}

export default Techs;
