import React from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { Route, Switch, Link } from 'react-router-dom'
import Home from './components/Home'
import SexEd from './components/issues/SexEd'
import LilSebastian from './components/issues/LilSebastian'
import GenderEquaity from './components/issues/GenderEquality'
import Donate from './components/Donate'
import TopMenu from './TopMenu'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// const MySwal = withReactContent(Swal)

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <TopMenu />
        <Route
          path='/donate/leslieknope2020'
          component={routerProps => <Donate {...routerProps} />}
        />
        <Switch>
          <Route
            path='/leslieknope2020'
            component={routerProps => <Home {...routerProps} />}
          />
          <Route
            path='/sex-ed/leslieknope2020'
            component={routerProps => <SexEd {...routerProps} />}
          />
          <Route
            path='/lilsebastian/leslieknope2020'
            component={routerProps => <LilSebastian {...routerProps} />}
          />
          <Route
            path='/gender-equality/leslieknope2020'
            component={routerProps => <GenderEquaity {...routerProps} />}
          />
          <p>This is my new app!</p>
        </Switch>
      </div>
    )
  }
}

export default App
