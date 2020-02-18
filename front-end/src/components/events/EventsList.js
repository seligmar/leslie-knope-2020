import React from 'react'

const EventsList = props => {
  return (
    <div>
      <div>{props.events[0].city}</div>
      is this working?
    </div>
  )
}

export default EventsList
