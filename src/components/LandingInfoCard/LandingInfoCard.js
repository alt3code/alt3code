import React from 'react';
import './LandingInfoCard.css';

const LandingInfoCard = ({ title, icon, description, classes }) => {
	return (
	   <div className="infoDiv">
		   	<span className="iconStyle">{icon}</span>
	        <p className="infoDivTitle">{title}</p>
	        <br />
	        <p className="infoDivDescription">{description}</p>
       </div>
	);
}

export default LandingInfoCard;