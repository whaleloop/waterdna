import React from 'react';
import logo from '../../static/logo.svg';
import './App.css';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.props.app.message}
        </p>
      </div>
    );
  }
}

export default AppComponent;
