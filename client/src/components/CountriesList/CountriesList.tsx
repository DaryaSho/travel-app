/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty */
import React, { useState, useCallback, useEffect } from 'react';
import { useHttp } from '../../hooks/http.hook';
import './styles.scss';

const CountriesList: React.FC = () => {
  const [countries, setCountries] = useState([]);
  const { loading, request } = useHttp();

  const fetchCountries = useCallback(async () => {
    try {
      const fetched = await request('/api/countries/countries-list', 'GET', null);
      setCountries(fetched);
    } catch (e) {}
  }, [request]);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  if (loading) {
    return (<h2>Loading</h2>);
  }

  return (
    <section className="countries">
      <ul className="countries__list">
        {countries.map((country: any) => (
          <li
            className="countries__item"
            key={country.id}
            style={{
              backgroundImage: `url(${country.imageUrl})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}>
              <div className="container countries__container">
                <h3 className="countries__item-name">{country.name}</h3>
                <h4 className="countries__item-capital">{country.capital}</h4>
                <button className="countries__btn">
                  <span className="countries__btn-text">FIND OUT MORE</span>
                  <i className="material-icons">keyboard_arrow_right</i>
                </button>
              </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CountriesList;
