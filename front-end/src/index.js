import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ScrollToTop from './components/ScrollToTop'
// import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
