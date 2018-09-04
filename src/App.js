import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Burkhard & Lüthi Architektur GmbH</h1>
          <p>
            Dufourstrasse 35
            <br/>
            CH 8008 Zürich
            <br/>
            <a href="tel:+41 44 262 50 40">+41 44 262 50 40</a>
            <br/>
            <a href="mailto:bul@burkhard-luethi.ch">bul@burkhard-luethi.ch</a>
            <br/>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
