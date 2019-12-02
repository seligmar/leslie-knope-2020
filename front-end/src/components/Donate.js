import React from 'react'
import './donate.css'
import { Link } from 'react-router-dom'

class Donate extends React.Component {
  render () {
    const buttons = {
      'background-color': '#b61b28',
      color: '#fff',
      'margin-top': '5%'
    }

    const header = {
      'margin-bottom': '5%',
      'text-decoration': 'underline'
    }

    return (
      <div className='donation-page'>
        <div className='donation-pitch'>
          <h2>THE TIME FOR SMALL IDEAS IS OVER</h2>
          We're fighting for big, structural change, and we're counting on
          grassroots donors to make it possible. Even $3 makes a difference.
        </div>
        <div>
          <div className='donations-form'>
            <div class='field'>
              <form class='ui form'>
                {/* {this.state.total === 0 ? ( */}
                <div>
                  <div style={header}>Please Enter Your Donation: </div>
                  <label> Total: </label>
                  <input
                    type='text'
                    name='total'
                    maxlength='7'
                    placeholder='Total'
                  />
                  <label>First Name</label>
                  <input type='text' name='name' placeholder='First Name' />
                  <label>Last Name</label>
                  <input type='text' name='surname' placeholder='Last Name' />
                  <button
                    onClick={e => this.showAddress(e)}
                    class='ui button'
                    style={buttons}
                  >
                    Next
                  </button>
                </div>
                {/* ) : null} */}
                {/* {this.state.nameEntered ? ( */}
                <div>
                  <div style={header}>Please Enter Your Billing Address:</div>
                  <label>Address: </label>
                  <input
                    type='text'
                    name='addressLine1'
                    placeholder='address'
                  />
                  <label>City: </label>
                  <input type='text' name='city' placeholder='city' />
                  <label>State: </label>
                  <input
                    type='text'
                    name='state'
                    placeholder='State Abreviation'
                  />
                  <label>Zip: </label>
                  <input type='text' name='zip' placeholder='Zip Code' />
                  <button
                    // onClick={e => this.showBill(e)}
                    class='ui button'
                    style={buttons}
                  >
                    Next
                  </button>
                </div>
                {/* ) : null} */}
                {/* {this.state.addressEntered ? ( */}
                <div>
                  <div style={header}> Billing Information</div>
                  <label>Card Number</label>
                  <input
                    type='text'
                    name='cardnumber'
                    maxlength='16'
                    placeholder='Card #'
                  />
                  <label>CVC</label>
                  <input
                    type='text'
                    name='cvc'
                    maxlength='3'
                    placeholder='CVC'
                  />
                  <label>Expiration</label>
                  <div class='field'>
                    <select
                      class='ui fluid search dropdown'
                      name='expire-month'
                    >
                      <option value=''>Month</option>
                      <option value='1'>January</option>
                      <option value='2'>February</option>
                      <option value='3'>March</option>
                      <option value='4'>April</option>
                      <option value='5'>May</option>
                      <option value='6'>June</option>
                      <option value='7'>July</option>
                      <option value='8'>August</option>
                      <option value='9'>September</option>
                      <option value='10'>October</option>
                      <option value='11'>November</option>
                      <option value='12'>December</option>
                    </select>
                  </div>
                  <input
                    type='text'
                    name='expire-year'
                    maxlength='4'
                    placeholder='Year'
                  />
                  <br /> <br />
                  <div
                    // onClick={e => this.donateNew(e)}
                    class='ui button'
                    style={buttons}
                  >
                    Donate Now
                  </div>
                </div>
                {/* ) : null} */}
              </form>
            </div>
          </div>
        </div>
        <div className='FEC-bar'>
          <div className='FEC'>
            <p className='FEC-rules'>Contribution rules:</p>
            <p>
              I am a U.S. citizen or lawfully admitted permanent resident (i.e.,
              green card holder).
            </p>
            <p>
              This contribution is made from my own funds, and funds are not
              being provided to me by another person or entity for the purpose
              of making this contribution.
            </p>
            <p>
              I am making this contribution with my own personal credit card and
              not with a corporate or business credit card or a card issued to
              another person.
            </p>
            <p>I am at least eighteen years old.</p>
            <p>I am not a federal contractor.</p>
            <p>
              This contribution is not made from the funds of a political action
              committee.
            </p>
            <p>I am not an executive of a fossil fuel company.</p>
            <p>I am not a registered Federal lobbyist.</p>
            <p>
              I am not an executive of a health insurance or pharmaceutical
              company.
            </p>
            <p>I am not a registered foreign agent.</p>
            <p>
              Individuals may give a maximum of $5,600 per election cycle:
              $2,800 for the Primary + $2,800 for the General.
            </p>
            <p>
              Contributions or gifts to political candidates are not deductible
              as charitable contributions for Federal income tax purposes.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Donate
