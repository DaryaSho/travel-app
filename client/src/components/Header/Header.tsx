/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
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
          <div className="header__inputs-item"><Lang /></div>
      </div>
    </header>
  );
};

export default Header;
