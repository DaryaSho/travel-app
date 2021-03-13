/* eslint-disable arrow-body-style */
import React from 'react';
import './styles.scss';

const Lang: React.FC = () => {
  return (
    <div className="lang">
      <select>
        <option value="0">Choose language</option>
        <option value="1">Russion</option>
        <option value="2">English</option>
      </select>
    </div>
  );
};

export default Lang;
