import React from 'react'
import { Link } from 'react-router-dom'

const TopMenu = props => {
  const styles = {
    position: 'absolute',
    left: '2%',
    top: '3.5%'
  }

  const dropdown = {
    'background-color': '#ffea00',
    color: '#ffea00',
    'font-size': '1.2rem',
    'border-color': '#ffea00',
    'padding- left': '4%',
    'padding - right': '4%'
  }
  const dropdown1 = {
    'background-color': '#ffea00',
    color: '#ffea00',
    'text-align': 'left',
    'box-shadow': 'none',
    'border-color': '#ffea00',
    'padding- left': '4%',
    'padding - right': '4%'
  }

  return (
    <div className='top-menu'>
      <Link to='/leslieknope2020'>
        <button className='button-login'>Home</button>
      </Link>
      <div style={dropdown} class='ui compact menu'>
        <div style={dropdown} class='ui simple dropdown item'>
          Issues
          <i class='dropdown icon' />
          <div style={dropdown1} class='menu'>
            <div class='item'>
              <Link to='/sex-ed/leslieknope2020'>
                <div className='button-dropdown'>Sex Ed</div>
              </Link>
              <Link to='/lilsebastian/leslieknope2020'>
                <button className='button-dropdown'>'Lil Sebastian</button>
              </Link>
              <Link to='/gender-equality/leslieknope2020'>
                <div className='button-dropdown'>Gender Equality</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Link to='/donate/leslieknope2020'>
        <button className='button-login'>Give Now</button>
      </Link>
      {/* <Link to='/getinvolved/elizabethwarren2020'>
        <button className='button-login'>Get Involved</button>
      </Link> */}
      {/* <Link to='/about/elizabethwarren2020'>
        <button className='button-login'>About</button>
      </Link> */}
      {/* <Link to='/my-reps/elizabethwarren2020'>
        <button className='button-login'>Find My Reps</button>
      </Link> */}
      {/*
      {props.showLogInState ? (
        <UserIndex
          showLogIn={props.showLogIn}
          userState={props.userState}
          logIn={props.logIn}
          loggedIn={props.loggedIn}
          HideLogIn={props.HideLogIn}
        />
      ) : null}
      {/* { */}
      {/* props.loggedIn ?
          <p>Welcome back, {props.username}! Thank you for your support!</p>
          : null
      } */}
    </div>
  )
}
export default TopMenu
