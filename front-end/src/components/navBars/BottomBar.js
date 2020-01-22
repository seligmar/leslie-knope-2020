import React from 'react'
import './bottom-bar.css'
import { Link } from 'react-router-dom'

const buttonStyle = {
  width: '100px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 10px',
  'margin-top': '4%',
  'margin-bottom': '4%'
}

const BottomBar = () => {
  return (
    <div className='Menu'>
      <div className='menu-grid'>
        <div className='links'>
          <Link to='/leslieknope2020' className='link'>
            <div className='about-box'>
              <h1>Home</h1>
            </div>
          </Link>
          <Link to='/donate/leslieknope2020' className='link'>
            <div className='donation-box'>
              <h1>Give Now</h1>
            </div>
          </Link>
          {/* <Link to='/getinvolved/elizabethwarren2020' className='link'>
            <div className='get-involved-box'>
              <h1 className='involved-button'>Get Involved</h1>
            </div>
          </Link> */}
          {/* <Link to='/about/elizabethwarren2020' className='link'>
            <div className='about-box'>
              <h1>About</h1>
            </div>
          </Link> */}
        </div>
        <div className='menu-gif'>
          <iframe
            src='https://giphy.com/embed/p0OJ2Pn79Qqu4'
            width='384'
            height='480'
            frameBorder='0'
            class='giphy-embed'
            title='gif-fight'
            allowFullScreen
          />
          <p>
            <a href='https://giphy.com/gifs/leslie-knope-p0OJ2Pn79Qqu4'>
              via GIPHY
            </a>
          </p>
        </div>
      </div>
      <div className='social-media-grid'>
        <div className='four ui icon buttons'>
          <div className='social-media'>
            <a href='https://www.facebook.com/leslieknope' target='_blank'>
              <button style={buttonStyle} class='ui facebook button'>
                <i class='facebook icon' />
                Facebook
              </button>
            </a>
            <a href='https://twitter.com/eagletonhater?lang=en' target='_blank'>
              <button style={buttonStyle} class='ui twitter button'>
                <i class='twitter icon' />
                Twitter
              </button>
            </a>
            <a
              href='https://www.instagram.com/councilwoman_knope/?hl=en'
              target='_blank'
            >
              <button style={buttonStyle} class='ui instagram button'>
                <i class='instagram icon' />
                Instagram
              </button>
            </a>
            <a
              href='https://www.youtube.com/user/nbcParksandRec'
              target='_blank'
            >
              <button style={buttonStyle} class='ui  youtube button'>
                <i class='youtube icon' />
                YouTube
              </button>
            </a>
          </div>
        </div>
        <div className='footer'>
          <p>PAID FOR BY KNOPE FOR PRESIDENT.</p>
          <p> © Copyright 2020. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default BottomBar
