import React from 'react';
import ReactDOM from 'react-dom';
import MeasurementGraph from './MeasurementGraph';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MeasurementGraph />, div);
  ReactDOM.unmountComponentAtNode(div);
});
