import React from 'react';
import './header.css'; // Import your component's CSS file
import ROBOT from '../../assets/result.png'; // Import your image

const Header = () => {
  return (
    <div className='lau__header' id='home'>
      <div className='lau__header-content'>
        <h1 className='gradient__text'>
          Hi, I'm Laughter.<br /><span className='smaller'>Let's get to work together.</span>
        </h1><br/>
        <h3>B.eng Mechanical Engineer, with over 3 years experience.</h3>
        <p>
          SolidWorks and AutoCAD User certified Mechanical Engineering student
          with 1.5 years experience in Manufacturing, Project Management and
          Engineering design roles. Possessing in depth knowledge of Project
          life cycles, prototyping, failure and risk management processes.
          Open to New Graduate roles starting May 2023.
        </p>
      </div>
      <div className='lau__header-image'>
        <div className='fade-image-wrapper'>
          <img src={ROBOT} alt='robot' className='header-image' />
        </div>
      </div>
    </div>
  );
};

export default Header;
