/* eslint-disable arrow-body-style */
import React from 'react';
import './styles.scss';

const Description: React.FC = () => {
  return (
    <section className='description'>
      <div className='container description__container'>
        <p className='text description__text'>
          ICELAND IS A COUNTRY OF EXTREME GEOLOGICAL CONTRASTS. WIDELY KNOWN AS
          “THE LAND OF FIRE AND ICE” ICELAND IS HOME TO SOME OF THE LARGEST
          GLACIERS IN EUROPE, AND SOME OF THE WORLD’S MOST ACTIVE VOLCANOES.
          ICELAND IS ALSO THE LAND OF LIGHT AND DARKNESS. LONG SUMMER DAYS WITH
          NEAR 24-HOURS OF SUNSHINE ARE OFFSET BY SHORT WINTER DAYS WITH ONLY A
          FEW HOURS OF DAYLIGHT.
        </p>
      </div>
    </section>
  );
};

export default Description;
