/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import './styles.scss';

interface IVideo {
  url: string;
}

const Video: React.FC<IVideo> = ({ url }) => {
  const [height, setHeight] = useState(550);
  useEffect(() => {
    window.addEventListener('resize', resizeVideo);
    return () => window.removeEventListener('resize', resizeVideo);
  }, []);
  useEffect(() => {
    resizeVideo();
  });
  const resizeVideo = () => {
    if (document.documentElement.clientWidth < 800) {
      setHeight(450);
    }
    if (document.documentElement.clientWidth < 600) {
      setHeight(350);
    }
    if (document.documentElement.clientWidth < 480) {
      setHeight(250);
    }
    if (document.documentElement.clientWidth < 380) {
      setHeight(150);
    }
  };
  return (
    <section className='video'>
      <div className='container'>
        <ReactPlayer
          url={url}
          controls={true}
          width='100%'
          height={`${height}px`}
        />
      </div>
    </section>
  );
};

export default Video;
