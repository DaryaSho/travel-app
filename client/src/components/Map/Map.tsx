// ts ignore
import mapboxgl from 'mapbox-gl';
import React from 'react';
// ts ignore
import ReactMapGL, { Marker, Source, Layer } from 'react-map-gl';
// ts ignore
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './Map.module.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kZXZyb20iLCJhIjoiY2treG82NGFpNTRiZjJwcXQ5Y3E5MDNhciJ9.SJYOvB1s69BxXCFfy_iQJQ';

const Map = ({ capital }: {capital: string}) => {
  const capitalCoordinates = {
    Rome: [41.9233203, 12.4529321],
    Washington: [38.9050368, -77.0565427],
    Reykjavik: [64.145981, -21.9422367],
    Bern: [46.9582351, 7.4504502],
    Moscow: [55.7804461, 37.5974943],
    Tokyo: [35.7128387, 139.7594549],
    Lisbon: [38.7577507, -9.1565919],
    Lima: [-12.0521065, -77.0365256],
  };

  const [viewport, setViewport] = React.useState({
    // @ts-ignore
    latitude: capitalCoordinates[capital][0],
    // @ts-ignore
    longitude: capitalCoordinates[capital][1],
    zoom: 5,
  });

  return (
    <ReactMapGL
      {...viewport}
      width={'100%'}
      height={'500px'}
      onViewportChange={(view: any) => setViewport(view)}
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
