import React from 'react'
import './App.css'
import Home from './components/Home'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <Home />
        <p>This is my new app!</p>
      </div>
    )
  }
}

export default App
