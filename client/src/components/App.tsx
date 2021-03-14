/* eslint-disable arrow-body-style */
import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Home from '../pages/Home';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Route path="/" component={Home} exact />
    </div>
  );
};

export default App;
