import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='2013 - 2016'
          iconStyle={{background: '#3e497a', color: '#fff' }}
          icon={<SchoolIcon/>}
      >
          <h3 className='vertical-timeline-element-title'>
          High School at SMKN 1 Depok
          </h3>
          <p>Software Engineering Majoring</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--work' 
          date='2014'
          iconStyle={{background: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon/>}
      >
          <h3 className='vertical-timeline-element-title'>
          Bumida Syariah Depok
          </h3>
          <p>Internship Student</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--work' 
          date='2017'
          iconStyle={{background: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon/>}
      >
          <h3 className='vertical-timeline-element-title'>
          Yakes Telkomedika
          </h3>
          <p>Data Entry</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--work' 
          date='April 2018 - December 2021'
          iconStyle={{background: '#e9d35b', color: '#fff' }}
          icon={<WorkIcon/>}
      >
          <h3 className='vertical-timeline-element-title'>
          Pusat Pengembangan Akuntansi FEB UI
          </h3>
          <p>Staff Administration</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience