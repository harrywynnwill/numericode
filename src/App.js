import React, { Component } from 'react';
import Axios from 'axios';
import MessageDisplay from './component/message-display';
import CodeInput from './component/code-input';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '', decoded: '' };
    this.url = 'http://localhost:3000/decode/';
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const cachedDecodedMessage = localStorage.getItem('message');
    if (cachedDecodedMessage) {
      this.setState({ decoded: cachedDecodedMessage });
    }
  }

  saveDecodedMessageLocalStorage(message) {
    this.setState({ decoded: message.decoded });
    localStorage.setItem('message', this.state.decoded);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.saveDecodedMessageLocalStorage(await this.getDecodedMessage());
  }

  async getDecodedMessage() {
    return await Axios.get(`${this.url}${this.state.value}`)
       .then(response => response.data );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Numericode</h1>
        </header>
        <CodeInput value={this.state.value} onSubmit={this.handleSubmit} onChange={this.handleChange} />
        <MessageDisplay message={this.state.decoded}/>
      </div>
    );
  }
}

export default App;
