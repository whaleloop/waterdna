import AppActionTypes from '../constants/appActionTypes';

export const showError = error =>
	({ type: AppActionTypes.ShowError, error })

const getTestHelloComplete = payload =>
	({ type: AppActionTypes.GetTestHelloComplete, payload });

export const getTestHello = () => (
	(dispatch) => {
		dispatch({ type: AppActionTypes.GetTestHello });
		let url = process.env.REACT_APP_DOMAIN + '/tests/hello'
		return fetch(url)
			.then(response => response.json())
			.then(response => dispatch(getTestHelloComplete(response.message)))
			.catch((error) => {
				const errorClone = Object.assign({}, error);
				errorClone.message = `${AppActionTypes.GetTestHello} ERROR: ${error}`;
				dispatch(showError(errorClone));
			});
	}
);
