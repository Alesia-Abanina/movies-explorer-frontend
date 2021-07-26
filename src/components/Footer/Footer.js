import React from 'react';
import './Footer.css';

function Footer() {
  const socialMedias = [
    { title: 'Яндекс.Практикум', link: 'https://praktikum.yandex.ru' },
    { title: 'Github', link: 'https://github.com/Alesia-Abanina' },
    { title: 'Facebook', link: 'https://www.facebook.com' }
  ];

  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__info">
        <div className="footer__copyright">&copy; {new Date().getFullYear()}</div>
        <ul className="footer__list">
          {socialMedias.map((socialMedia, key) => (
            <li className="footer__item" key={key}>
              <a href={socialMedia.link} target="_blank" rel="noreferrer" className="footer__link">{socialMedia.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
