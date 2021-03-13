/* eslint-disable arrow-body-style */
import React from 'react';
import './styles.scss';

const TextSection: React.FC = () => {
  return (
    <section className='text-section parallax'>
      <div className='container'>
        <div className='text text__greeting'>
          Be inspired. <br />Travel.
        </div>
      </div>
    </section>
  );
};

export default TextSection;
