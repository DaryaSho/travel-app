import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { useHttp } from '../hooks/http.hook';
import Header from './Header';
import Explore from './Explore';
import Footer from './Footer';
import Home from '../pages/Home';

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
    <div className="wrapper">
      <Header />
      {/* <Route path="/" component={Home} exact /> */}
      <Explore />
      <div style={{
        height: '500px',
        width: '100%',
        backgroundColor: 'white',
      }} />
      <Footer />
    </div>
  );
};

export default App;
