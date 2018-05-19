import React from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      }
    };

  }

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken="pk.eyJ1IjoibXN6aGFuZyIsImEiOiJjamd6cTVmNmoyb24wMzNwOWM4bHBzdngzIn0.0Lij-AdfjrFgJg7dFdSZrA"
      />
    );
  }
}

export default Map;
