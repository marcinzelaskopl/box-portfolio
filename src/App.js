import React, { Component } from 'react';
import './App.scss';
import Nav from './components/Nav';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Main/>
      </div>
    );
  }
}

export default App;
