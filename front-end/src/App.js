import React from 'react'
import './App.css'
import { Route, Switch, Link } from 'react-router-dom'
import Home from './components/Home'
import SexEd from './components/issues/SexEd'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <Switch>
          <Route
            path='/leslieknope2020'
            component={routerProps => <Home {...routerProps} />}
          />
          <SexEd />
          <p>This is my new app!</p>
        </Switch>
      </div>
    )
  }
}

export default App
