import React from 'react';
import './Footer.css';

function Footer() {
  const socialMedias = ["Яндекс.Практикум", "Github", "Facebook"];
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__info">
        <div className="footer__copyright">&copy; {new Date().getFullYear()}</div>
        <ul className="footer__list">
          {socialMedias.map((socialMedia, key) => (
            <li className="footer__item" key={key}>{socialMedia}</li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
