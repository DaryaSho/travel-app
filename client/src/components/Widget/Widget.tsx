import React from 'react';
import WeatherBlock from './components/WeatherBlock/WeatherBlock';
import styles from './Widget.module.css';

function Widget(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.block}>widget1</div>
      <div className={styles.block}>widget2</div>
      <WeatherBlock/>
      <div className={styles.block}>widget3</div>
    </div>
  );
}

export default Widget;
