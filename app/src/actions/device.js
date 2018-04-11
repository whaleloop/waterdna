import DeviceActionTypes from '../constants/deviceActionTypes';

const getDevicesError = error =>
	({ type: DeviceActionTypes.GetDevicesError, error })

const getDevicesComplete = payload =>
	({ type: DeviceActionTypes.GetDevicesComplete, payload });

const getDeviceError = error =>
	({ type: DeviceActionTypes.GetDeviceError, error })

const getDeviceComplete = payload =>
	({ type: DeviceActionTypes.GetDeviceComplete, payload });

let now = new Date()

const devices = [
	{
		deviceId: '123xyz',
		displayName: 'Device 1',
		createdOn: now.toISOString()
	}
]

export const getDevices = () => (
	(dispatch) => {
		dispatch({ type: DeviceActionTypes.GetDevices });
		// let url = process.env.REACT_APP_DOMAIN + '/tests/hello'
		// return fetch(url)
			// .then(response => response.json())
		return Promise.resolve({ devices })
			.then(response => dispatch(getDevicesComplete(response.devices)))
			.catch((error) => {
				const errorClone = Object.assign({}, error);
				errorClone.message = `${DeviceActionTypes.GetDevices} ERROR: ${error}`;
				dispatch(getDevicesError(errorClone));
			});
	}
);

export const getDevice = (deviceId) => (
	(dispatch) => {
		dispatch({ type: DeviceActionTypes.GetDevice });
		let device = devices.find( dev => dev.id === deviceId )
		// let url = process.env.REACT_APP_DOMAIN + '/tests/hello'
		// return fetch(url)
			// .then(response => response.json())
		return Promise.resolve(device)
			.then(response => dispatch(getDeviceComplete(response)))
			.catch((error) => {
				const errorClone = Object.assign({}, error);
				errorClone.message = `${DeviceActionTypes.GetDevice} ERROR: ${error}`;
				dispatch(getDeviceError(errorClone));
			});
	}
);
