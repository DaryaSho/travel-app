import React, { useEffect, useState } from 'react';
import styles from './WeatherWidget.module.css';

const WeatherWidget = ({ iso, lang }: { iso: string, lang: string }) => {
  const capitals = {
    IT: 'Rome',
    US: 'Washington',
    IS: 'Reykjavik',
    CH: 'Bern',
    RU: 'Moscow',
    JP: 'Tokyo',
    PT: 'Lisbon',
    PE: 'Lima',
  };

  const languages = {
    eng: 'en',
    rus: 'ru',
    bel: 'uk',
  };

  const [data, setData] = useState({
    temp: '',
    desc: '',
    icon: '',
  });

  useEffect(() => {
    // @ts-ignore
    fetch(`http://api.weatherapi.com/v1/current.json?key=4561c5cd7b6f4a87898134601210702&lang=${languages[lang]}&q=${capitals[iso]}`)
      // eslint-disable-next-line no-return-assign
      .then((res) => res.json())
      .then((result) => {
        setData({
          temp: result.current.temp_c,
          desc: result.current.condition.text,
          icon: result.current.condition.icon,
        });
      });
  }, []);

  return (
    <div className={styles.container}>
      <img src={data.icon} />
      <div className={styles.temp}>{data.temp}&#176;C</div>
      <div className={styles.italic}>{data.desc}</div>
    </div>
  );
};

export default WeatherWidget;
