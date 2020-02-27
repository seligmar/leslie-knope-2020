import React from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { Route, Switch, Link } from 'react-router-dom'
import Home from './components/Home'
import SexEd from './components/issues/SexEd'
import LilSebastian from './components/issues/LilSebastian'
import GenderEquaity from './components/issues/GenderEquality'
import Donate from './components/Donate'
import Events from './components/events/Events'
import TopMenu from './components/navBars/TopMenu'
import BottomBar from './components/navBars/BottomBar'
import API from './components/logIn/API'
import Home2 from './Home2'
import About from './About'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

class App extends React.Component {
  state = {
    username: ''
  }

  userState = user => {
    console.log(user)
    this.setState({ username: user.username })
    // the local storage is part of the browser, the token is provided by the server
    localStorage.setItem('token', user.token)
  }

  logIn = e => {
    e.preventDefault()
    const user = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    this.LogInUser(user)
    e.target.reset()
  }

  LogInUser = user => {
    API.signIn(user).then(resp => {
      if (resp.error) {
        this.responseGif(resp.error)
      } else {
        this.userState(resp)
        this.successGif(user.username)
      }
    })
  }

  responseGif = response => {
    MySwal.fire({
      title: 'Please try again',
      text: `${response}`,
      confirmButtonColor: '#b61b28',
      animation: false
    })
  }

  successGif = response => {
    MySwal.fire({
      text: `Welcome, ${response}!`,
      confirmButtonColor: '#50b8e7',
      type: 'success'
    })
  }

  logInNewUser = e => {
    e.preventDefault()
    if (
      e.target.username.value === '' ||
      e.target.password.value === ''
      // || e.target.email.value === ''
    ) {
      MySwal.fire({
        title: 'Please try again',
        type: 'error',
        confirmButtonColor: '#b61b28',
        animation: false
      })
    } else {
      const user = {
        username: e.target.username.value,
        password: e.target.password.value,
        emailaddress: e.target.email.value
      }
      this.createNewUser(user)
      e.target.reset()
    }
  }

  createNewUser = user => {
    API.newUser(user)
      .then(data => {
        if (data.error) {
          // to throw and Error in a .then statement allows the .catch(), which
          // means all errors can be "caught" in the same place
          throw Error(data.error)
        } else {
          this.userState(data)
          this.successGif(data.username)
        }
      })
      .catch(error => {
        this.responseGif(error)
      })
  }

  signOut = () => {
    this.setState({ username: '' })
    // remove only single token as a lot of different info is stored locally
    localStorage.removeItem('token')
  }

  componentDidMount () {
    if (localStorage.getItem('token') !== null) {
      API.validate().then(data => {
        if (data.error) {
          this.responseGif(data.error)
        } else {
          this.userState(data)
        }
      })
    }
  }

  render () {
    return (
      <div className='App'>
        <TopMenu
          logIn={this.logIn}
          newUser={this.logInNewUser}
          user={this.state.username}
          signOut={this.signOut}
        />
        <Route
          path='/donate/leslieknope2020'
          component={routerProps => <Donate {...routerProps} />}
        />
        <Switch>
          <Route
            path='/events/leslieknope2020'
            component={routerProps => (
              <Events user={this.state.username} {...routerProps} />
            )}
          />
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
