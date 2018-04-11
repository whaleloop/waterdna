import React from 'react';
import logo from '../../static/logo.svg';
import './Measurement.css';

class Measurement extends React.Component {
	render() {
		let type = '',
			unit = '',
			value = '',
			createdOn = '',
			payload = {}

		if (this.props.measurement && this.props.measurement.payload.length > 0) {
			payload = this.props.measurement.payload.find( item => item.type === this.props.type )
			type = this.props.type.split('_').map(word => word.substr(0, 1).toUpperCase() + word.substr(1)).join(' ')
			unit = payload.unit
			value = payload.value
			createdOn = this.props.measurement.createdOn.format('h:mm:ss A')
		}


		return (
			<div className="Measurement">
				<div className="title">{type} {unit}</div>
				<div className="reading">{value}</div>
				<div className="timestamp">Last Reading {createdOn}</div>
			</div>
		);
	}
}

export default Measurement;
