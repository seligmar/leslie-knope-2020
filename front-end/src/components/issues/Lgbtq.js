import React from 'react'
import './issues.css'

import { Link } from 'react-router-dom'

const Lgbtq = () => {
  return (
    <div>
      {/* <Link to="/donate/leslieknope2020" target="_top">
        <div className='donationsBar-new'>
          <h1 className="giving-text">Give Now</h1></div>
      </Link> */}
      <div>
        {/* <div className='image-box-green'> */}
        <img
          className='bio-img-1'
          src='https://i.imgur.com/1f5zHM9.jpg'
          alt='Medicare for All'
        />
        {/* </div> */}
        <div className='about-page'>
          <h3></h3>
          <h3></h3>
          <h3></h3>

          <h3 className='issue-page-highlights'>
            These “American” companies show only one real loyalty: to the
            short-term interests of their shareholders, a third of whom are
            foreign investors.
          </h3>
          <h3>
            If they can close up an American factory and ship jobs overseas to
            save a nickel, that’s exactly what they will do — abandoning loyal
            American workers and hollowing out American cities along the way.
          </h3>
          <h3>
            Politicians love to say they care about American jobs. But for
            decades, those same politicians have cited “free market principles”
            and refused to intervene in markets on behalf of American workers.
            And of course, they ignore those same supposed principles and
            intervene regularly to protect the interests of multinational
            corporations and international capital.
          </h3>
          <h3 className='issue-page-highlights'>
            The result? Millions of good jobs lost overseas and a generation of
            stagnant wages, growing inequality, and sluggish economic growth.{' '}
          </h3>
          <h3>
            If Washington wants to put a stop to this, it can. If we want faster
            growth, stronger American industry, and more good American jobs,
            then our government should do what other leading nations do and act
            aggressively to achieve those goals instead of catering to the
            financial interests of companies with no particular allegiance to
            America.
          </h3>
          <h3 className='issue-page-highlights'>
            It’s not a question of more government or less government. It’s
            about who government works for.
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Lgbtq
