import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ScrollToTop from './components/navBars/ScrollToTop'
import { BrowserRouter } from 'react-router-dom'
// import { createStore } from 'redux'

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
