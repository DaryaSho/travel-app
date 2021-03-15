import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { useHttp } from '../hooks/http.hook';
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import Country from '../pages/Country';
import iceland from '../assets/temp/iceland_main.jpg';
import Widget from './Widget/Widget';

const App: React.FC = () => {
  const [countries, setCountries] = useState([]);
  const { loading, request } = useHttp();

  // const fetchCountries = useCallback(async () => {
  //   try {
  //     const fetched = await request('http://localhost:5000/api/countries/xxx', 'GET', null);
  //     setCountries(fetched);
  //   } catch (e) {}
  // }, [request]);

  // useEffect(() => {
  //   fetchCountries();
  // }, [fetchCountries]);

  // if (loading) {
  //   return (<h2>Loading</h2>);
  // }

  return (
    <div className='wrapper'>
      <Widget/>
      <Header />
      <Route path='/' component={Home} exact />
      <Country />
      <Footer />
    </div>
  );
};

export default App;
