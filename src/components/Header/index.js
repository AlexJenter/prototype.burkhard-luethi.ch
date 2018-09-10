import React from "react";
import { Link } from "react-router-dom";

export default ({title = "Burkhard & Lüthi Architektur GmbH"}) => {
  return (
    <header className="App-header">
      <Link to={`${process.env.PUBLIC_URL}/`}>
        <h1 className="App-title">{title}</h1>
      </Link>
    </header>
  );
};
