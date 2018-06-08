import React from 'react';
import './Navbar.css';
import PropTypes from 'prop-types';
import Logo from 'images/code.png';
import $ from 'jquery';
import { Link } from 'react-router-dom'
// import NavSearchBar from 'NavSearchBar/NavSearchBar';

class Navbar extends React.Component {

  monitorScroll = () => {
    var scrollTop = 0;
    $(window).scroll(function(){
      scrollTop = $(window).scrollTop(); 
      // Weird footer bottom padding/margin issue - fix!
      if (scrollTop >= 100) {
        $('.navbar').addClass('scrolled-nav');
      } else if (scrollTop < 100) {
        $('.navbar').removeClass('scrolled-nav');
      }
    }); 
  }

  classToggle = () => {
    document.querySelector('.hamburger').classList.toggle('open');
    const navs = document.querySelectorAll('.Navbar__Items');
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }

  render() {
    return (
      <div className="Navbar">
          <div className="Navbar__Link-brand">
            <img src={Logo} className="logo" alt="Logo"/>
          </div>
          <div className="Navbar__Link-toggle" onClick={this.classToggle}>
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <nav className="Navbar__Items Navbar__Items--right">
            <li><Link to='/' className="Navbar__Link">Home</Link></li>
            <li><Link to='/projects' className="Navbar__Link">Projects</Link></li>
            <li><Link to='/guides' className="Navbar__Link">Guides</Link></li>
            <li><Link to='/guides' className="Navbar__Link">About Us</Link></li>
          </nav>
      </div>
    );
  }
}
{/*<NavSearchBar />*/}
      {/*<div className="navbar">
        <div className="left">
          <img src={Logo} className="logo" alt="Logo"/>
        </div>
        <div className="right">
          
          <a href="#" className="navbarLink">Projects</a>
          <a href="#" className="navbarLink">Guides</a>
          <a href="#" className="navbarLink">Snippets</a>
          <a href="#" className="navbarLink">Widgets</a>
          <a href="#" className="navbarLink">About Us</a>
        </div>
      </div>*/}
{/*<NavSearchBar />*/}
      {/*<div className="navbar">
        <div className="left">
          <img src={Logo} className="logo" alt="Logo"/>
        </div>
        <div className="right">
          
          <a href="#" className="navbarLink">Projects</a>
          <a href="#" className="navbarLink">Guides</a>
          <a href="#" className="navbarLink">Snippets</a>
          <a href="#" className="navbarLink">Widgets</a>
          <a href="#" className="navbarLink">About Us</a>
        </div>
      </div>*/}
export default Navbar;