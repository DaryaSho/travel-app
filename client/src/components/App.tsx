import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { useHttp } from '../hooks/http.hook';
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import Video from './Video';

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
      <Video url='https://vimeo.com/335870770' />
      <Footer />
    </div>
  );
};

export default App;
