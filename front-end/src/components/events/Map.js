import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
import Google_API_Key from './APIKey'

const URL = `https://maps.googleapis.com/maps/api/js?v=3.esp&libraries=geometry,drawing,places&key=${Google_API_Key}`

const MapSpecs = () => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 37.9716, lng: 87.5711 }}
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
