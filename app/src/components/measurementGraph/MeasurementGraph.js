import React from 'react';
import logo from '../../static/logo.svg';
import './MeasurementGraph.css';
import { Line, Chart } from 'react-chartjs-2';
import moment from 'moment'

class MeasurementGraph extends React.Component {
	render() {
		const height = 70
		const labels = ['0:00','3:00','6:00','9:00','12:00','15:00','18:00','21:00','24:00'];
		const fill = false;
		const borderColor = 'white';
		const backgroundColor = 'blue';
		const legend = {
			display: false
		}
		let data = {
			labels,
			datasets: [
				{
					data: this.props.measurements
						.map( measurement => {
							if (!measurement.payload) {
								return { x: '', y: '' }
							}
							let payload = measurement.payload.find( reading => reading.type === this.props.type)
							return {
								x: moment(measurement.createdOn).format('k:mm'),
								y: payload.value
							}
						}),
					fill,
					borderColor,
					backgroundColor
				}
			]
		}
		let options = {
			responsive: true,
			title: {
				display: true,
				text: this.props.type.split('_').map(word => word.substr(0, 1).toUpperCase() + word.substr(1)).join(' '),
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
				displayColors: false,
				callbacks: {
					label: (tooltipItem, data) => {
						if (this.props.measurements.length > 0) {
							let payload = this.props.measurements[0].payload.find( reading => reading.type === this.props.type)

							if (payload) {
							   return tooltipItem.yLabel + ' ' + payload.unit;
						   	}
						}
						return tooltipItem.yLabel
					}
				}
			}
		}

		return (
			<div className="graph">
				<Line data={data} height={height} legend={legend} options={options} />
			</div>
		);
	}
}

export default MeasurementGraph;
