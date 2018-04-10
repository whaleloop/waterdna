import React from 'react';
import logo from '../../static/logo.svg';
import './Device.css';
import Measurement from '../measurement/Measurement';
import { Line, Chart } from 'react-chartjs-2';

var data = {
	labels: ['00:00','03:00','06:00','09:00','12:00','15:00','18:00','21:00','24:00'],
	datasets: [
		{
			data: [
				{ x: '00:00', y: 29.1 },
				{ x: '03:00', y: 30.2 },
				{ x: '06:00', y: 29.8 },
				{ x: '09:00', y: 29.5 },
				{ x: '12:00', y: 27.3 },
				{ x: '15:00', y: 28.8 },
				{ x: '18:00', y: 29.2 },
				{ x: '21:00', y: 28.4 },
				{ x: '24:00', y: 28.3 },
				{ x: '04:00', y: 29.0 },
				{ x: '08:00', y: 28.9 }],
			fill: false,
			borderColor: 'white',
			backgroundColor: 'blue'
		}
	]
}

let legend = {
	display: false
}

let options = {
	responsive: true,
	title: {
		display: true,
		text: 'Temperature',
		position: 'top',
		fontColor: 'white',
		fontSize: 30,
		padding: 15
	},
	scales: {
		xAxes: [{
			gridLines: {
				display: false,
				zeroLineColor: 'white'
			},
			ticks: {
				fontColor: 'white',
				fontSize: 20
			}
		}],
		yAxes: [{
			gridLines: {
				display: false
			},
			ticks: {
				fontColor: 'white',
				fontSize: 20
			}
		}]
	},
	tooltips: {
		backgroundColor: 'white',
		titleFontSize: 24,
		titleFontColor: '#3cafdb',
		titleMarginBottom: 10,
		xPadding: 20,
		yPadding: 15,
		bodyFontSize: 20,
		bodyFontColor: '#3cafdb',
		displayColors: false
	}
}

class Device extends React.Component {
	render() {
		return (
			<div className="Device">
				<div className="measurements">
					<Measurement {...this.props} />
					<Measurement {...this.props} />
					<Measurement {...this.props} />
					<Measurement {...this.props} />
				</div>
				<div className="graphs">
					<div><Line data={data} height="70" legend={legend} options={options} /></div>
					<div><Line data={data} height="70" legend={legend} options={options} /></div>
					<div><Line data={data} height="70" legend={legend} options={options} /></div>
					<div><Line data={data} height="70" legend={legend} options={options} /></div>
				</div>
			</div>
		);
	}
}

export default Device;
