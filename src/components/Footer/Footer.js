import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="customFooter">
        <p className="contactTitle">Contact Us</p>
        <hr className="footerBreak"/>
        <a href="mailto:someone@yoursite.com" className="emailLink">ouremail@googlemail.com</a>  
        <p className="contactDescription">Here at alt3code our goal is to ... </p>
        <p className="copyrightText">Copyright &copy; 2018 alt3code</p>
    </div>
  );
}

export default Footer;
