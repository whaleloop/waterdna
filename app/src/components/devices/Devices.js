import React from 'react';
import logo from '../../static/logo.svg';
import './Device.css';
import Measurement from '../measurement/Measurement';
import MeasurementGraph from '../measurementGraph/MeasurementGraph';
import { withRouter } from 'react-router-dom';
import moment from 'moment'

class Device extends React.Component {

	constructor(props, context) {
		super(props, context)
	}

	render() {
		let devices = this.props.devices.map((device) => (
			<div>
				<div>Name: {device.displayName}</div>
				<div>Id: {device.deviceId}</div>
				<div>Created On: {moment(device.createdOn).format('M/D/YY h:mm a')}</div>
			</div>
		));
		return (
			<section>
				<h2>Devices</h2>
				<div className="Devices">
					{devices}
				</div>
			</section>
		);
	}
}

export default withRouter(Devices);
