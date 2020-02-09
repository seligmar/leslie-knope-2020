// import APIKey from './APIKey'

const base_url = 'http://localhost:3001'
const signin_url = base_url + '/signin'
const newuser_url = base_url + '/new'
const validate_url = base_url + '/validate'

const post = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Application: localStorage.getItem('token')
    },
    body: JSON.stringify(data)
  }).then(resp => resp.json())
}

const get = url => {
  return fetch(url, {
    method: 'GET',
    headers: {
      Application: localStorage.getItem('token')
    }
  }).then(resp => resp.json())
}

const signIn = user => post(signin_url, user)
const newUser = user => post(newuser_url, user)
const validate = () => get(validate_url)

export default { signIn, newUser, validate }

// 6. Be sure to replace every instance of the API keys with these new variables.
// E.g. if you had:
// url: 'https//www.whatever.com/?query&sig=12345'
// Now you will have:
// url: 'https://www.whatever.com/?query&sig=' + mykey

// var mykey = config.MY_KEY
// var secretkey = config.SECRET_KEY
