import React, { useEffect } from 'react';
import './possibility.css';
import { Article } from '../../components';
import { car, master, pone, Wheel, inhaler, drone } from './imports'


const Possibility = () => {
  
  return (
    
    <div className='lau__blog section__padding' id='possibility'>
      <div className='lau__blog-heading'>
        <h1 className='gradient__text'>Here are some projects I've worked on</h1>
        <br/>
      </div>
      <div className='lau__blog-container gradient__bg'>
        <div className='lau__blog-container_group'>
          <Article imgurl={car} title='3D rendering of a car jack' />
          <Article imgurl={Wheel} title='3D Model and Assembly with Material Specification of Wheel Caster' />
          <Article imgurl={drone} title='Design of a carrier fitted to drones to deliver automated external defibrillators (AED) to remote locations' />
        </div>
        <div className='lau__blog-container_group'>
          <Article imgurl={master} title='3D Model and Generated Tool Path (Gcode)of a Wooden Maze for Milling on a Wooden Specimen' />
          <Article imgurl={inhaler} title='A redesign of a medical Inhaler delivery method' />
          <Article imgurl={pone} title='3D Model and Assembly with Material Specification of a Belt tightener' />
        </div>
      </div>
    </div>


  );
}

export default Possibility;
