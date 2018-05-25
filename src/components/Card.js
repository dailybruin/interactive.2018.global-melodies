import React from "react";

export default class Card extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="card">
        <div className="line"></div>
        <div className="title">This is a headline font with stuff</div>
      </div>
    );
  }
}
