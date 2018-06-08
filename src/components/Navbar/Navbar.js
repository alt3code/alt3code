import React from 'react';
import './Navbar.css';
import PropTypes from 'prop-types';
import Logo from 'images/code.png';
import $ from 'jquery';
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
            <a href="https://www.google.com" className="Navbar__Link">Projects</a>
            <a href="https://www.google.com" className="Navbar__Link">Guides</a>
            <a href="https://www.google.com" className="Navbar__Link">Snippets</a>
            <a href="https://www.google.com" className="Navbar__Link">About Us</a>
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