import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./index.css";

export class ListView extends Component {
  state = {
    open: false
  };

  toggle = () => {
    this.setState(({ open }) => ({
      open: !open
    }));
  };

  render() {
    const { open } = this.state;
    const { children } = this.props;
    return (
      <div className="list-view">
        <button
          className="list-view__toggle"
          onClick={this.toggle}
        >{`\u2630`}</button>
        <div className={`list-view__container${open ? " open" : ""}`}>
          {children}
        </div>
      </div>
    );
  }
}

export const ListItem = ({ title, href }) => (
  <Link to={`${href}/`}>{title}</Link>
);
