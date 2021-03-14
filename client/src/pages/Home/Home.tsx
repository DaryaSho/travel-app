/* eslint-disable arrow-body-style */
import React from 'react';
import Explore from '../../components/Explore';
import BeInspiredSection from '../../components/BeInspired';
import CountyCard from '../../components/CountryCard/CountryCard';
import iceland from '../../assets/temp/iceland_main.jpg';
import russia from '../../assets/temp/russia.jpg';
import switzerland from '../../assets/temp/Switzerland.jpg';

const Home: React.FC = () => {
  return (
    <div>
      <Explore />
      <BeInspiredSection />
      <div id='explore'>
        <CountyCard name='Iceland' capital='REYKJAVIK' image={iceland} />
        <CountyCard name='Russia' capital='Moscow' image={russia} />
        <CountyCard name='switzerland' capital='Bern' image={switzerland} />
      </div>
    </div>
  );
};

export default Home;
