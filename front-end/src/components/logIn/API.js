// import React from 'react'
// import APIKey from './APIKey'

const base_url = 'http://localhost:3001'
const signin_url = base_url + '/signin'

const post = (url, data) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(resp => resp.json())
}

const signIn = ({ username, password }) =>
  post(signin_url, { username, password })

export default { signIn }

// 6. Be sure to replace every instance of the API keys with these new variables.
// E.g. if you had:
// url: 'https//www.whatever.com/?query&sig=12345'
// Now you will have:
// url: 'https://www.whatever.com/?query&sig=' + mykey

// var mykey = config.MY_KEY
// var secretkey = config.SECRET_KEY
