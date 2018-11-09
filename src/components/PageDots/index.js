import React from "react";
import "./index.css";

export default ({ position = 0, count, setPosition }) => (
  <div className="page-dots">{`${position + 1}|${count}`}</div>
);
