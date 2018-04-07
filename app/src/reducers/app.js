import AppActionTypes from '../constants/appActionTypes';

const initialState = {
	app: {},
	error: ''
};

function appReducer (state = initialState, action) {
	const newState = Object.assign({}, state);
	switch (action.type) {
		case AppActionTypes.ShowError:
			newState.error = action.error;
			return newState;
		case AppActionTypes.GetTestHelloComplete:
			newState.message = action.payload;
			return newState;
		default:
			return state;
	};
}

export default appReducer;
