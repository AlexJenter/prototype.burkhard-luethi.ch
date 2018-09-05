import React, { Component } from "react";
import data from "./data"
import "./App.css";



const TextTile = ({title, body, bem}) => (
  <div className={bem("")}>
    <h2 className={bem("title")}>{title}</h2>
    <p className={bem("body")} dangerouslySetInnerHTML={{ __html: body }}/>
  </div>
)

const ImageTile = ({ title, src, bem }) => (
  <div className={bem("")}>
    <h2 className={bem("title")}>{title}</h2>
    <img className={bem("image")} src={src} alt=""/>
  </div>
)

const Tile = (props) => {
  const {type, mods} = props
  
  const bem = block => element => mods.reduce((acc, x) => {
    return !element
      ? `${acc} ${block}--${x}`
      : `${acc} ${block}__${element}--${x}`
  }, `${block}${element && `__${element}`}`)

  return {
    markup: <TextTile {...props} bem={bem("tile")} />,
    image: <ImageTile {...props} bem={bem("tile")} />
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
