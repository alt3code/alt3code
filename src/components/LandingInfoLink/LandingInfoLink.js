import React from 'react';
import './LandingInfoLink.css';

const LandingInfoLink = ({ text, link, textColor, bgColor }) => {
	return (
		<a href={link}>
          <button className="landingInfoLinkButton" style={{backgroundColor:bgColor, color:textColor}}>{text}</button>
        </a>
	);
}

export default LandingInfoLink;