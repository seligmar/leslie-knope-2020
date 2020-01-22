import React from 'react'
import { createStore, combineReducers } from 'redux'
import LogIn from '../LogIn'

const LogIn = (state, action) => {}

const loggedIn = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN':
      return LogIn()
    case 'LOGOUT':
      return LogOut()
    default:
      return state
  }
}

const rootReducer = combineReducers({
  logedIn: loggedIn
})

const store = createStore(rootReducer)

export default store
