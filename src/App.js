import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {
  state = {
    username: 'Dex'
  }

  handleEvent = () => {
    this.setState({ username: 'Ter' })
  }

  handleChange = (event) => {
    this.setState({ username: event.target.value })
  }

  render() {
    return (
      <div className="App app-border">
        <UserInput change={this.handleChange} name={this.state.username} />
        <UserOutput username={this.state.username} click={this.handleEvent} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
