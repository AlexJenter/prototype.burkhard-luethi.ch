import React, { Component } from "react";
import Header from "../Header";
import PageDots from "../PageDots";
import PrevNextBtn from "../PrevNextBtn";
import List from "../helpers/List";
import Switch from "../helpers/Switch";
import data from "../../data";
import * as U from "../../utils"
import "./index.css";

const Markup = props => (
  <div {...props} dangerouslySetInnerHTML={{ __html: props.body }} />
);
const Image = props => <img {...props} alt="" />;

const Table = props => (
  <table {...props}>
  <tbody>
    {props.rows.map(row => (
      <tr>
        <td className="label">{row[0]}</td>
        <td className="value">{row[1]}</td>
      </tr>
    ))}
    </tbody>
  </table>
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
        <Header title={`↫ ${title}`} />
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
