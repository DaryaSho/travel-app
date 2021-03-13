/* eslint-disable arrow-body-style */
import React from 'react';
import './styles.scss';

const TextSection: React.FC = () => {
  return (
    <section className='text-section parallax'>
      <div className='container'>
        <p className='text text__greeting'>
          Be inspired. <br />Travel.
        </p>
      </div>
    </section>
  );
};

export default TextSection;
