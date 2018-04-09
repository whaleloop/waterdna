import React from 'react';
import logo from '../../static/logo.svg';
import './App.css';
import NavBar from '../navbar/NavBar';
import Device from '../device/Device';

class AppComponent extends React.Component {
	render() {
		return (
			<div className="App">
				<NavBar {...this.props} />
				<section className="App-intro">
					<h2>{this.props.app.message}</h2>
					<Device {...this.props} />
				</section>
			</div>
		);
	}
}

export default AppComponent;
