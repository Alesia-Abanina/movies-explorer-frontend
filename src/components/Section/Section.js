import React from 'react';
import './Section.css';

function Section(props) {
  const { title, children } = props;
  return (
    <section className="section">
      <h2 className="section__title">{title}</h2>
      {children}
    </section>
  )
}

export default Section;
