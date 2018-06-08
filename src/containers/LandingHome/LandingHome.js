import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Navbar from 'Navbar/Navbar';
import LandingInfo from 'LandingInfo/LandingInfo';
import LandingHeader from 'LandingHeader/LandingHeader';

const LandingHome = () => {
	return (
		<Parallax strength={600}>
	      <LandingHeader />
	      <LandingInfo />
	      <Background className="custom-bg" />
	    </Parallax>
	);
}

export default LandingHome;