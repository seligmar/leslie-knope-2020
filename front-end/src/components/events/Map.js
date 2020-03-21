import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

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
  return WrappedMap
}

export default Map
