/* eslint-disable arrow-body-style */
import React from 'react';
import search from '../../../assets/logo/search.svg';
import clear from '../../../assets/logo/clear.svg';
import './styles.scss';

const Search: React.FC = () => {
  return (
    <div className="search">
      <input type="text" className="search__input" placeholder="Search country"/>
      <div className="search__btns">
        <button className="search__clear">
          <img src={clear} alt="clear" />
        </button>
        <button className="search__btn">
          <img src={search} alt="search" />
        </button>
      </div>
    </div>
  );
};

export default Search;
