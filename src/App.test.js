import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BrowserMocks from '../browser-mocks';
// Browsermocks are used to mock the localstorage in testing

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


