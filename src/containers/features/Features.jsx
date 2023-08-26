import React from 'react';
import './features.css';
import { Feature } from '../../components';
const featuresData =[
  {
    title:'Tire Industrialization Engineer at Michelin',
    text:'June 2023 till present. The Product Design & Industrialization Engineer prepares tire designs for mass production, balancing technical and industrial competencies. They work collaboratively with a design team to translate innovation into manufacturing specifications.'
  },
  {
    title:'Product and Design Engineer at Smartice',
    text:'September 2022- December 2022. This role involved redesigning Smartice products, deploying ice sensors in open water and developing a method to test for minute leaks in water-tight containers. Maintaining the tech shops and conducting small-scale assembly line manufacturing.'
  },

  {
    title:'Project Management Engineer at Growler Energy',
    text:'January 2022 - April 2022. Worked on a dynamic team of Engineers in a project management role. Developed technical documents on subsea cables and the electrification of the oil and gas sector in Newfoundland and Labrador.'
  },
  {
    title:'Mechanical Engineer at Memorial University Facult of Engineering',
    text:'June 2021 - August 2021. This role was primarily to promote interest in engineering amongst the youth in the community of Newfoundland. It involved creating educational modules on programming, circuit design and 3D printing to educate and encourage the pursuit of STEM careers.'
  },
  {
    title:'Mechanical Engineer at Community Centre Alliance',
    text:'September 2020 - December 2021. In this role, I investigated the community center building plan against current codes and standards for accessibility and life safety standards. I also provided recommendations for improvements, Drafted floor plans and cost estimates to assist in the preparation of funding applications'
  },
  {
    title:'Mechanical Design Engineer at Technical Service Department Memorial university',
    text:'January 2020 - April 2020. Manufactured prototypes of CAD drawings using modelling software, FEA analysis and 3D printers. Conducted workshops on Arduino IDE, circuit design etc.'
  },
]

const Features = () => {
  return (
    <div className='lau__features section__padding' id='features'>
      <div className='lau__features-heading'>
        <h1 className='gradient__text'>My work history</h1>
        <br/><br/><br/>
        <div className='lau__features-container'>
            {featuresData.map((item, index) => (
              <Feature title={item.title} text={item.text} key={item.title + index} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Features