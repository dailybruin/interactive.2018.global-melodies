import React from "react";
import ReactMapboxGl, {Layer, Feature} from "react-mapbox-gl";

const marker = require("../assets/marker.png");
const markerImage = new Image(35, 50);
markerImage.src = marker;
const images = ["melodyPin", markerImage];
console.log(markerImage);

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
        images={images}
        containerStyle={{
          height: "100vh",
          width: "100vw"
      }}>
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "melodyPin" }}
          images={images}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
          <Feature coordinates={[-0.481747846041145, 50.3233379650232]}/>
        </Layer>
      </MapRender>
    );
  }
}

export default Map;
