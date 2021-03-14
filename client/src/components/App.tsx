import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { useHttp } from '../hooks/http.hook';
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import Video from './Video';
import Slider from './Slider';
import CountryHeader from './CountryHeader';
import Description from './CountryDescription';

import iceland from '../assets/temp/iceland_main.jpg';

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
      <Header />
      <Route path='/' component={Home} exact />
      <CountryHeader name='Iceland' capital='REYKJAVIK' image={iceland}/>
      <Description />
      <Video url='https://vimeo.com/335870770' />
      <Slider />
      <Footer />
    </div>
  );
};

export default App;
