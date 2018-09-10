import { Link } from "react-router-dom";
import Switch from "../helpers/Switch";
import React from "react";

const TextTile = ({ title, body, bem }) => (
  <div className={bem("")}>
    <h2 className={bem("title")}>{title}</h2>
    <p className={bem("body")} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

const ImageTile = ({ title, src, href, bem }) => (
  <div className={bem("")}>
    <Link className={bem("link")} to={`${process.env.PUBLIC_URL}/${href}`}>
      <h2 className={bem("title")}>{title}</h2>
      <img className={bem("image")} src={src} alt="" />
    </Link>
  </div>
);

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
      <TextTile case="markup" {...props} bem={bem("tile")} />
      <ImageTile case="image" {...props} bem={bem("tile")} />
      <p case="default">Default Case hit</p>
    </Switch>
  );
};
