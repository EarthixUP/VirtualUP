import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <iframe src="https://my.matterport.com/show/?m=hC7PzBbT7aF&utm_source=hit-content-embed"
                  width="853"
                  height="480"
                  align="center"
                  frameborder="0"
                  allowfullscreen
                  allowvr/>
        </div>
        <div className="info">
          <h1>Shiley Engineering School</h1>
          The Donald P. Shiley School of Engineering prepares innovative professionals with the technical excellence, social integrity, environmental consciousness, and leadership traits essential to identify and solve the world's problems.
        </div>
      </div>
    );
  }
}
