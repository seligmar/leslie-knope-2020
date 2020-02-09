import React from 'react'
import { Link } from 'react-router-dom'
import LogIn from '../logIn/LogIn'
import NewSupporter from '../logIn/NewSupporter'

const TopMenu = props => {
  const styles = {
    position: 'absolute',
    left: '2%',
    top: '3.5%'
  }

  const dropdown = {
    backgroundColor: '#ffea00',
    color: 'black',
    fontSize: '1.2rem',
    borderColor: '#ffea00',
    paddingLeft: '4%',
    paddingRight: '4%'
  }
  const dropdown1 = {
    backgroundColor: '#ffea00',
    color: 'black',
    textAlign: 'left',
    boxShadow: 'none',
    borderColor: '#ffea00',
    paddingLeft: '4%',
    paddingRight: '4%'
  }

  return (
    <div className='top-menu'>
      <Link to='/leslieknope2020'>
        <button className='button-login'>Home</button>
      </Link>
      <i className='align justify icon' style={styles} />
      {props.user ? (
        <button
          onClick={() => props.signOut()}
          id='logout'
          className='button-login'
        >
          Log Out
        </button>
      ) : (
        <button id='login' className='button-login'>
          Log In
        </button>
      )}
      <LogIn logIn={props.logIn} />
      <NewSupporter newUser={props.newUser} />
      <div style={dropdown} class='ui compact menu'>
        <div style={dropdown} class='ui simple dropdown item'>
          Issues
          <i className='dropdown icon' />
          <div style={dropdown1} class='menu'>
            <div className='item'>
              <Link to='/sex-ed/leslieknope2020'>
                <div className='button-dropdown'>Sex Ed</div>
              </Link>
              <Link to='/lilsebastian/leslieknope2020'>
                <div className='button-dropdown'>'Lil Sebastian</div>
              </Link>
              <Link to='/gender-equality/leslieknope2020'>
                <div className='button-dropdown'>Gender Equality</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <button className='button-login'>Issues</button> */}
      <Link to='/donate/leslieknope2020'>
        <button className='button-login'>Give Now</button>
      </Link>
      <Link to='about/leslieknope2020'>
        <button className='button-login'>About</button>
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
      {/* {props.showLogInState ? (
        <UserIndex
          showLogIn={props.showLogIn}
          userState={props.userState}
          logIn={props.logIn}
          loggedIn={props.loggedIn}
          HideLogIn={props.HideLogIn}
        />
      ) : null}
      {props.loggedIn ? (
        <p>Welcome back, {props.username}! Thank you for your support!</p>
      ) : null} */}
    </div>
  )
}
export default TopMenu
