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
  };

  const fetchCountries = useCallback(async () => {
    try {
<<<<<<< HEAD
      console.log(inputValue);
=======
>>>>>>> 3a3ce359010de30edceea11e46ebd5f6d32f95bb
      const fetched = await request(`/api/countries/countries-list/${inputValue}?lang=${i18n.language}`, 'GET', null);
      setSearch(fetched);
    } catch (e) {}
  }, [inputValue]);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  return (
    <div className="search">
      <input
        value={inputValue}
        onChange={onChangeHandler}
        type="text"
        autoFocus
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
