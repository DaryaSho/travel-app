/* eslint-disable arrow-body-style */
import React from 'react';
import './styles.scss';
import Button from '../Button';

const Explore: React.FC = () => {
  return (
    <div className="explore parallax">
      <div className='container'>
        <h1 className='explore__title'>Discover the<br />planet</h1>
        <Button text='Explore' />
      </div>
    </div>
  );
};

export default Explore;
