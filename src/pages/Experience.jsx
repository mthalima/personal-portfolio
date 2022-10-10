import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#2C3333'>
        <VerticalTimelineElement className='vertical-timeline-element--education' 
          date='2008 - 2011'
          iconStyle={{background: "#395B64", color: "#A5C9CA"}}
          icon={< SchoolIcon />}
          >
            <h3 className='vertical-timeline-element--title'>
            Finished high School in my Hometown</h3>
            <p>When I finished High school I moved to Salvador-Ba to study and get in to University.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element--education' 
          date='2013 - 2020'
          iconStyle={{background: "#395B64", color: "#A5C9CA"}}
          icon={< SchoolIcon />}
          >
            <h3 className='vertical-timeline-element--title'>
            Computer Engineering <br/> Universidade Estadual de Feira de Santana (UEFS)</h3>
            <p>Here was my first contact with code, I learned algorithms, paradigms,
              even coding direct on hardware. The Problem-based Learning methodology 
              made me really good at problem solving and self-learning. 
              All that while networking and brainstoming with some amazing colleagues.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element--work' 
          date='2022 - 2022'
          iconStyle={{background: "#FF9551", color: "#FFF9B0"}}
          icon={< WorkIcon />}
          >
            <h3 className='vertical-timeline-element--title'>
            My first real life job</h3>
            <p>It was a freelance job which a local softhouse hired me
               to help develop a social network interface using mostly ReactJS.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement className='vertical-timeline-element--work' 
          date='2022 - 2022'
          iconStyle={{background: "#FF9551", color: "#FFF9B0"}}
          icon={< WorkIcon />}
          >
            <h3 className='vertical-timeline-element--title'>
            Software developer in a SaaS company</h3>
            <p>This was a whitelabel company where I developed new software and APIs using PHP Laravel.
              I worked directly with the company CTO to maintain and create new features.
            </p>
          </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
