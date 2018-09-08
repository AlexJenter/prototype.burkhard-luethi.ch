import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Tile from './components/Tile'
import FullPage from './components/FullPage'
import data from "./data";
import "./App.css";



const Index = () => data.map(x => <Tile {...x} />);


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Burkhard & Lüthi Architektur GmbH</h1>
        </header>
        <main>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Index} />
              <Route path="/:id" component={FullPage} />
            </Switch>
          </BrowserRouter>
        </main>
      </div>
    );
  }
}

export default App;
