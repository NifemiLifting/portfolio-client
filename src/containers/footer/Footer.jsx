import React from 'react';
import './footer.css';
import Logo from '../../assets/logi.png'

const Footer = () => {
  return (
    <div className='lau__footer section__padding' id='blog'>
    <div className='lau__footer-heading'>
    <h1 className='gradient__text'>Let's step into the future.<br/> Contact me </h1>
    </div>
    <div className='lau__footer-btn'>
      <p><a href='mailto:laughterwork@gmail.com'  target='_blank' rel='noopener noreferrer'>Send me a mail</a></p>
      
    </div>
    <div className='lau__footer-links'>
      
      <div className='lau__footer-links_div'>
        <p><a href='https://www.linkedin.com/in/laughter-afolabi/'  target='_blank' rel='noopener noreferrer'>Linkedin</a>
         </p>
      </div>
      <div className='lau__footer-links_div'>
        <p>
          <a href='mailto:laughterwork@gmail.com'  target='_blank' rel='noopener noreferrer'>
              Email
          </a>
        </p>
      </div>
      <div className='lau__footer-links_div'>
        <p><a href='https://drive.google.com/file/d/11pBdfzGO0xLYSbQak7NtR72FWKHVx8AV/view' target='_blank' rel='noopener noreferrer' >Resume</a></p>
      </div>
      

    </div>
    <div className='lau__footer-links_logo'>
        <img src={Logo}alt='logo'/>
      </div>
    <div className='lau__footer-copyright'>
      <p>2023 lifting's Designs. All rights reserved.</p>
    </div>
    </div>
  )
}

export default Footer