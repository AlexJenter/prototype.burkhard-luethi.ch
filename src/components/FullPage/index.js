import React, { Component } from "react";
import Header from "../Header";
import PageDots from "../PageDots";
import PrevNextBtn from "../PrevNextBtn";
import List from "../helpers/List";
import Switch from "../helpers/Switch";
import data from "../../data";
import "./index.css";

const Markup = props => (
  <div {...props} dangerouslySetInnerHTML={{ __html: props.body }} />
);
const Image = props => <img {...props} alt="" />;

export default class Fullpage extends Component {
  state = {
    position: 0
  };

  prev = () => {
    this.setState(state => ({
      position: state.position - 1
    }))
  }

  next = () => {
    this.setState(state => ({
      position: state.position + 1
    }))
  }

  render() {
    const { position } = this.state;
    const { match } = this.props;
    const { sections, title } = data.find(x => x.title === match.params.id);

    const containerStyle = {
      "--len": sections.length,
      "--pos": position
    };

    const buttonActions = {
      prev: this.prev,
      next: this.next
    }

    const pageDotsProps = {
      position,
      count: sections.length
    };

    return (
      <React.Fragment>
        <Header title={`← ${title}`} />
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
                    <p case="default">Default case hit: {item.type}</p>
                  </Switch>
                );
              }}
            </List>
          </div>
        </main>
        <PrevNextBtn actions={buttonActions}/>
        <PageDots {...pageDotsProps} />
      </React.Fragment>
    );
  }
}
