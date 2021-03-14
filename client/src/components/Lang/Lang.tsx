/* eslint-disable arrow-body-style */
import React from 'react';
import './styles.scss';

const Lang: React.FC = () => {
  return (
    <div className="lang">
      <select>
        <option value="0">English</option>
        <option value="1">Russian</option>
      </select>
    </div>
  );
};

export default Lang;
