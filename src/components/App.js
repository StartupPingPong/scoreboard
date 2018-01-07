import React, { Component } from "react";
import { strings } from "../constants";

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="main-title display-1">{strings.eventName}</h1>
      </div>
    );
  }
}

export default App;
