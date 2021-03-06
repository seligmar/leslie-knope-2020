import React from 'react'
//https:semantic-ui.com/behaviors/form.html

const NewSupporter = props => {
  const xButton = {
    position: 'relative',
    left: '48.5%',
    top: '0%'
  }

  const buttons = {
    backgroundColor: '#50b8e7',
    color: 'black',
    borderColor: '#50b8e7'
  }

  const formHeader = {
    marginBottom: '2%',
    textDecoration: 'underline'
  }

  return (
    <div className='login'>
      <div className='field'>
        <div className='login-form-border'>
          <form onSubmit={e => props.newUser(e)} className='ui form'>
            <button
              style={xButton}
              // onClick={() => props.HideLogIn()}
            >
              X
            </button>
            <div style={formHeader}> Join the fight with Leslie!</div>
            <label>Please Enter Your Name: </label>
            <input type='text' name='username' placeholder='username' />
            <label>Create Your Password: </label>
            <input type='password' name='password' placeholder='password' />
            <label>Provide your email address: </label>
            <input type='text' name='email' placeholder='email address' />
            <div className='buttons-create-user'>
              {/* <div className='ui buttons'> */}
              <button className='fluid ui button' style={buttons} type='submit'>
                Become a Supporter!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewSupporter
