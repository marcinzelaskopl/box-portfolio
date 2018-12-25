import React, { Component } from 'react';
import './App.scss';
import Nav from './components/Nav';
import Main from './components/Main';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Main/>
        <About/>
      </div>
    );
  }
}

export default App;
