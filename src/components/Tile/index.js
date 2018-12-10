import { Link } from "react-router-dom";
import Switch from "../helpers/Switch";
import React from "react";

import Logo from "../../images/assets/Logo";

const CompanyTile = ({ title, body, bem, inline }) => (
  <div className={bem("")}>
    <div className={bem("wrapper")}>
      <h1 style={inline} className={bem("title")}>
        <Logo className="App-logo" ariaLabel="logo" />
      </h1>
      <p className={bem("body")} dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  </div>
);

const DateTile = ({ year, bem, inline }) => (
  <div style={inline} className={bem("")}>
    <div className={bem("wrapper")}>
      <p>{year}</p>
    </div>
  </div>
);

const TextTile = ({ title, body, bem }) => (
  <div className={bem("")}>
    <div className={bem("wrapper")}>
      <h2 className={bem("title")}>{title}</h2>
      <p className={bem("body")} dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  </div>
);

const ImageTile = ({ title, src, href, bem, inline }) => (
  <div className={bem("")}>
    <div className={bem("wrapper")}>
      <Link className={bem("link")} to={`${process.env.PUBLIC_URL}/${href}`}>
        <h2 style={inline && inline.title} className={bem("title")}>
          {title}
        </h2>
        <img className={bem("image")} src={src} alt="" />
      </Link>
    </div>
  </div>
);

const EmptyTile = ({ bem }) => <div className="tile tile--empty" />;

export default props => {
  const { type, mods } = props;
  const bem = block => element =>
    [type, ...mods].reduce((acc, x) => {
      return !element
        ? `${acc} ${block}--${x}`
        : `${acc} ${block}__${element}--${x}`;
    }, `${block}${element && `__${element}`}`);


  return (
    <Switch match={props.type}>
      <CompanyTile case="company" {...props} bem={bem("tile")} />
      <TextTile case="markup" {...props} bem={bem("tile")} />
      <ImageTile case="image" {...props} bem={bem("tile")} />
      <DateTile case="date" {...props} bem={bem("tile")} />
      <EmptyTile case="empty" {...props} bem={bem("tile")} />
      <p case="default">Default Case hit</p>
    </Switch>
  );
};
