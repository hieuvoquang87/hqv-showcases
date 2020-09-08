import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from '@emotion/styled'

const Marker = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  background-color: red;
  border: 3px solid #fff;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  &:hover {
    z-index: 1;
  }
`;

const SAN_DIEGO_CENTER = {
  lat: 32.734778,
  lng: -117.152630
}

const MuliMarkerMap = ({ locations=[] }) => {
  const places = locations.map((place) => {
    const loc = place.split(',')
    return {
      lat: Number(loc[0]),
      lng: Number(loc[1])
    }
  })
  const zoom = 11
  return (
    <div style={{ height: '80%', width: '80%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyDhJJ8IDX3HGqgUFBI8GZ2ylkz0ukS23ZY'}} 
        defaultCenter={SAN_DIEGO_CENTER}
        defaultZoom={zoom}
      >
        {places && places.map((location, idx) => (
          <Marker
            key={idx}
            text={idx}
            lat={Number(location.lat)}
            lng={Number(location.lng)}
          />
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default MuliMarkerMap