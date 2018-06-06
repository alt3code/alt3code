import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Zoom } from 'react-reveal';
import './AltChart.css';

const data = 
[{xValue: 1, data: 100}, {xValue: 2, data: 50}, {xValue: 3, data: 25},
{xValue: 4, data: 50}, {xValue: 5, data: 100}, {xValue: 6, data: 75},
{xValue: 7, data: 125},];

const AltChart = (props) => {
	return (
		<div className="chartContainer">
			<Zoom>
				<LineChart width={375} height={375} data={data} margin={{right: 50, top: 20, bottom: 20}}>
					<CartesianGrid strokeDasharray="1 1" />
					<XAxis dataKey="xValue" />
					<YAxis />
					<Line type="monotone" dataKey="data" stroke="#8884d8" strokeWidth={3} />
				</LineChart>
			</Zoom>
		</div>
	)
}

export default AltChart;