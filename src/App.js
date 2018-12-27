import React, { Component } from 'react';
import './App.scss';
import Nav from './components/Nav';
import Main from './components/Main';
import Skills from './components/Skills';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Main/>
        <Skills/>
      </div>
    );
  }
}

export default App;
