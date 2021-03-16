import React, { useEffect, useState } from 'react';
import styles from './WeatherWidget.module.css';

const WeatherWidget = ({ capital }: { capital: string }) => {
  const [data, setData] = useState({
    temp: '',
    desc: '',
    icon: '',
  });

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=4561c5cd7b6f4a87898134601210702&q=${capital}`)
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
