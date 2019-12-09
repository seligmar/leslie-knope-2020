import React from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

class Home extends React.Component {
  render () {
    return (
      <div>
        <Link to='/donate/leslieknope2020' style={{ textDecoration: 'none' }}>
          <div className='donationsBar'>
            <h1 className='giving-text'>Give Now</h1>
          </div>
        </Link>
        <div className='video-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://media.giphy.com/media/xRfxdozZr2zYI/giphy.mp4'
            playing='true'
            loop='true'
            width='100%'
            height='70%'
          />
        </div>
        <div className='twitter'>
          <div className='twitter-box'>
            <TwitterTimelineEmbed
              sourceType='profile'
              screenName='EagletonHater'
              options={{
                height: 400,
                width: 1200
              }}
            />
          </div>
        </div>
        <div className='youtube-block-grid'>
          <div className='youtube'>
            <iframe
              width='100%'
              height='560'
              src='https://www.youtube.com/embed/Xcdhpn-DXTA'
              frameborder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
