'use strict';

module.exports.getDevices = (event, context, callback) => {
	try {
		const response = {
			statusCode: 200,
			headers: {
				'Access-Control-Allow-Origin' : '*'
			},
			body: JSON.stringify({
				devices: [
					{
						deviceId: '123xyz',
						displayName: 'Device 1',
						createdOn: new Date().toISOString()
					}
				]
			})
		};

		callback(null, response);
	} catch (e) {
		callback(e, null)
	}
};
