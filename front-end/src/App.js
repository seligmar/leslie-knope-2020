import React from 'react'
import './App.css'
import { Route, Switch, Link } from 'react-router-dom'
import Home from './components/Home'
import SexEd from './components/issues/SexEd'
import LilSebastian from './components/issues/LilSebastian'
import GenderEquaity from './components/issues/GenderEquality'
import Donate from './components/Donate'
import TopMenu from './TopMenu'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <Route
          path='/donate/leslieknope2020'
          component={routerProps => <Donate {...routerProps} />}
        />
        <TopMenu />
        <Switch>
          <Route
            path='/leslieknope2020'
            component={routerProps => <Home {...routerProps} />}
          />
          <Route
            path='/sex-ed'
            component={routerProps => <SexEd {...routerProps} />}
          />
          <Route
            path='/lilsebastian'
            component={routerProps => <LilSebastian {...routerProps} />}
          />
          <Route
            path='/gender-equality'
            component={routerProps => <GenderEquaity {...routerProps} />}
          />
          <p>This is my new app!</p>
        </Switch>
      </div>
    )
  }
}

export default App
