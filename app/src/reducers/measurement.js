import MeasurementActionTypes from '../constants/measurementActionTypes';

const initialState = {
	measurements: [],
	error: ''
};

function measurementReducer (state = initialState, action) {
	const newState = Object.assign({}, state);
	switch (action.type) {
		case MeasurementActionTypes.GetMeasurementsError:
			newState.error = action.error;
			return newState;
		case MeasurementActionTypes.GetMeasurementsComplete:
			newState.measurements = action.payload;
			return newState;
		default:
			return state;
	};
}

export default measurementReducer;
