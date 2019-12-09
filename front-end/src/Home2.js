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
          <p class='h1 display-4'>Leslie Knope 2020</p>
          {/* <p class='lead'>Dream Big!</p> */}
        </div>
      </div>
    )
  }
}

export default Home2
