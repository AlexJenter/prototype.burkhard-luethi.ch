import React, { Component } from "react";
import { Link } from "react-router-dom";

import List from "../helpers/List";
import Switch from "../helpers/Switch";
import data from "../../data/index";
import * as U from "../../utils";

import PageDots from "../PageDots";
import PrevNextBtn from "../PrevNextBtn";
import Icon from '../Icon';

import "./index.css";

const Markup = props => {
  const { className } = props;
  return <div {...{ className }} dangerouslySetInnerHTML={{ __html: props.body }} />
}
const Image = props => <img {...props} alt="" />;

const Table = props => (
  <div {...props}>
    <div className="content">
      <h3>{props.title}</h3>
      <table>
        <tbody>
          {props.rows.map(row => (
            <tr>
              <td className="label">{row[0]}</td>
              <td className="value">{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default class Fullpage extends Component {
  state = {
    position: 0,
    length: 0
  };

  componentDidMount = () => {
    const { match } = this.props;
    const { sections } = data.find(x => x.title === match.params.id);
    this.setState({
      length: sections.length || 0
    });
  };

  setPosition = position => _ => {
    const { length } = this.state;
    this.setState({
      position: U.clamp(0, length - 1, position)
    });
  };

  render() {
    const { position } = this.state;
    const { match } = this.props;
    const { sections, title } = data.find(x => x.title === match.params.id);

    const containerStyle = {
      "--len": sections.length,
      "--pos": position
    };

    const buttonActions = {
      actions: {
        prev: this.setPosition(position - 1),
        next: this.setPosition(position + 1)
      }
    };

    const pageDotsProps = {
      position,
      count: sections.length,
      setPosition: this.setPosition
    };

    return (
      <React.Fragment>
        <Link className="back-link" to={`${process.env.PUBLIC_URL}/`}>
        <Icon type="close" />
        </Link>
        <h2 className="page-title">{title}</h2>
        <main id="full-page">
          <div className="slide-container" style={containerStyle}>
            <List iterable={sections}>
              {item => {
                const itemProps = {
                  ...item,
                  className: `slide slide--${item.type}`
                };
                return (
                  <Switch match={item.type} key={item.key}>
                    <Markup case="markup" {...itemProps} />
                    <Image case="image" {...itemProps} />
                    <Table case="table" {...itemProps} />
                    <p case="default">Default case hit: {item.type}</p>
                  </Switch>
                );
              }}
            </List>
          </div>
        </main>
        <PrevNextBtn {...buttonActions} />
        <PageDots {...pageDotsProps} />
      </React.Fragment>
    );
  }
}
