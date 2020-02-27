import React from 'react'
import API from '../logIn/API'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import google_API_Key from './APIKey'

const MySwal = withReactContent(Swal)

class NewEventForm extends React.Component {
  newEvent = e => {
    console.log(e.target.ampm.value)
    e.preventDefault()
    if (this.props.user.length === 0) {
      MySwal.fire({
        text: 'Please log in to create a new event',
        type: 'error',
        confirmButtonColor: '#b61b28'
      })
      return
    } else {
      let address = []
      let line1 = e.target.addressLine1.value
      let city = e.target.city.value
      let state = e.target.state.value
      let zip = e.target.zip.value
      let newAddress = address.concat(
        line1.replace(/[^\w ]/, '').split(' '),
        city.replace(/[^\w ]/, '').split(' '),
        state.replace(/[^\w ]/, '').split(' '),
        zip.replace(/[^\w ]/, '').split(' ')
      )
      let title = e.target.title.value
      let start = e.target.start.value
      let day = e.target.date.value
      let date = day.substring(8)
      let year = day.slice(0, 4)
      let month = day.slice(5, 7)
      let compareDate = month + date + year
      let today = new Date()
      let dd = String(today.getDate()).padStart(2, '0')
      let mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
      let yyyy = today.getFullYear()
      let todaySDATE = yyyy + mm + dd
      let ampm = e.target.ampm.value
      if (ampm === '0') {
        let newNum = Number(start[0] + start[1]) + 12
        start = newNum + ':' + start[3] + start[4]
      }
      if (ampm === '1' && Number(start[0] + start[1]) > 12) {
        MySwal.fire({
          title: 'Please format the start time 00:00',
          confirmButtonColor: '#b61b28',
          animation: false
        })
        return
      }
      if (
        start.length !== 5 ||
        !start.includes(':', 2) ||
        typeof parseInt(start[0]) !== 'number' ||
        typeof parseInt(start[0]) >= 3 ||
        typeof parseInt(start[1]) !== 'number' ||
        typeof parseInt(start[3]) !== 'number' ||
        typeof parseInt(start[4]) !== 'number'
      ) {
        MySwal.fire({
          title: 'Please format the start time 00:00',
          confirmButtonColor: '#b61b28',
          animation: false
        })
        return
      }
      if (
        month.length !== 2 ||
        typeof parseInt(month[0]) !== 'number' ||
        typeof parseInt(month[1]) !== 'number'
      ) {
        MySwal.fire({
          title: 'Please format the month MM',
          confirmButtonColor: '#b61b28',
          animation: false
        })
        return
      }
      if (year < yyyy || (month <= mm && date <= dd)) {
        MySwal.fire({
          title: 'Please enter a date after today',
          confirmButtonColor: '#b61b28',
          animation: false
        })
        return
      }
      if (
        zip.length !== 5 ||
        typeof parseInt(zip[0]) !== 'number' ||
        typeof parseInt(zip[1]) !== 'number' ||
        typeof parseInt(zip[2]) !== 'number' ||
        typeof parseInt(zip[3]) !== 'number' ||
        typeof parseInt(zip[4]) !== 'number'
      ) {
        MySwal.fire({
          title: 'Please re-enter the zipcode',
          confirmButtonColor: '#b61b28',
          animation: false
        })
      }
      const eventData = {
        title: title.toUpperCase(),
        start_time: start,
        street_address_1: line1,
        city: city,
        state: state,
        zip: zip,
        day: date,
        month: month,
        year: year
      }
      this.reformatDate(eventData, newAddress.join('+'))
    }
  }

  reformatDate = (event, address) => {
    let newDate =
      event['year'] +
      '-' +
      event['month'] +
      '-' +
      event['day'] +
      'TO' +
      event['start_time'] +
      ':00.000Z'
    delete event['year']
    delete event['month']
    delete event['day']
    delete event['start_time']
    event.datetime = newDate
    console.log(event)
    this.getLatLngFromAPI(event, address)
  }

  getLatLngFromAPI = (event, address) => {
    let key = google_API_Key['google_API_Key']
    return fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`
    )
      .then(resp => resp.json())
      .then(data => this.parseAPI(event, data))
  }

  parseAPI = (event, data) => {
    const lat = data['results']['0']['geometry']['location']['lat']
    const lng = data['results']['0']['geometry']['location']['lng']
    const coordinates = {
      lat: lat,
      lng: lng
    }
    this.mergeInfo(event, coordinates)
  }

  mergeInfo = (event, coordinates) => {
    const newEvent = Object.assign(event, coordinates)
    this.postEvent(newEvent)
  }

  postEvent = event => {
    console.log(event)
    API.newEvent(event)
      .then(data => {
        if (data.error) {
          throw Error(data.error)
        } else {
          MySwal.fire({
            text: 'Please log in to create a new event',
            type: 'error',
            confirmButtonColor: '#b61b28'
          })
          // this.props.hideForm()
        }
      })
      .catch(error => {
        MySwal.fire({
          text: `${error}`,
          type: 'error',
          confirmButtonColor: '#b61b28'
        })
      })
  }

  render () {
    const buttons = {
      'background-color': '#50b8e7',
      color: 'black',
      'margin-top': '3%',
      width: '80%'
    }

    const formHeader = {
      'margin-bottom': '2%',
      'text-decoration': 'underline'
    }
    const formHeader2 = {
      'margin-top': '3%',
      'margin-bottom': '2%',
      'text-decoration': 'underline'
    }
    const formPadding = {
      padding: '2%',
      'margin-top': '3%',
      'margin-bottom': '3%'
    }

    return (
      <div style={{ 'margin-top': '2%' }} className='event-login'>
        <div class='event-field'>
          <div className='form-border'>
            <form
              onSubmit={e => this.newEvent(e)}
              className='ui form'
              style={formPadding}
            >
              <div style={formHeader}>Let Us Know What You Have Planned!</div>
              <label>Title: </label>
              <input type='text' name='title' placeholder='Event Title' />
              <label>Start Time</label>
              <input type='text' name='start' placeholder='Start Time 00:00' />
              <br></br> <br></br>
              <div class='field'>
                <select class='field' name='ampm'>
                  <option value=''>Time</option>
                  <option value='1'>am</option>
                  <option value='0'>pm</option>
                </select>
              </div>
              <label>Event Date: </label>
              <input
                type='date'
                name='date'
                min='2019-10-24'
                max='2020-11-03'
              />
              <br></br>
              <div style={formHeader2}>
                Please Enter the Address Where the Event Will Occor:
              </div>
              <label>Address: </label>
              <input type='text' name='addressLine1' placeholder='Address' />
              <label>City: </label>
              <input type='text' name='city' placeholder='City' />
              <label>State: </label>
              <input type='text' name='state' placeholder='State Abreviation' />
              <label>Zip: </label>
              <input type='text' name='zip' placeholder='Zip Code' />
              <button
                className='centered ui button'
                style={buttons}
                type='submit'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default NewEventForm
