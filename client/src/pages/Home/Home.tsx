/* eslint-disable arrow-body-style */
import React from 'react';
import Explore from '../../components/Explore';
import TextSection from '../../components/TextSection';
import CountyCard from '../../components/CountryCard/CountryCard';
import countryImg from '../../assets/temp/iceland_main.png';

const Home: React.FC = () => {
  return (
    <div>
      <Explore />
      <TextSection />
      <div id='explore'>
        <CountyCard name='Iceland' capital='REYKJAVIK' image={countryImg} />
      </div>
    </div>
  );
};

export default Home;
