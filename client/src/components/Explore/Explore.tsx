/* eslint-disable arrow-body-style */
import React from 'react';
import './styles.scss';

const TopBlock: React.FC = () => {
  return (
    <div className="explore parallax">
      {/* <img src={background} alt="background" className="explore__background" /> */}
      <div className='container'>
        <h1 className='explore__title'>Discover the<br />planet</h1>
      </div>
    </div>
  );
};

export default TopBlock;
