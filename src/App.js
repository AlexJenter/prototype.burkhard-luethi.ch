import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Tile from "./components/Tile";
import FullPage from "./components/FullPage";
import data from "./data";
import "./App.css";

const Index = () => data.map(x => <Tile {...x} />);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Link to={`${process.env.PUBLIC_URL}/`}>
              <h1 className="App-title">Burkhard & Lüthi Architektur GmbH</h1>
            </Link>
          </header>
          <main>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={ Index } />
              <Route path={`${process.env.PUBLIC_URL}/:id`} component={ FullPage } />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
