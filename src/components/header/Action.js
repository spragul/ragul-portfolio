import React from 'react';
import resume from './Ragul (MERN).pdf'


const Action = () => {
  return (
    <div className='action'>
        <a className='btn' href={resume} target='_blank' download>Download Resume</a>
        <a className='btn btn-primary' href="#contact">Contact me!</a>
    </div>
  )
}

export default Action;