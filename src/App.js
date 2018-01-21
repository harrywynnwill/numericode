import React, { Component } from 'react';
import logo from './logo.svg';
import Axios from 'axios';

import MessageDisplay from './component/message-display'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '', decoded: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    const cachedDecoded = localStorage.getItem('state');
    if (cachedDecoded) {
      this.setState({ decoded: cachedDecoded });
      return;
    }
  }

  onResponse(response) {
    this.setState({decoded : response.data.decoded})
    localStorage.setItem('state', this.state.value)
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    await Axios.get(`http://localhost:3000/decode/${this.state.value}`)
      .then(response => this.onResponse(response))};

 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Numericode</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <label>Please enter the code:
           <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <MessageDisplay message={this.state.decoded}></MessageDisplay>
      </div>
    );
  }
}

export default App;
