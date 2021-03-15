/* eslint-disable arrow-body-style */
import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import search from '../../assets/icons/search.svg';
import clear from '../../assets/icons/clear.svg';
import './styles.scss';

const Search: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="search">
      <input type="text" className="search__input" placeholder={t('Search country')}/>
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
