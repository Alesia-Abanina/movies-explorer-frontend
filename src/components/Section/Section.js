import React from 'react';
import './Section.css';

function Section(props) {
  const { title, gray = false, children, id } = props;
  return (
    <section className={`section ${gray && 'section__theme_gray'}`} id={id}>
      <h2 className="section__title">{title}</h2>
      {children}
    </section>
  )
}

export default Section;
