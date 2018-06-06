import React from 'react';
import { Context, Node } from 'react-mathjax2'

const MathEquation = ({ equation }) => {
	return (
	    <div>
	        <Context input='tex'>
	            <div>
	                <Node>{equation}</Node>
	            </div>
	        </Context>
	    </div>
	);
}

export default MathEquation;
