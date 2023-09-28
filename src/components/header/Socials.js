import React from 'react';
import guvi from '../../assests/guvi-logos-id86bsKcFH.jpeg'
import linkedin from '../../assests/download.jpg'
import github from '../../assests/github-mark.png'
const Socials = () => {
  return (
    <div className='header__socials'>
    <a href="https://www.linkedin.com/in/raguldeveloper" target='_blank'><img className='linkedin' alt='linkedin' src={linkedin}></img></a>
    <a href="https://github.com/spragul" target='_blank'><img className='github' src={github} alt='github'></img></a>
    </div>
  );
}

export default Socials;