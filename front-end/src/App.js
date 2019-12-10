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
import BottomBar from './components/BottomBar'
import Home2 from './Home2'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// const MySwal = withReactContent(Swal)

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <TopMenu />
        <Route
          exact
          path='/donate/leslieknope2020'
          component={routerProps => <Donate {...routerProps} />}
        />
        <Switch>
          <Route
            exact
            path='/leslieknope2020'
            component={routerProps => <Home {...routerProps} />}
          />
          <Route
            exact
            path='/leslieknope2020_2'
            component={routerProps => <Home2 {...routerProps} />}
          />
          <Route
            exact
            path='/sex-ed/leslieknope2020'
            component={routerProps => <SexEd {...routerProps} />}
          />
          <Route
            exact
            path='/lilsebastian/leslieknope2020'
            component={routerProps => <LilSebastian {...routerProps} />}
          />
          <Route
            exact
            path='/gender-equality/leslieknope2020'
            component={routerProps => <GenderEquaity {...routerProps} />}
          />
          <Route component={() => <h1>404 - Page Not Found</h1>} />
        </Switch>
        <BottomBar />
      </div>
    )
  }
}

export default App
