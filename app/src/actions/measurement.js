import MeasurementActionTypes from '../constants/measurementActionTypes';
import moment from 'moment'

const getMeasurementsError = error =>
	({ type: MeasurementActionTypes.GetMeasurementsError, error })

const getMeasurementsComplete = payload =>
	({ type: MeasurementActionTypes.GetMeasurementsComplete, payload });

let now = moment(new Date())

const measurements = [
	{
		measurementID: '321abc',
		deviceId: '123xyz',
		createdOn: now.hour(1),
		payload: [
			{ type: 'temperature', value: 29.1, unit: 'C' },
			{ type: 'dissolved_oxygen', value: 8.7, unit: 'mg L' },
			{ type: 'ph', value: 9.3, unit: 'ph' },
			{ type: 'conductivity', value: 438.5, unit: 'uS' }
		]
	},
	{
		measurementID: '321abc',
		deviceId: '123xyz',
		createdOn: now.hour(3),
		payload: [
			{ type: 'temperature', value: 30.1, unit: 'C' },
			{ type: 'dissolved_oxygen', value: 8.9, unit: 'mg L' },
			{ type: 'ph', value: 9.1, unit: 'ph' },
			{ type: 'conductivity', value: 435.2, unit: 'uS' }
		]
	},
	{
		measurementID: '321abc',
		deviceId: '123xyz',
		createdOn: now.hour(6),
		payload: [
			{ type: 'temperature', value: 29.8, unit: 'C' },
			{ type: 'dissolved_oxygen', value: 8.8, unit: 'mg L' },
			{ type: 'ph', value: 8.8, unit: 'ph' },
			{ type: 'conductivity', value: 429.02, unit: 'uS' }
		]
	},
	{
		measurementID: '321abc',
		deviceId: '123xyz',
		createdOn: now.hour(9),
		payload: [
			{ type: 'temperature', value: 29.5, unit: 'C' },
			{ type: 'dissolved_oxygen', value: 9.2, unit: 'mg L' },
			{ type: 'ph', value: 9.5, unit: 'ph' },
			{ type: 'conductivity', value: 438.8, unit: 'uS' }
		]
	},
	{
		measurementID: '321abc',
		deviceId: '123xyz',
		createdOn: now.hour(12),
		payload: [
			{ type: 'temperature', value: 27.3, unit: 'C' },
			{ type: 'dissolved_oxygen', value: 8.5, unit: 'mg L' },
			{ type: 'ph', value: 9.0, unit: 'ph' },
			{ type: 'conductivity', value: 433.5, unit: 'uS' }
		]
	},
	{
		measurementID: '321abc',
		deviceId: '123xyz',
		createdOn: now.hour(15),
		payload: [
			{ type: 'temperature', value: 28.8, unit: 'C' },
			{ type: 'dissolved_oxygen', value: 8.2, unit: 'mg L' },
			{ type: 'ph', value: 9.2, unit: 'ph' },
			{ type: 'conductivity', value: 422.7, unit: 'uS' }
		]
	},
	{
		measurementID: '321abc',
		deviceId: '123xyz',
		createdOn: now.hour(18),
		payload: [
			{ type: 'temperature', value: 28.4, unit: 'C' },
			{ type: 'dissolved_oxygen', value: 8.4, unit: 'mg L' },
			{ type: 'ph', value: 9.4, unit: 'ph' },
			{ type: 'conductivity', value: 424.6, unit: 'uS' }
		]
	},
	{
		measurementID: '321abc',
		deviceId: '123xyz',
		createdOn: now.hour(21),
		payload: [
			{ type: 'temperature', value: 28.3, unit: 'C' },
			{ type: 'dissolved_oxygen', value: 8.6, unit: 'mg L' },
			{ type: 'ph', value: 9.2, unit: 'ph' },
			{ type: 'conductivity', value: 427.3, unit: 'uS' }
		]
	},
	{
		measurementID: '321abc',
		deviceId: '123xyz',
		createdOn: now.hour(23),
		payload: [
			{ type: 'temperature', value: 29.0, unit: 'C' },
			{ type: 'dissolved_oxygen', value: 8.9, unit: 'mg L' },
			{ type: 'ph', value: 9.0, unit: 'ph' },
			{ type: 'conductivity', value: 432.1, unit: 'uS' }
		]
	},
	{
		measurementID: '321abc',
		deviceId: '123xyz',
		createdOn: now.hour(24),
		payload: [
			{ type: 'temperature', value: 28.9, unit: 'C' },
			{ type: 'dissolved_oxygen', value: 8.3, unit: 'mg L' },
			{ type: 'ph', value: 9.1, unit: 'ph' },
			{ type: 'conductivity', value: 436.9, unit: 'uS' }
		]
	}
]

export const getMeasurements = (deviceId) => (
	(dispatch) => {
		dispatch({ type: MeasurementActionTypes.GetMeasurements });
		// let url = process.env.REACT_APP_DOMAIN + '/tests/hello'
		// return fetch(url)
			// .then(response => response.json())
		let results = measurements.filter( measurement => measurement.deviceId === deviceId )
		return Promise.resolve({ measurements: results })
			.then(response => dispatch(getMeasurementsComplete(response.measurements)))
			.catch((error) => {
				const errorClone = Object.assign({}, error);
				errorClone.message = `${MeasurementActionTypes.GetMeasurements} ERROR: ${error}`;
				dispatch(getMeasurementsError(errorClone));
			});
	}
);
