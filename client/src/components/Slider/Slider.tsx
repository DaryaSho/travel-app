/* eslint-disable arrow-body-style */
/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './styles.scss';

import one from '../../assets/temp/volkano.jpg';
import two from '../../assets/temp/geysers.jpg';
import three from '../../assets/temp/ice.jpg';
import four from '../../assets/temp/iceland_main.jpg';

const array = [one, two, three, four];

const SliderC: React.FC = () => {
  const [nav1, setNav1] = useState<any>(undefined);
  const [nav2, setNav2] = useState<any>(undefined);

  let slider1: null;
  let slider2: null;

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, []);

  const settings = {
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: nav2,
    ref: (slider: any) => (slider1 = slider),
    swipeToSlide: true,
    fade: true,
  };

  const settingsTwo = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: nav1,
    ref: (slider: any) => (slider2 = slider),
  };

  return (
    <section className='slider'>
      <div className='container'>
        <Slider {...settings}>
          {array.map((item) => {
            return (
              <div key={item}>
                <img src={item} alt={item} />
              </div>
            );
          })}
        </Slider>
        <Slider {...settingsTwo}>
          {array.map((item) => {
            return (
              <div key={item} className='slider-bottom__item'>
                <img src={item} alt={item} />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default SliderC;
