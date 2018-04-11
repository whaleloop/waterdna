import { combineReducers } from 'redux';
import app from '../reducers/app';
import device from '../reducers/device';
import measurement from '../reducers/measurement';

const rootReducer = combineReducers({
	app,
	device,
	measurement
});

export default rootReducer;
