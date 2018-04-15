import React from 'react';
import logo from '../../static/logo.svg';
import './Device.css';
import Measurement from '../measurement/Measurement';
import MeasurementGraph from '../measurementGraph/MeasurementGraph';
import { withRouter } from 'react-router-dom';

class Device extends React.Component {

	constructor(props, context) {
		super(props, context)

		this.hasLoaded = false
		this.device = {}
	}

	componentWillMount () {
		if (this.props.match.params.deviceId) {
			this.props.getMeasurements(this.props.match.params.deviceId)
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.measurements.length > 0) {
			// console.log(nextProps)
		}
	}

	render() {
		let lastMeasurement = this.props.measurements[this.props.measurements.length - 1];
		if (this.props.devices.length > 0 && !this.device.deviceId) {
			this.device = this.props.devices.find((device) => device.deviceId === this.props.match.params.deviceId) || {};
		}

		return (
			<section className="App-intro">
				<h2>{this.device.displayName}</h2>
				<div className="Device">
					<div className="measurements">
						<Measurement measurement={lastMeasurement} type="temperature" />
						<Measurement measurement={lastMeasurement} type="dissolved_oxygen" />
						<Measurement measurement={lastMeasurement} type="ph" />
						<Measurement measurement={lastMeasurement} type="conductivity" />
					</div>
					<div className="graphs">
						<MeasurementGraph measurements={this.props.measurements} type="temperature" />
						<MeasurementGraph measurements={this.props.measurements} type="dissolved_oxygen" />
						<MeasurementGraph measurements={this.props.measurements} type="ph" />
						<MeasurementGraph measurements={this.props.measurements} type="conductivity" />
					</div>
				</div>
			</section>
		);
	}
}

export default withRouter(Device);
