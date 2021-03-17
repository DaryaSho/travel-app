/* eslint-disable arrow-body-style */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import Country from '../pages/Country';

const App: React.FC = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/countries/:name' component={Country} exact />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
