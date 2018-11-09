import React from "react";
import Icon from "../Icon";
import "./index.css";

export default ({ actions: { prev, next } }) => [
  <button onClick={prev} className="prev-next-button prev">
    <Icon type="left" />
  </button>,
  <button onClick={next} className="prev-next-button next">
    <Icon type="right" />
  </button>
];
