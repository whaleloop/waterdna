import DeviceActionTypes from '../constants/deviceActionTypes';

const initialState = {
	devices: [],
	error: ''
};

function deviceReducer (state = initialState, action) {
	const newState = Object.assign({}, state);
	switch (action.type) {
		case DeviceActionTypes.GetDevicesError:
			newState.error = action.error;
			return newState;
		case DeviceActionTypes.GetDevicesComplete:
			newState.devices = action.payload;
			return newState;
		default:
			return state;
	};
}

export default deviceReducer;
