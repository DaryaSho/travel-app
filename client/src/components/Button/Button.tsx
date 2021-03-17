/* eslint-disable arrow-body-style */
import React from 'react';
import arrow from '../../assets/icons/keyboard_arrow_right.svg';
import './styles.scss';

interface Button {
  text: string;
  onClick?: any
}

const Button: React.FC<Button> = ({ text, onClick }) => {
  return (
    <button className='button btn btn__main' onClick={() => onClick()}>
      <p>{text}</p>
      <img src={arrow} alt='arrow' />
    </button>
  );
};

export default Button;
