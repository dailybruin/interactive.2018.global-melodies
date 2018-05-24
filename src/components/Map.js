import React from "react";
import ReactMapboxGl, {Layer, Feature} from "react-mapbox-gl";

const MapRender = ReactMapboxGl({
  accessToken:"pk.eyJ1IjoibXN6aGFuZyIsImEiOiJjamd6cTVmNmoyb24wMzNwOWM4bHBzdngzIn0.0Lij-AdfjrFgJg7dFdSZrA"
});
const zoom = [8];

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MapRender
        style="mapbox://styles/mapbox/streets-v8"
        zoom={zoom}
        containerStyle={{
          height: "100vh",
          width: "100vw"
      }}>
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
        </Layer>
      </MapRender>
    );
  }
}

export default Map;
