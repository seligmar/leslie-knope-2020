import React from 'react'

const LogIn = props => {
  debugger
  const xButton = {
    position: 'relative',
    left: '48.5%',
    top: '0%'
  }

  const buttons = {
    'background-color': '#50b8e7',
    color: 'black',
    'border-color': '#232444'
  }

  const formHeader = {
    'margin-bottom': '2%',
    'text-decoration': 'underline'
  }

  const bottomBorder = {
    'margin-bottom': '2%',
    'margin-top': '2%'
  }

  const formBorder = {
    'margin-right': '5%',
    'margin-left': '5%'
  }

  return (
    <div className='login'>
      <div class='field'>
        <div className='login-form-border'>
          <form
            style={formBorder}
            onSubmit={e => props.logIn(e)}
            className='ui form'
          >
            {/* {' '} */}
            <button
              style={xButton}
              // onClick={() => props.HideLogIn()}
            >
              X{' '}
            </button>
            <div style={formHeader}>Log In</div>
            <label>UserName: </label>
            <input type='text' name='username' placeholder='username' />
            <label>Password: </label>
            <input type='password' name='password' placeholder='password' />
            <label>Email Address: </label>
            <input type='email' name='email' placeholder='email address' />{' '}
            <div style={bottomBorder}>
              <div className='buttons-login'>
                {' '}
                <div className='two ui buttons'>
                  {' '}
                  <button className='ui button' style={buttons} type='submit'>
                    Log In{' '}
                  </button>{' '}
                  <button
                    className='ui button'
                    style={buttons}
                    // onClick={e => props.showNewUserBar(e)}
                  >
                    Create A New Account
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LogIn
