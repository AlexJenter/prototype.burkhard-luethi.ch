import React, { Component } from "react";
import { Link } from "react-router-dom";
import categoryData from "../../data/categories";
import { dataList } from "../../data";
import List from "../helpers/List";

import Icon from "../Icon";
import "./index.css";

class Category extends Component {
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
    const { slug, text } = this.props;
    const categoryEntries = dataList[slug];

    return (
      <div className={`category__container${open ? " open" : ""}`}>
        <button
          onClick={this.toggle}
          className={`category__label${open ? " open" : ""}`}
        >
          {text}
        </button>
        {open && categoryEntries.map(ListItem)}
      </div>
    );
  }
}

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
    return (
      <div className="list-view">
        <button className="list-view__toggle" onClick={this.toggle}>
          <Icon type={!open ? "open" : "close"} />
        </button>
        <div className={`list-view__container${open ? " open" : ""}`}>
          <ListItem title="Büro" href="buero" />
          {categoryData.map(cat => (
            <Category {...cat} />
          ))}
        </div>
      </div>
    );
  }
}

export const ListItem = ({ title, href }) => (
  <Link className={`list-item--${href}`} to={`${href}/`}>
    {title}
  </Link>
);
