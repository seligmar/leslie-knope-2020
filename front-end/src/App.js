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

const MySwal = withReactContent(Swal)

class App extends React.Component {
  state = {
    donationsBar: true,
    username: '',
    loggedIn: false,
    showLogIn: false
  }

  resetDonationsBar = () => {
    this.setState({ donationsBar: !this.state.donationsBar })
  }

  closeGive = () => {
    this.setState({ donationsBar: !this.state.donationsBar })
  }

  logIn = () => {
    this.setState({ loggedIn: true })
  }

  showLogIn = () => {
    this.setState({ showLogIn: !this.state.showLogIn })
  }

  HideLogIn = () => {
    this.setState({ showLogIn: !this.state.showLogIn })
  }

  userState = user => {
    this.setState({ username: user.username })
    localStorage.setItem('token', user.token)
  }

  logout = () => {
    this.setState({ showLogIn: !this.state.showLogIn })
    this.setState({ loggedIn: false })
    this.setState({ username: '' })
    localStorage.removeItem('token')
  }

  // componentDidMount () {
  //   if (localStorage.getItem('token') !== undefined) {
  //     API.validate().then(data => {
  //       if (data.error) {
  //       } else {
  //         API.signIn(data).then(data => {
  //           if (data.error) {
  //             this.responseGif(data.error)
  //           } else {
  //             this.userState(data)
  //             this.logIn()
  //             this.showLogIn()
  //           }
  //         })
  //       }
  //     })
  //   }
  // }

  responseGif = response => {
    MySwal.fire({
      title: 'Please try again',
      text: `${response}`,
      confirmButtonColor: '#b61b28',
      animation: false
    })
  }

  render () {
    return (
      <div className='App'>
        <TopMenu
          loggedIn={this.state.loggedIn}
          logout={this.logout}
          showLogInState={this.state.showLogIn}
          username={this.state.username}
          logIn={this.logIn}
          HideLogIn={this.HideLogIn}
          userState={this.userState}
          showLogIn={this.showLogIn}
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
