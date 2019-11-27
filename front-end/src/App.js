import React from 'react'
import './App.css'
import { Route, Switch, Link } from 'react-router-dom'
import Home from './components/Home'
import SexEd from './components/issues/SexEd'
import LilSebastian from './components/issues/LilSebastian'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <Switch>
          <Route
            path='/leslieknope2020'
            component={routerProps => <Home {...routerProps} />}
          />
          <Route
            path='/sexed'
            component={routerProps => <SexEd {...routerProps} />}
          />
          <Route
            path='/lilsebastian'
            component={routerProps => <LilSebastian {...routerProps} />}
          />
          <p>This is my new app!</p>
        </Switch>
      </div>
    )
  }
}

export default App
