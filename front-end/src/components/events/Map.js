import React from 'react'
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from 'react-google-maps'
import Google_API_Key from './APIKey'

const URL = `https://maps.googleapis.com/maps/api/js?v=3.esp&libraries=geometry,drawing,places&key=${Google_API_Key}`

const MapOverView = props => {
  const Map = () => {
    return (
      <GoogleMap
        defaultZoom={3}
        defaultCenter={{ lat: 37.9716, lng: -87.5711 }}
      >
        {props.events.map(event => (
          <Marker
            key={event.id}
            position={{ lat: event.lat, lng: event.lng }}
          />
        ))}
      </GoogleMap>
    )
  }

  const WrappedMap = withScriptjs(withGoogleMap(Map))

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

export default MapOverView
