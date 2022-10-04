import React from 'react';
import Headline from '../components/Headline';

import '../Styles/Home.css'

function Home() {

  return (
    <div className='home'>
      <div className='about'>
        <div className='headline'>
          <h2>Hello there!<br />
              I'm <span className='meunome'>Matheus</span>,<br />
              <p><Headline /></p>
              </h2>
        </div>
        <div className='prompt'>
          
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-end</h2>
            <span>HTML, CSS, ReactJS, Redux, Tailwind, MaterialUI, StyledComponents</span>
          </li>

          <li className='item'>
            <h2>Back-end</h2>
            <span>Laravel, Mysql, NodeJS ExpressJS</span>
          </li>

          <li className='item'>
            <h2>Languages</h2>
            <span>Javascript, Typescript, PHP</span>
          </li>  
        </ol>
      </div>
    </div>
  )
}

export default Home