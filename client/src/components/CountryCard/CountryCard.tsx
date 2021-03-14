/* eslint-disable arrow-body-style */
import React from 'react';
import Button from '../Button';
import './styles.scss';

interface ICountyCard {
  name: string;
  capital: string;
  image: string;
}

const CountyCard: React.FC<ICountyCard> = ({ name, capital, image }) => {
  return (
    <div
      className='country-card'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='container'>
        <h2 className='country-card__name'>{name}</h2>
        <h3 className='country-card__capital'>{capital}</h3>
        <Button text='Find out more' />
      </div>
    </div>
  );
};

export default CountyCard;
