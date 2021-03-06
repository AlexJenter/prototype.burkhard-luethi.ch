import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Tile from "./components/Tile";
import List from "./components/helpers/List";
import FullPage from "./components/FullPage";
import {ListView , ListItem} from "./components/ListView";
import { dataTiles, dataList, dataFooter } from "./data/index";
import "./App.css";

const Index = () => (
  <Fragment>
    <ListView/>
    <main id="index">
      <List iterable={dataTiles}>{item => <Tile {...item} />}</List>
    </main>
    <footer>
      <List iterable={dataFooter}>{item => <Tile {...item} />}</List>
    </footer>
  </Fragment>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/`}
              component={Index}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/:id`}
              component={FullPage}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
