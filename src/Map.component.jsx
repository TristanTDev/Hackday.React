import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { connect } from 'react-redux'

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    const { places } = this.props;

    return (
      <Map
        id="map"
        google={this.props.google}
        zoom={11}
        style={mapStyles}
        initialCenter={{
          lat: 53.48118850000000,
          lng: -2.2436459000000
        }}>
        {
          places.map((place, index) => {
            return (<Marker
              key={index}
              onClick={this.onMarkerClick}
              name={place.label}
              position={{
                lat: place.lat,
                lng: place.lng
              }}
            />);
          })
        }

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}>
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map >
    );
  }
}

const mapStateToProps = (state) => {
  let places;
  switch (state.filters.currentRule) {
    case "greater-than":
      places = state.places.data.filter(place => place.score >= state.filters.ratingLevel);
      break;
    case "equal-to":
      places = state.places.data.filter(place => place.score == state.filters.ratingLevel);
      break;
    case "less-than":
      places = state.places.data.filter(place => place.score <= state.filters.ratingLevel);
      break;
    default:
      places = state.places.data;
      break;
  }

  return {
    places: places
  }
}

export default connect(mapStateToProps)(GoogleApiWrapper({
  apiKey: 'AIzaSyAX5yDfuN_eOVJJQ0lWyjCDWQaCXNAbEJA'
})(MapContainer));