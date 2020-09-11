import React, { useState } from 'react'
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps'
import Google_API_Key from './APIKey'
import './event-list.css'

const URL = `https://maps.googleapis.com/maps/api/js?v=3.esp&libraries=geometry,drawing,places&key=${Google_API_Key}`

// video recommends breaking this into multiple functions- to pass in props need to make this one
// single function. 'Map' is keyword and must be passed into WrappedMap function
// this doesnt work if this is a class- it needs to remain a basic component (hence the hook)
// to change the heart icons on the map back to the standard red google maps pointers remove:
// icon={{
//   url:
//     'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png',
//   scaledSize: new window.google.maps.Size(25, 25)
// }}

const MapOverView = props => {
  const [selectedEvent, setSelectedEvent] = useState(null)
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
            onClick={() => {
              setSelectedEvent(event)
            }}
            icon={{
              url:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png',
              scaledSize: new window.google.maps.Size(25, 25)
            }}
          />
        ))}
        {selectedEvent ? (
          <InfoWindow
            position={{ lat: selectedEvent.lat, lng: selectedEvent.lng }}
            onCloseClick={() => setSelectedEvent(null)}
          >
            <div style={{ color: '#232444' }}>
              <p>{selectedEvent.title}</p>
              <p>
                {selectedEvent.time}
                {selectedEvent.timestamp} on {selectedEvent.day}{' '}
                {selectedEvent.month}, {selectedEvent.year}
              </p>
              <p>{selectedEvent.street_address}</p>
              {selectedEvent.city}, {selectedEvent.state}, {selectedEvent.zip}
              {/* {selectedEvent.img} */}
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    )
  }

  const WrappedMap = withScriptjs(withGoogleMap(Map))

  return (
    <div className='map-box'>
      <div style={{ width: '100%', height: '60vh' }}>
        <WrappedMap
          googleMapURL={URL}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    </div>
  )
}

export default MapOverView
