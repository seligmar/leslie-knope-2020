import React from 'react'
import './event-list.css'

const EventsList = props => {
  return (
    <div>
      {props.events.map(event => (
        <div className='event-div-style' key={event.id}>
          <div className='event-div'>
            <div className='ui fluid card'>
              <div className='class-content'>
                <img
                  className='ui small right floated image'
                  alt='Warren Yard Sign'
                  src='
                  https://cdn.shopify.com/s/files/1/0250/1217/4900/products/p_r_pawneegoddessesbadge_mens_shortsleeve_tshirt_rollover_7_1200x630.jpg?v=1572164280                  '
                />
                <p class='header'>{event.title}</p>
                {/* <p>{event.start_time} - {event.start_time} on {event.day}/{event.month}/{event.year}</p> */}
                <p class='description'>{event.street_address}</p>
                <p class='description'>
                  {event.city}, {event.state} {event.zip}
                </p>
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
