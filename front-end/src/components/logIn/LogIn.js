import React from 'react'

const LogIn = props => {
  const xButton = {
    position: 'relative',
    left: '48.5%',
    top: '0%'
  }

  const buttons = {
    backgroundColor: '#50b8e7',
    color: 'black',
    borderColor: '#232444'
  }

  const formHeader = {
    marginBottom: '2%',
    textDecoration: 'underline'
  }

  const bottomBorder = {
    marginBottom: '2%',
    marginTop: '2%'
  }

  const formBorder = {
    marginRight: '5%',
    marginLeft: '5%'
  }

  return (
    <div className='login'>
      <div className='field'>
        <div className='login-form-border'>
          <form
            style={formBorder}
            onSubmit={e => props.logIn(e)}
            className='ui form'
          >
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
                  <button className='ui button' style={buttons}>
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
