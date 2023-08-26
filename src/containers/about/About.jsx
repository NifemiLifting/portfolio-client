import React from 'react';
import './about.css';
import { Feature } from '../../components';

const About = () => {
  return (
    <div className='lau__about section__margin' id='about'>
      <div className='lau__about-feature'>
      <div className='lau__features-container'>
          <h3 className='feature__title'>Who is Laughter?</h3>
          <p>Laughter Afolabi is a Mechanical engineer with interests in product design, project management, and material engineering. With experience in design processes, software, and certifications, I have participated in startups, pitch competitions, engineering design competitions, and hackathons. Through internships, I collaborate with diverse teams ranging in renewable energy, manufacturing, and design industries.</p>
        </div>
        {/* <Feature title='Who is laughter?' text='Laughter Afolabi is a Mechanical engineer with interests in product design, project management, and material engineering. With experience in design processes, software, and certifications, I have participated in startups, pitch competitions, engineering design competitions, and hackathons. Through internships, I collaborate with diverse teams ranging in renewable energy, manufacturing, and design industries.'/> */}
      </div>
      <div className='lau__about-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>explore the world of engineering with me.</p>
      </div>
      <div className='lau__about-container'>
        <Feature title='Programming' text='Python, C++, MATLAB'/><br/><br/><br/><br/>
        <Feature title='Mechanical design' text='SolidWorks, AutoCAD, MasterCam, Fusion 360, AutoDESK Inventor, ABAQUS.'/>
        <Feature title='Technical' text='3D printing, Laser Cutting, Soldering, Arduino IDE'/>
      </div>
    </div>
  )
}

export default About