import React from "react";
import ReactMapboxGl, {Layer, Feature} from "react-mapbox-gl";

const marker = require("../assets/marker.png");
const markerImage = new Image(30, 43);
markerImage.src = marker;
const images = ["melodyPin", markerImage];

const MapRender = ReactMapboxGl({
  accessToken:"pk.eyJ1IjoibXN6aGFuZyIsImEiOiJjamd6cTVmNmoyb24wMzNwOWM4bHBzdngzIn0.0Lij-AdfjrFgJg7dFdSZrA"
});
const zoom = [0.5];

export default class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    let features;
    if(this.props.data) {
      features = this.props.data.dev.map(feature => {
        return(
          <Feature key={feature.Name} coordinates={[feature.Latitude, feature.Longitude]}/>
        );
      });
    }
    return (
      <MapRender
        style="mapbox://styles/mapbox/streets-v8"
        zoom={zoom}
        images={images}
        containerStyle={{
          height: "100%",
          width: "100%"
      }}>
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "melodyPin" }}
          images={images}>
          {features}
        </Layer>
      </MapRender>
    );
  }
}
