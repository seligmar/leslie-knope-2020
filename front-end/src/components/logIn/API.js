// import APIKey from './APIKey'

const base_url = 'http://localhost:3001'
const signin_url = base_url + '/signin'
const newuser_url = base_url + '/new'
const validate_url = base_url + '/validate'
const get_events = base_url + '/events'
const new_event = base_url + '/create-event'

const post = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: localStorage.getItem('token')
    },
    body: JSON.stringify(data)
  }).then(resp => resp.json())
}

const get = url => {
  return fetch(url, {
    method: 'GET',
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }).then(resp => resp.json())
}

const signIn = user => post(signin_url, user)
const newUser = user => post(newuser_url, user)
const validate = () => get(validate_url)
const getEvents = () => get(get_events)
const newEvent = () => post(new_event)

export default { signIn, newUser, validate, getEvents, newEvent }

// 6. Be sure to replace every instance of the API keys with these new variables.
// E.g. if you had:
// url: 'https//www.whatever.com/?query&sig=12345'
// Now you will have:
// url: 'https://www.whatever.com/?query&sig=' + mykey

// var mykey = config.MY_KEY
// var secretkey = config.SECRET_KEY
