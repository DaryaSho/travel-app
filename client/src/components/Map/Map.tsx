/* import/no-unresolved */
import mapboxgl from 'mapbox-gl';
import React from 'react';
import ReactMapGL, { Marker, FullscreenControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './Map.module.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kZXZyb20iLCJhIjoiY2treG82NGFpNTRiZjJwcXQ5Y3E5MDNhciJ9.SJYOvB1s69BxXCFfy_iQJQ';

const Map = ({ lang, iso }: { lang: string, iso: string }) => {
  const capitalCoordinates = {
    IT: [42.0133203, 12.3529321],
    US: [39.0050368, -77.2065427],
    IS: [64.145981, -21.9422367],
    CH: [46.8382351, 7.6004502],
    RU: [55.8504461, 37.5074943],
    JP: [35.8128387, 139.6094549],
    PT: [38.8277507, -9.3065919],
    PE: [-11.9121065, -77.1565256],
  };

  const [viewport, setViewport] = React.useState({
    // @ts-ignore
    latitude: capitalCoordinates[iso][0],
    // @ts-ignore
    longitude: capitalCoordinates[iso][1],
    zoom: 5,
  });

  const fullscreenControlStyle = {
    right: 10,
    top: 10,
  };

  return (
    <ReactMapGL
      {...viewport}
      width={'100%'}
      height={'500px'}

      onViewportChange={(view: any) => setViewport(view)}
      mapStyle='mapbox://styles/mapbox/dark-v10'
      mapboxApiAccessToken={mapboxgl.accessToken}>
      <FullscreenControl style={fullscreenControlStyle} />
      <Marker
        // @ts-ignore
        latitude={capitalCoordinates[iso][0]}
        // @ts-ignore
        longitude={capitalCoordinates[iso][1]} >
        <div className={styles.marker}/>
      </Marker>
    </ReactMapGL>
  );
};

export default Map;
