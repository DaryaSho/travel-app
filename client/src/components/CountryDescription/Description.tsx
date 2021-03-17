/* eslint-disable arrow-body-style */
import React from 'react';
import './styles.scss';

const Description: React.FC<{text: string}> = ({ text }) => {
  return (
    <section className='description'>
      <div className='container description__container'>
        <p className='text description__text'>{text}</p>
      </div>
    </section>
  );
};

export default Description;
