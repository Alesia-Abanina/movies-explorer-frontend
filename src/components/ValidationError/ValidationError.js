import React from 'react';
import './ValidationError.css';

const Error = ({ className = '', text = '', id = '' }) => {
  return (
    <span className={`validation-error ${className}`} id={id}>
      {text}
    </span>
  );
};

export default Error;