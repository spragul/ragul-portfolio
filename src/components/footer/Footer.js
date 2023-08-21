import React from 'react';
import './Footer.css';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
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
        <a href="https://www.linkedin.com/in/raguldeveloper" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/spragul" target='_blank'><BsGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; RAGUL. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;