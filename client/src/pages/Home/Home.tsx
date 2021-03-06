/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty */
/* eslint-disable arrow-body-style */
import React, { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHttp } from '../../hooks/http.hook';
import Explore from '../../components/Explore';
import BeInspiredSection from '../../components/BeInspired';
import CountyCard from '../../components/CountryCard/CountryCard';

const Home: React.FC = () => {
  const [countries, setCountries] = useState([]);
  const { loading, request } = useHttp();
  const { t, i18n } = useTranslation();

  const fetchCountries = useCallback(async () => {
    try {
      const fetched = await request(`/api/countries/countries-list?lang=${i18n.language}`, 'GET', null);
      setCountries(fetched);
    } catch (e) {}
  }, [request, i18n.language]);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  if (loading) {
    return (<h2>Loading</h2>);
  }

  return (
    <div>
      <Explore />
      <BeInspiredSection search={setCountries} />
      {countries.map((country: any) => (
        <CountyCard
          key={country.id}
          name={country.name}
          capital={country.capital}
          image={country.imageUrl}
          id={country.id} />
      ))}
    </div>
  );
};

export default Home;
