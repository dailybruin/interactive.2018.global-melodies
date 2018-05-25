import React from "react";
import Map from "./components/Map";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./sass/app.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: -1,
      loaded: false
    }
  }

  componentDidMount() {
    fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/ae.globalmelodies")
      .then(res => res.json())
      .then(data => {
        this.setState({
          kerckData: data.data["data.aml"],
          loaded: true
        });
      }
      );
  }

  render() {
    if(this.state.loaded) {
      return (
        <div className="app-body">
          <Header data={this.state.kerckData}/>
          <Map data={this.state.kerckData}/>
          <Card active={this.state.active} data={this.state.kerckData}/>
          <Footer />
        </div>
      );
    }
    else {
      return(
        <div className="app-body">
          Loading...
        </div>
      );
    }
  }
}

export default App;
