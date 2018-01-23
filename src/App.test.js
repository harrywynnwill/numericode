import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BrowserMocks from '../browser-mocks'; // Browsermocks are used to mock the localstorage in testing
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import moxios from 'moxios';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('the numericode app', () => {
  beforeEach(function () {
    moxios.install();
    moxios.stubRequest('http://localhost:3000/decode/1111', {
      status: 200,
      response: stubResponse
    });
  });

  afterEach(function () {
    moxios.uninstall()
  });

  const testComponent = mount(<App />);
  const instance = testComponent.instance();
  const stubResponse = { decoded: "hello world" };
  const stubEvent = { preventDefault: () => {}};

  it('can get a response from the server', async () => {
    instance.setState({ value: "1111" });
    expect(await instance.getDecodedMessage(stubEvent)).toEqual(stubResponse);
  });

  it('saves the users message to local storage', () => {
    instance.saveDecodedMessageLocalStorage(stubResponse);
    expect(localStorage.getItem('message')).toEqual(stubResponse.decoded)
  });

  it('will check the local stortage on page load for a cached message', async () => {
    instance.setState({ value: "1111" });
    instance.saveDecodedMessageLocalStorage(await instance.getDecodedMessage(stubEvent));
    expect(testComponent.state('decoded')).toEqual(stubResponse.decoded);
    testComponent.unmount()
    testComponent.mount()
    expect(testComponent.state('decoded')).toEqual(stubResponse.decoded);
  });
});