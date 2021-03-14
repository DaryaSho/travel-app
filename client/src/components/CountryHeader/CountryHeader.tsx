/* eslint-disable arrow-body-style */
import React from 'react';
import './styles.scss';

interface ICountyHeader {
  name: string;
  capital: string;
  image: string;
}

const CountryHeader: React.FC<ICountyHeader> = ({ name, capital, image }) => {
  return (
    <div
      className='country-header parallax'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='container'>
        <h2 className='country-header__name'>{name}</h2>
        <h3 className='country-header__capital'>{capital}</h3>
      </div>
    </div>
  );
};

export default CountryHeader;
