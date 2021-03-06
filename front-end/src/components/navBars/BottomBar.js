import React from 'react'
import './bottom-bar.css'
import { Link } from 'react-router-dom'

const buttonStyle = {
  width: '100px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 10px',
  marginTop: '4%',
  marginBottom: '4%'
}

const BottomBar = () => {
  return (
    <div className='Menu'>
      <div className='links'>
        <Link to='/leslieknope2020' className='link'>
          <h1>Home</h1>
        </Link>
        <Link to='/donate/leslieknope2020' className='link'>
          <h1>Give Now</h1>
        </Link>
        <Link to='/events/leslieknope2020' className='link'>
          <h1>Events</h1>
        </Link>
        <Link to='https://www.youtube.com/watch?v=flSFozk1E9c' className='link'>
          <h1>Catch Your Dreams</h1>
        </Link>
        <div className='youtube-block-grid'>
          <div className='youtube'>
            <iframe
              width='100%'
              height='560'
              src='https://www.youtube.com/embed/flSFozk1E9c'
              frameBorder='0'
              title='Catch Your Dreams'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </div>
        </div>

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

        {/* <div className='menu-gif'>
          <iframe
            src='https://giphy.com/embed/p0OJ2Pn79Qqu4'
            width='384
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
        </div> */}
      </div>
      <div className='social-media-grid'>
        <div className='four ui icon buttons'>
          <div className='social-media'>
            <a
              href='https://www.facebook.com/leslieknope'
              // target='_blank'
            >
              <button style={buttonStyle} className='ui facebook button'>
                <i className='facebook icon' />
                Facebook
              </button>
            </a>
            <a
              href='https://twitter.com/eagletonhater?lang=en'
              // target='_blank'
            >
              <button style={buttonStyle} className='ui twitter button'>
                <i className='twitter icon' />
                Twitter
              </button>
            </a>
            <a
              href='https://www.instagram.com/councilwoman_knope/?hl=en'
              // target='_blank'
              // rel='noopener nonreferrer'
            >
              <button style={buttonStyle} className='ui instagram button'>
                <i className='instagram icon' />
                Instagram
              </button>
            </a>
            <a
              href='https://www.youtube.com/user/nbcParksandRec'
              // target='_blank'
              // rel='noopener nonreferrer'
            >
              <button style={buttonStyle} className='ui  youtube button'>
                <i className='youtube icon' />
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
