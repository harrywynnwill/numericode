import React, { Component } from 'react';
import logo from './logo.svg';
import Axios from 'axios';

import MessageDisplay from './component/message-display';
import CodeInput from './component/code-input';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '', decoded: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.url = 'http://localhost:3000/decode/'
  }

  componentWillMount() {
    const cachedDecodedState = localStorage.getItem('state');
    if (cachedDecodedState) {
      this.setState({ decoded: cachedDecodedState });
        return;
    }
  }

  onResponse(response) {
    this.setState({ decoded: response.data.decoded })
    localStorage.setItem('state', this.state.decoded )
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    await Axios.get(`${this.url}${this.state.value}`)
      .then(response => this.onResponse(response))
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Numericode</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <label>Please enter the code:
           <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <MessageDisplay message={this.state.decoded}></MessageDisplay>
      </div>
    );
  }
}

export default App;
