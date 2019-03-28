import React, { Component } from 'react';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import Experience from './components/Experience';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Box2/>
      <Box1/>
       
      </div>
    );
  }
}

export default App;



