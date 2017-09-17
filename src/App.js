import React, { Component } from 'react';
import Name from './Name';
import About from './About';
import Resume from './Resume';
import Mail from './Mail';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Name />
        <div className="Menu">
          <About />
          <Resume />
          <Mail />
        </div>
        
      </div>
    );
  }
}

export default App;
