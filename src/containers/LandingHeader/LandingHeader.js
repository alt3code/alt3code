import React from 'react';
import Typer from 'Typer/Typer';
import { Zoom } from 'react-reveal';
import './LandingHeader.css';
/*<Code language="javascript" code={codeString} type="large"/>*/

const headerTitle = "alt3code";
const codeString = 'console.log("Hi there!");';

const LandingHeader = (props) => {
	return (
		<div className="landingHeader">
        <Zoom>
          <p className="headerText">{headerTitle}</p>
        </Zoom>
        <Zoom left>
          <Typer code={codeString} />
        </Zoom>
    </div>
	);
}

export default LandingHeader;