import React from 'react';
import resume from './Ragul(MERN).pdf'


const Action = () => {
  return (
    <div className='action'>
        <a className='btn' href='https://drive.google.com/file/d/1qNZfkWDJOcmzQCocOYd10k7AVlrQPPMC/view?usp=drive_link' target='_blank' download>Download Resume</a>
        <a className='btn btn-primary' href="#contact">Contact me!</a>
    </div>
  )
}

export default Action;