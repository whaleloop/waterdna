import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppComponent from '../../components/app/App';
import { getTestHello } from '../../actions/app';
import { getDevice, getDevices } from '../../actions/device';
import { getMeasurements } from '../../actions/measurement';

function mapStateToProps(state) {
	return {
		app: Object.assign({ message: state.app.message }, state.app.app),
		error: state.app.error || state.device.error || state.measurement.error,
		devices: state.device.devices,
		measurements: state.measurement.measurements
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getTestHello: () => dispatch(getTestHello()),
		getDevice: (deviceId) => dispatch(getDevice(deviceId)),
		getDevices: () => dispatch(getDevices()),
		getMeasurements: (deviceId) => dispatch(getMeasurements(deviceId))
	};
}

class AppContainer extends React.Component {
	componentWillMount() {
		this.props.getTestHello();
		this.props.getDevices();
	}

	render () {
		return <AppComponent {...this.props} />;
	}
}

AppContainer.propTypes = {
	getTestHello: PropTypes.func.isRequired
};

const appContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainer);
export default appContainer;
