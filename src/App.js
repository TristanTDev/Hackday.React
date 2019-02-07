import React, { Component } from 'react';
import './App.css';
import MapComponent from './Map.component';
import FilterComponent from './components/Filter.component'
import axios from 'axios'
import initialiseUsers from './store/actions/'

class App extends Component {
  componentDidMount() {
    axios.get("localhost:3001/user/5b21a5d7588b40be612798d4").then(response => {
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
