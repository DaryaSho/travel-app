import React from 'react';
import styles from './WidgetsPanel.module.css';
import WeatherWidget from './components/WeatherWidget/WeatherWidget';
import TimeWidget from './components/TimeWidget/TimeWidget';
import ExchangeWidget from './components/ExchangeWidget/ExchangeWidget';

const WidgetsPanel = ({ iso, currency, lang }: {
  iso: string,
  currency: string,
  lang: string}) => {
  const test = 'test';

  return (
    <div className={styles.container}>
      <div className={styles.cell}>
        <TimeWidget iso={iso} lang={lang}/>
      </div>
      <div className={styles.cell}>
        <WeatherWidget iso={iso} lang={lang}/>
      </div>
      <div className={styles.cell}>
        <ExchangeWidget currency={currency}/>
      </div>
    </div>
  );
};

export default WidgetsPanel;
