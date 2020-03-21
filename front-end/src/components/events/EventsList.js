import React from 'react'
import './event-list.css'

const EventsList = props => {
  return (
    <div>
      {props.events.map(event => (
        <div className='event-div-style' key={event.id}>
          <div className='event-div'>
            <div className='ui fluid card'>
              <p class='header'>{event.title}</p>
              <div className='class-content'>
                <img
                  className='ui small right floated image'
                  alt='Warren Yard Sign'
                  src='
                  https://cdn.shopify.com/s/files/1/0250/1217/4900/products/p_r_pawneegoddessesbadge_mens_shortsleeve_tshirt_rollover_7_1200x630.jpg?v=1572164280                  '
                />
                <p>
                  <p> on </p>
                  {event.month} {event.day}, {event.year}
                </p>
                <p>
                  <p>at</p>
                  {event.time} {event.timestamp}
                </p>
                <div class='description'>{event.street_address}</div>
                <div class='description'>
                  {event.city}, {event.state} {event.zip}
                </div>
                {/* <button className='event-button' onClick={(e) => props.rsvp(e, event.id)}>RSVP!</button> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default EventsList
