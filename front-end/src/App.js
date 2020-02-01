import React from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { Route, Switch, Link } from 'react-router-dom'
import Home from './components/Home'
import SexEd from './components/issues/SexEd'
import LilSebastian from './components/issues/LilSebastian'
import GenderEquaity from './components/issues/GenderEquality'
import Donate from './components/Donate'
import TopMenu from './components/navBars/TopMenu'
import BottomBar from './components/navBars/BottomBar'
import Home2 from './Home2'
import About from './About'
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

// const MySwal = withReactContent(Swal)

class App extends React.Component {
  state = {
    loggedIn: false,
    username: '',
    showLogIn: false
  }

  userState = user => {
    this.setState({ username: user.username })
    localStorage.setItem('token', user.token)
  }

  render () {
    return (
      <div className='App'>
        <TopMenu
        // userState={this.userState}
        // loggedIn={this.state.loggedIn}
        // showLogIn={this.state.showLogIn}
        />
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
            path='/leslieknope2020_2'
            component={routerProps => <Home2 {...routerProps} />}
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
            path='/about/leslieknope2020'
            component={routerProps => <About {...routerProps} />}
          />
          <Route
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
