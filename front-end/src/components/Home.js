import React from 'react'
// import { Route, Switch, Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

class Home extends React.Component {
  render () {
    return (
      <div>
        <div className='video-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://media.giphy.com/media/xRfxdozZr2zYI/giphy.mp4'
            playing='true'
            loop='true'
            width='100%'
            height='80%'
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
      </div>
      //  amazing youtube video of ice rink scene:  <https://www.youtube.com/watch?v=Xcdhpn-DXTA>
    )
  }
}

export default Home
