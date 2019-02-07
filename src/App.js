import React, { Component } from 'react';
import './App.css';
import MapComponent from './Map.component';
import FilterComponent from './components/Filter.component'
import axios from 'axios'
import initialiseUsers from './store/actions/places.action'
import {connect} from 'react-redux'

class App extends Component {
  componentDidMount() {
    axios.get("http://localhost:8080/establishments").then(response => {
      this.props.addUsers(response.data);
    });
  }

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

const mapStateToDispatch = (dispatch) => {
  return {
    addUsers: (users) => { dispatch(initialiseUsers(users)) }
  };
}

export default connect(null, mapStateToDispatch)(App);
