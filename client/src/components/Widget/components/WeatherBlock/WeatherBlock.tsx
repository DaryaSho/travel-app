import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../../../store/appReducer';

function WeatherBlock(): JSX.Element {
  const currentCity = useSelector((state: IState) => state.currentPlace);
  console.log(currentCity);
  return (
    <div></div>
  );
}

export default WeatherBlock;
