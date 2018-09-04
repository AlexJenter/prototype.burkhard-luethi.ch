import React, { Component } from "react";
import data from "./data"
import logo from "./logo.svg";
import "./App.css";



const TextTile = ({title, type, body}) => (
  <div className="tile tile--text">
    <h2 className="tile__title">{title}</h2>
    <p className="tile__body" dangerouslySetInnerHTML={{ __html: body }}/>
  </div>
)

const ImageTile = ({ title, src }) => (
  <div className="tile tile--image">
    <h2 className="tile__title">{title}</h2>
    <img className="tile__image" src={src} alt=""/>
  </div>
)

const Tile = (props) => {
  const {title, type, body} = props
  return {
    markup: <TextTile {...props} />,
    image: <ImageTile {...props} />
  }[type] || <p>type not defined</p>
}

  

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Burkhard & Lüthi Architektur GmbH</h1>
        </header>
        <main>
          { data.map(x => <Tile {...x}/>)}
        </main>
      </div>
    );
  }
}

export default App;
