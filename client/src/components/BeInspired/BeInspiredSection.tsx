/* eslint-disable arrow-body-style */
import React from 'react';
import Search from '../Search';
import './styles.scss';

const BeInspiredSection: React.FC = () => {
  return (
    <section className='text-section parallax'>
      <div className='container'>
        <p className='text text__greeting'>
          Be inspired. <br />
          Travel.
        </p>
        <div className='search-wrapper'>
          <Search />
        </div>
      </div>
    </section>
  );
};

export default BeInspiredSection;
