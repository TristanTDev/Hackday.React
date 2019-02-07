import React, { Component } from 'react';
import './App.css';
import MapComponent from './Map.component';
import FilterComponent from './components/Filter.component'

class App extends Component {


  render() {
    return (
      <div className="App">
        <div id="border">
          <div id="map-container">
            <MapComponent />
          </div>
          <div id="filters-panel">
            <FilterComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
