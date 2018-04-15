import DeviceActionTypes from '../constants/deviceActionTypes';

const getDevicesError = error =>
	({ type: DeviceActionTypes.GetDevicesError, error })

const getDevicesComplete = payload =>
	({ type: DeviceActionTypes.GetDevicesComplete, payload })

export const getDevices = () => (
	(dispatch) => {
		dispatch({ type: DeviceActionTypes.GetDevices });
		fetch(process.env.REACT_APP_DOMAIN + '/devices')
			.then(response => {
				if (!response.ok) {
					console.log(response)
					throw Error(response.status);
				}
				return response.json()
			})
			.then(response => dispatch(getDevicesComplete(response.devices)))
			.catch((error) => {
				const errorClone = Object.assign({}, error);
				errorClone.message = `${DeviceActionTypes.GetDevices} ERROR: ${error}`;
				dispatch(getDevicesError(errorClone));
			});
	}
);
