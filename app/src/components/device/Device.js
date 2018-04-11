import React from 'react';
import logo from '../../static/logo.svg';
import './Device.css';
import Measurement from '../measurement/Measurement';
import MeasurementGraph from '../measurementGraph/MeasurementGraph'

class Device extends React.Component {
	componentWillReceiveProps(nextProps) {
		if (this.props.device && (this.props.measurements.length === 0 || this.props.measurements.length !== nextProps.measurements.length)) {
			this.props.getMeasurements(this.props.device.deviceId);
		}
	}

	render() {
		let lastMeasurement = this.props.measurements[this.props.measurements.length - 1]
		return (
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
		);
	}
}

export default Device;
