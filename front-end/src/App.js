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
    this.setState({ username: user.username })
    localStorage.setItem('token', user.token)
  }

  logIn = e => {
    e.preventDefault()
    const user = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    this.LogInUser(user)
  }

  LogInUser = user => {
    API.signIn(user).then(resp => {
      if (resp.error) {
        this.responseGif(resp.error)
      } else {
        this.userState(resp)
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

  //   logInNewUser = e => {
  //     e.preventDefault()
  //     if (
  //       e.target.username.value === '' ||
  //       e.target.password.value === '' ||
  //       e.target.email.value === ''
  //     ) {
  //       MySwal.fire({
  //         title: 'Please try again',
  //         type: 'error',
  //         confirmButtonColor: '#b61b28',
  //         animation: false
  //       })
  //     } else {
  //       const user = {
  //         username: e.target.username.value,
  //         password: e.target.password.value,
  //         emailaddress: e.target.email.value
  //       }
  //       this.createNewUser(user)
  //     }
  //   }

  //   // createNewUser = user => {
  //   //   API.newUser(user)
  //   //     .then(data => {
  //   //       if (data.error) {
  //   //         throw Error(data.error)
  //   //       } else {
  //   //         this.props.userState(data)
  //   //         this.props.logIn()
  //   //         this.props.showLogIn()
  //   //       }
  //   //     })
  //   //     .catch(error => {
  //   //       this.responseGif(error)
  //   //     })
  //   // }

  render () {
    return (
      <div className='App'>
        <TopMenu logIn={this.logIn} />
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
