/* eslint-disable no-empty */
import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useHttp } from '../../hooks/http.hook';
import search from '../../assets/icons/search.svg';
import clear from '../../assets/icons/clear.svg';
import './styles.scss';

const Search: React.FC<{setSearch: any}> = ({ setSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const { request } = useHttp();
  const { t, i18n } = useTranslation();
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
    fetchCountries();
  };

  const fetchCountries = async () => {
    try {
      // console.log(inputValue);
      const fetched = await request(`/api/countries/countries-list/${inputValue}`, 'GET', null);
      setSearch(fetched);
    } catch (e) {}
  };

  return (
    <div className="search">
      <input
        value={inputValue}
        onChange={onChangeHandler}
        type="text"
        className="search__input"
        placeholder={t('Search country')}/>
      <div className="search__btns">
        <button
          onClick={() => setInputValue('')}
          className="search__clear">
          <img src={clear} alt="clear" />
        </button>
        <button
          onClick={fetchCountries}
          className="search__btn">
          <img src={search} alt="search" />
        </button>
      </div>
    </div>
  );
};

export default Search;
