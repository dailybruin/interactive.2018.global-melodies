import React from "react";
import Map from "./components/Map";
import "./sass/app.scss";
class App extends React.Component {
  render() {
    return (
      <div className="app-body">
        <Map />
      </div>
    );
  }
}

export default App;
