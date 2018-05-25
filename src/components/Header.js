import React from "react";
const headerimg = require("../assets/Component.svg");

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header"><img src={headerimg}/></div>
    );
  }
}
