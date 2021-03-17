/* eslint-disable no-empty */
/* eslint-disable arrow-body-style */
import React, { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useHttp } from '../../hooks/http.hook';
import Video from '../../components/Video';
import Slider from '../../components/Slider';
import CountryHeader from '../../components/CountryHeader';
import Description from '../../components/CountryDescription';
import WidgetsPanel from '../../components/WidgetsPanel/WidgetsPanel';
import Map from '../../components/Map/Map';

const Country: React.FC = () => {
  const location = useLocation();
  const { id } = location.state;
  const { t, i18n } = useTranslation();

  const [country, setCountry] = useState({
    name: '',
    capital: '',
    imageUrl: '',
    description: '',
    videoUrl: '',
    places: [],
    currency: '',
    ISOCode: '',
  });
  const { loading, request } = useHttp();

  const fetchCountries = useCallback(async () => {
    try {
      const fetched = await request(`/api/countries/${id}?lang=${i18n.language}`, 'GET', null);
      setCountry(fetched);
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
      <CountryHeader
        name={country.name}
        capital={country.capital}
        image={country.imageUrl} />
      {
        country.ISOCode ? <WidgetsPanel currency={country.currency}
                                        iso={country.ISOCode} lang={i18n.language}/> : null
      }
      <Description text={country.description} />
      <Video url={country.videoUrl} />
      <Slider places={country.places} />
      {
        country.ISOCode ? <Map lang={i18n.language} iso={country.ISOCode}/> : null
      }
    </div>
  );
};

export default Country;
