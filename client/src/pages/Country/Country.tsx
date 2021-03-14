/* eslint-disable arrow-body-style */
import React from 'react';
import Video from '../../components/Video';
import Slider from '../../components/Slider';
import CountryHeader from '../../components/CountryHeader';
import Description from '../../components/CountryDescription';

import iceland from '../../assets/temp/iceland_main.jpg';

const Country: React.FC = () => {
  return (
    <div>
      <CountryHeader name='Iceland' capital='REYKJAVIK' image={iceland} />
      <Description />
      <Video url='https://vimeo.com/335870770' />
      <Slider />
    </div>
  );
};

export default Country;
