import React from 'react'
import { Link } from 'react-router-dom'
import './Home2.css'
import ReactPlayer from 'react-player'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

class Home2 extends React.Component {
  render () {
    return (
      <div>
        <Link to='/donate/leslieknope2020' style={{ textDecoration: 'none' }}>
          <div className='donationsBar'>
            <h1 className='giving-text'>Give Now</h1>
          </div>
        </Link>
        <div class='banner'>
          <p class='h1 display-4'>Find Your Coffee Cup</p>
          <p class='lead'>We have them all in one place!</p>
        </div>
      </div>
    )
  }
}

export default Home2
