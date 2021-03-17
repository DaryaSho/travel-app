import React, { useEffect, useState } from 'react';

const TimeWidget = ({ capital }: { capital: string }) => {
  const timeZones = {
    Rome: 'Europe/Rome',
    Washington: 'America/New_York',
    Reykjavik: 'Atlantic/Reykjavik',
    Bern: 'Europe/Zurich',
    Moscow: 'Europe/Moscow',
    Tokyo: 'Asia/Tokyo',
    Lisbon: 'Europe/Lisbon',
    Lima: 'America/Lima',
  };

  const getTime = () => (new Date().toLocaleString('en-US', {
    // @ts-ignore
    timeZone: timeZones[capital],
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
