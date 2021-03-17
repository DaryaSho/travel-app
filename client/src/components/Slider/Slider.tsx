/* eslint-disable arrow-body-style */
/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './styles.scss';

const SliderC: React.FC<any> = ({ places }) => {
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
    speed: 500,
    focusOnSelect: false,
    asNavFor: nav2,
    initialSlide: 1,
    ref: (slider: any) => (slider1 = slider),
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
    initialSlide: 3,
  };

  return (
    <section className='slider'>
      <div className='container'>
        <div className='your-slider-wrapper'>
          <Slider {...settings}>
            {places.map((item: any) => {
              return (
                <div key={item.toString()} className='ratio'>
                  <div className='ratio-inner ratio-size'>
                    <div
                      className='ratio-content'
                      style={{
                        backgroundImage: `url(${item.imageUrl})`,
                        backgroundSize: 'cover',
                      }}
                    >
                      <div className='opacity'>
                        <p className='places__name'>{item.name}</p>
                        <p className='places__description'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
          <div className='slider-wrapper'>
            <Slider {...settingsTwo}>
              {places.map((item: any) => {
                return (
                  <div key={item.toString()}>
                    <img src={item.imageUrl} alt={item.name} />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderC;
