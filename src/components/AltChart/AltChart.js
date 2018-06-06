import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Fade } from 'react-reveal';
import './AltChart.css';

const data = 
[{xValue: -10.0, data: 0.0}, {xValue: -7.5, data: 0.0005527786}, {xValue: -5.0, data: 0.0069285},
{xValue: -2.5, data: 0.0758}, {xValue: 0.0, data: 0.5}, {xValue: 2.5, data: 0.9241},
{xValue: 5.0, data: 0.9933}, {xValue: 7.5, data: 0.9994472214}, {xValue: 10.0, data: 1.0}];

const AltChart = ({ equationOverlay }) => {
	return (
		<div className="chartContainer">
			<LineChart width={350} height={350} data={data} margin={{right: 10, top: 50, bottom: 0}}>
				<CartesianGrid strokeDasharray="1 1" />
				<XAxis dataKey="xValue" />
				<YAxis axisLine={false} />
				<Line type="monotone" dataKey="data" stroke="#8884d8" animationDuration={1000} strokeWidth={3} />
			</LineChart>
			<Fade top>
				<div className="equationDiv">
					{equationOverlay}
				</div>
			</Fade>
		</div>
	)
}

export default AltChart;