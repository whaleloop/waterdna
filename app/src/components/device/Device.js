import React from 'react';
import logo from '../../static/logo.svg';
import './Device.css';
import Measurement from '../measurement/Measurement';

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
			</div>
		);
	}
}

export default Device;
