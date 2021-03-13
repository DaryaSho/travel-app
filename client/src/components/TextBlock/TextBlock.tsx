/* eslint-disable arrow-body-style */
import React from 'react';
import './styles.scss';

const TextBlock: React.FC = () => {
  return (
    <div className='container__text-block'>
      <div className='container'>
        <p className='text text__greeting'>
          Be inspired. <br />Travel.
        </p>
      </div>
    </div>
  );
};

export default TextBlock;
