import React from 'react'
// import { Route, Switch, Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

class Home extends React.Component {
  render () {
    return (
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
    )
  }
}

export default Home
