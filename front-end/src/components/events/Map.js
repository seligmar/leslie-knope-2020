import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

const URL =
  'https://maps.googleapis.com/maps/api/js?v=3.esp&libraries=geometry,drawing,places'

const MapSpecs = () => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 42.18123, lng: -88.3159 }}
    />
  )
}

const WrappedMap = withScriptjs(withGoogleMap(MapSpecs))

const Map = () => {
  return (
    <div style={{ height: '100vw', width: '100vh' }}>
      <WrappedMap
        googleMapURL={URL}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  )
}

export default Map
