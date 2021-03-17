import React, { useEffect, useState } from 'react';

const TimeWidget = ({ iso, lang }: { iso: string, lang: string }) => {
  const timeZones = {
    IT: 'Europe/Rome',
    US: 'America/New_York',
    IS: 'Atlantic/Reykjavik',
    CH: 'Europe/Zurich',
    RU: 'Europe/Moscow',
    JP: 'Asia/Tokyo',
    PT: 'Europe/Lisbon',
    PE: 'America/Lima',
  };

  const locales = {
    eng: 'en-US',
    rus: 'ru-RU',
    bel: 'ru-BY',
  };

  // @ts-ignore
  const getTime = () => (new Date().toLocaleString(locales[lang], {
    // @ts-ignore
    timeZone: timeZones[iso],
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    month: 'long',
    day: 'numeric',
  }));

  const [time, setTime] = useState(getTime());

  const tick = () => {
    setTime(getTime());
  };

  useEffect(() => {
    setTimeout(tick, 1000);
    // @ts-ignore
    return clearInterval(tick);
  });

  return (
    <p>{time}</p>
  );
};

export default TimeWidget;
