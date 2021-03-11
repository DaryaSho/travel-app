/* eslint-disable no-empty */
import React, { useState, useCallback, useEffect } from 'react';
import { useHttp } from '../hooks/http.hook';

const App: React.FC = () => {
  const [countries, setCountries] = useState([]);
  const { loading, request } = useHttp();

  const fetchCountries = useCallback(async () => {
    try {
      const fetched = await request('http://localhost:5000/api/countries/xxx', 'GET', null);
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
      <>
        <h1>Travel-app</h1>
        {!loading
        && countries.map((country: any) => <div key={country._id}>{country.imageUrl}</div>)}
      </>
  );
};

export default App;
