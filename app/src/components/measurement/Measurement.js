import React from 'react';
import logo from '../../static/logo.svg';
import './Measurement.css';

class Measurement extends React.Component {
	render() {
		return (
			<div className="Measurement">
				<div className="title">Temperature C</div>
				<div className="reading">29.4</div>
				<div className="timestamp">Last Reading 4:23:36 PM</div>
			</div>
		);
	}
}

export default Measurement;
