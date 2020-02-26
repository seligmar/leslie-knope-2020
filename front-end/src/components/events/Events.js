import React, { useDebugValue } from 'react'
import EventsList from './EventsList'
import API from '../logIn/API'
import NewEventForm from './NewEventForm'

const months = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December'
}

class Events extends React.Component {
  state = {
    events: []
  }

  componentDidMount () {
    this.getEvents()
  }

  getEvents = () => {
    API.getEvents().then(events => this.reFormatDate(events))
  }

  reFormatDate = events => {
    let newArr = events
      .map(event => event.datetime.split('-'))
      .map(event => months[event[1]])
    for (let i = 0; i < events.length; i++) {
      events[i].month = newArr[i]
      events[i].year = events[i].datetime.split('-')[0]
      events[i].day =
        events[i].datetime.split('-')[2][0] +
        events[i].datetime.split('-')[2][1]
      events[i].time =
        events[i].datetime.split('-')[2][3] +
        events[i].datetime.split('-')[2][4] +
        events[i].datetime.split('-')[2][5] +
        events[i].datetime.split('-')[2][6] +
        events[i].datetime.split('-')[2][7]
      delete events[i].datetime
    }
    this.reFormatTime(events)
  }

  reFormatTime = events => {
    events.map(event => {
      if (Number(event.time[0] + event.time[1]) > 12) {
        event.time =
          '0' +
          (Number(event.time[0] + event.time[1]) - 12).toString() +
          event.time[2] +
          event.time[3] +
          event.time[3]
        event.timestamp = 'pm'
      } else {
        event.timestamp = 'am'
      }
    })
    this.setState({ events })
  }

  // newEvent = () => {

  // }

  render () {
    return (
      <div>
        <NewEventForm />
        {this.state.events.length > 0 ? (
          <EventsList events={this.state.events} />
        ) : null}
      </div>
    )
  }
}

export default Events
