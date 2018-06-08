import React from 'react';
import { Link } from 'react-router-dom'

// NavDrawer - will be lots of links...
// Sidebar - all the types
const SubNavbar = (props) => {
	return (
		<div className="Navbar">
          <div className="Navbar__Link-toggle">
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <nav className="Navbar__Items">
            <li><Link to='/' className="Navbar__Link">Home</Link></li>
            <li><Link to='/projects' className="Navbar__Link">Projects</Link></li>
            <li><Link to='/guides' className="Navbar__Link">Guides</Link></li>
            <li><Link to='/guides' className="Navbar__Link">About Us</Link></li>
          </nav>
      </div>
	);
}

export default SubNavbar;