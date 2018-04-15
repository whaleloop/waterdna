import React from 'react';
import logo from '../../static/logo.svg';
import './App.css';
import NavBar from '../navbar/NavBar';
import Device from '../device/Device';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class AppComponent extends React.Component {
	render() {
		return (
			<Router>
				<div className="App">
					<NavBar {...this.props} />
					<Route exact path="/" render={() => {
						return <h2>Home Page Page</h2>
					}} />
					<Route exact path="/locations" render={() => {
						return <h2>Locations List Page</h2>
					}} />
					<Route exact path="/locations/:locationId" render={() => {
						return <h2>Location Page</h2>
					}} />
					<Route exact path="/locations/:id/devices" render={() => {
						return <h2>Devices List Page</h2>
					}} />
					<Route exact path="/locations/:id/devices/:deviceId" render={() => <Device {...this.props} /> }/>
				</div>
			</Router>
		);
	}
}

export default AppComponent;
