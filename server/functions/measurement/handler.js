'use strict';

const measurements = [
	{
		measurementID: '321abc',
		deviceId: '123xyz',
		createdOn: '2018-04-16T08:28:23.937Z',
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
		createdOn: '2018-04-16T10:28:23.937Z',
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
		createdOn: '2018-04-16T13:28:23.937Z',
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
		createdOn: '2018-04-16T16:28:23.937Z',
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
		createdOn: '2018-04-16T19:28:23.937Z',
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
		createdOn: '2018-04-16T22:28:23.937Z',
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
		createdOn: '2018-04-17T01:30:08.935Z',
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
		createdOn: '2018-04-17T04:30:08.935Z',
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
		createdOn: '2018-04-17T06:30:08.935Z',
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
		createdOn: '2018-04-17T07:30:08.935Z',
		payload: [
			{ type: 'temperature', value: 28.9, unit: 'C' },
			{ type: 'dissolved_oxygen', value: 8.3, unit: 'mg L' },
			{ type: 'ph', value: 9.1, unit: 'ph' },
			{ type: 'conductivity', value: 436.9, unit: 'uS' }
		]
	}
]

module.exports.getMeasurements = (event, context, callback) => {
	try {
		const response = {
			statusCode: 200,
			headers: {
				'Access-Control-Allow-Origin' : '*'
			},
			body: JSON.stringify({
				measurements: measurements.filter(measurement => measurement.deviceId === event.headers['device-id'])
			})
		};

		callback(null, response);
	} catch (e) {
		callback(e, null)
	}
};
