import React, { Component } from 'react';
import AppBarMain from './appBar/appBar.js';
import Trucks from './trucks/Trucks.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <AppBarMain />

        <div className="listTrucks">
          <Trucks />
        </div>

      </div>
    );
  }
}

export default App;
