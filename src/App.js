import React from "react";
import Map from "./components/Map";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./sass/app.scss";
class App extends React.Component {
  render() {
    return (
      <div className="app-body">
        <Header />
        <Map />
        <Card />
        <Footer />
      </div>
    );
  }
}

export default App;
