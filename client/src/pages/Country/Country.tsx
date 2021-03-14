/* eslint-disable no-empty */
/* eslint-disable arrow-body-style */
import React, { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useHttp } from '../../hooks/http.hook';
import Video from '../../components/Video';
import Slider from '../../components/Slider';
import CountryHeader from '../../components/CountryHeader';
import Description from '../../components/CountryDescription';

const Country: React.FC = () => {
  const location = useLocation();
  const { id } = location.state;

  const [country, setCountry] = useState({
    name: '',
    capital: '',
    imageUrl: '',
    description: '',
    videoUrl: '',
    places: [],
  });
  const { loading, request } = useHttp();

  const fetchCountries = useCallback(async () => {
    try {
      const fetched = await request(`/api/countries/${id}`, 'GET', null);
      setCountry(fetched);
    } catch (e) {}
  }, [request]);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  if (loading) {
    return (<h2>Loading</h2>);
  }

  console.log(country);

  return (
    <div>
      <CountryHeader
        name={country.name}
        capital={country.capital}
        image={country.imageUrl} />
      <Description text={country.description} />
      <Video url={country.videoUrl} />
      <Slider places={country.places} />
    </div>
  );
};

export default Country;
