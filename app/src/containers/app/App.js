import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppComponent from '../../components/app/App';
import { getTestHello } from '../../actions/app';

function mapStateToProps(state) {
	return {
		app: state.app,
		error: state.error
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getTestHello: () => dispatch(getTestHello())
	};
}

class AppContainer extends React.Component {
	componentWillMount() {
		this.props.getTestHello();
	}

	render () {
		return <AppComponent {...this.props} />;
	}
}

AppContainer.propTypes = {
	getTestHello: PropTypes.func.isRequired
};

const appContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainer);
export default appContainer;
