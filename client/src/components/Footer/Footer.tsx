/* eslint-disable arrow-body-style */
import React from 'react';
import './styles.scss';
import Github from './Github';
import rsschool from '../../assets/icons/rs_school.svg';

const Footer: React.FC = () => {
  return (
    <div className="footer">
    <div className='container container__footer'>
        <div className='github__container'>
          <Github github='hotinec' />
          <Github github='ulyana-zh' />
          <Github github='daryasho' />
          <Github github='andevrom' />
        </div>
        <div className='rschool'>
      <p>©2021</p>
      <a href='https://rs.school/js/'>
      <img src={rsschool} alt='logo' className='rschool__logo' />
      </ a>
    </div>
    </div>
    </div>
  );
};

export default Footer;
