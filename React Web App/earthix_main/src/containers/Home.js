import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>ARE YOU READY TO BEGIN?</h1>
          <Button href="/earthixhome/earthixscans" bsStyle="primary" bsSize="large">
            PLAY
          </Button>
        </div>
      </div>
    );
  }
}
