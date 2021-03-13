/* eslint-disable arrow-body-style */
import React from 'react';
import arrow from '../../assets/icons/keyboard_arrow_right.svg';
import './styles.scss';

interface Button {
  text: string;
}

const Button: React.FC<Button> = ({ text }) => {
  return (
    <button className='button btn btn__main'>
      <p>{text}</p>
      <img src={arrow} alt='arrow' />
    </button>
  );
};

export default Button;
