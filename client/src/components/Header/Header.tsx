/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
import Lang from '../Lang';
import logo from '../../assets/icons/logo.svg';
import './styles.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/">
          <h4 className="header__title">
            Travel<img src={logo} alt="logo" className="logo" />App
          </h4>
        </Link>
        {/* <ul className="header__inputs">
          <li className="header__inputs-item"><Search /></li>
          <li className="header__inputs-item"><Lang /></li>
        </ul> */}
      </div>
    </header>
  );
};

export default Header;
