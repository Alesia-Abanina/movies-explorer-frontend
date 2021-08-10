import React from 'react';
import './InfoTooltip.css';
import failIcon from '../../images/fail-icon.svg';
import successIcon from '../../images/success-icon.svg';

function InfoTooltip({message, isOpen, onClose, success}) {
  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  const handleKeyUp = (evt) => {
    if (evt.key === 'Escape') {
      onClose();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  });

  return (
    <section className={`popup popup_opacity_dark ${isOpen && 'popup_display_active'}`} onClick={handleOverlayClick}>
      <div className="popup__container">
        <button type="button" className="popup__close-btn button" onClick={onClose}></button>
        <div className="popup__info">
          <img className="popup__icon" src={success ? successIcon : failIcon} alt={success ? "Успешно" : "Ошибка"}></img>
          <p className="popup__tooltip">{ message }</p>
        </div>
      </div>
    </section>
  )
}

export default InfoTooltip;
