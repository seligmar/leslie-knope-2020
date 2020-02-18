import React, { useDebugValue } from 'react'
import EventsList from './EventsList'
import API from '../logIn/API'

class Events extends React.Component {
  state = {
    events: []
  }

  componentDidMount () {
    this.getEvents()
  }

  getEvents = () => {
    API.getEvents().then(events => this.setState({ events }))
  }

  render () {
    return (
      <div>
        {this.state.events.length > 0 ? (
          <EventsList events={this.state.events} />
        ) : null}
      </div>
    )
  }
}

export default Events
