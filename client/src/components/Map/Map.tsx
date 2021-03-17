/* import/no-unresolved */
import mapboxgl from 'mapbox-gl';
import React from 'react';
import ReactMapGL, { Marker, Source, Layer } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './Map.module.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kZXZyb20iLCJhIjoiY2treG82NGFpNTRiZjJwcXQ5Y3E5MDNhciJ9.SJYOvB1s69BxXCFfy_iQJQ';

const Map = ({ capital }: {capital: string}) => {
  const capitalCoordinates = {
    Rome: [42.0133203, 12.3529321],
    Washington: [39.0050368, -77.2065427],
    Reykjavik: [64.145981, -21.9422367],
    Bern: [46.8382351, 7.6004502],
    Moscow: [55.8504461, 37.5074943],
    Tokyo: [35.8128387, 139.6094549],
    Lisbon: [38.8277507, -9.3065919],
    Lima: [-11.9121065, -77.1565256],
  };

  return (
    <ReactMapGL
      width={'100%'}
      height={'500px'}
      // @ts-ignore
      latitude={capital ? capitalCoordinates[capital][0] : 0}
      // @ts-ignore
      longitude={capital ? capitalCoordinates[capital][1] : 0}
      zoom={5}
      mapStyle='mapbox://styles/mapbox/dark-v10'
      mapboxApiAccessToken={mapboxgl.accessToken}>
      <Marker
        // @ts-ignore
        latitude={capital ? capitalCoordinates[capital][0] : 0}
        // @ts-ignore
        longitude={capital ? capitalCoordinates[capital][1] : 0} >
        <div className={styles.marker}/>
      </Marker>
    </ReactMapGL>
  );
};

export default Map;
