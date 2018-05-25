import React from "react";
import YouTube from "react-youtube";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const opts = {
      width: "100%",
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div className="card">
        <div className="line"></div>
        <div className="title">This is a headline font with stuff {this.props.loaded}</div>
        <YouTube
          videoId="2g811Eo7K8U"
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }
}
