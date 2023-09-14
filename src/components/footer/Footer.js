import React from 'react';
import './Footer.css';

import guvi from '../../assests/guvi-logos-id86bsKcFH.jpeg'
import linkedin from '../../assests/download.jpg'
import github from '../../assests/github-mark.png'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>RAGUL P</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skils">Skils</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer-icon'>
        <a href="https://www.linkedin.com/in/raguldeveloper" target='_blank'><img className='linkedin' alt='linkedin' src={linkedin}></img></a>
        <a href="https://github.com/spragul" target='_blank'><img className='github' src={github} alt='github'></img></a>
        <a href='https://www.guvi.in/spragul3360' target='_blank'><img className='guviimage' src={guvi} alt='guvi'></img></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; RAGUL. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;

export function Socialicon(){
  return(
    <div className='footer-icon'>
    <a href="https://www.linkedin.com/in/raguldeveloper" target='_blank'><img className='linkedin' alt='linkedin' src={linkedin}></img></a>
    <a href="https://github.com/spragul" target='_blank'><img className='github' src={github} alt='github'></img></a>
    <a href='https://www.guvi.in/spragul3360'><img className='guviimage' src={guvi} alt='guvi'></img></a>
  </div>
  )
}