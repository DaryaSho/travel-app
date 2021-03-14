/* eslint-disable arrow-body-style */
import React from 'react';
import './styles.scss';
import Button from '../Button';

const Explore: React.FC = () => {
  return (
    <section className='explore parallax'>
      <div className='container'>
        <h1 className='explore__title'>
          Discover the
          <br />
          planet
        </h1>
        <a href='#explore'>
          <Button text='Explore' />
        </a>
      </div>
    </section>
  );
};

export default Explore;
