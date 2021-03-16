import React from 'react';
import styles from './WidgetsPanel.module.css';
import WeatherWidget from './components/WeatherWidget/WeatherWidget';
import TimeWidget from './components/TimeWidget/TimeWidget';
import ExchangeWidget from './components/ExchangeWidget/ExchangeWidget';

const WidgetsPanel = ({ capital, currency }: { capital: string, currency: string}) => {
  const test = 'test';

  return (
    <div className={styles.container}>
      <div className={styles.cell}>
        <TimeWidget capital={capital}/>
      </div>
      <div className={styles.cell}>
        <WeatherWidget capital={capital}/>
      </div>
      <div className={styles.cell}>
        <ExchangeWidget currency={currency}/>
      </div>
    </div>
  );
};

export default WidgetsPanel;
