import React, { Component } from 'react';
import Map from './Map.js';
import Toggler from './Toggler.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      latitude: 40.7128,
      longitude: -74.006,
      style: 'mapbox://styles/mapbox/light-v9',
    }
  }

  render() {
    return (
      <div className="App">
        <Toggler app={this}></Toggler>
        <Map app={this}></Map>
      </div>
      
    );
  }
}

export default App;
