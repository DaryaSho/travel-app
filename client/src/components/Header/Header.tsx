/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
import Lang from '../Lang';
import vector from '../../assets/Vector.svg';
import './styles.scss';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="container header__container">
        <Link to="/">
          <h4 className="header__title">
            Travel<img src={vector} alt="logo" className="logo" />App
          </h4>
        </Link>
        <ul className="header__inputs">
          <li className="header__inputs-iitem"><Search /></li>
          <li className="header__inputs-iitem"><Lang /></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
