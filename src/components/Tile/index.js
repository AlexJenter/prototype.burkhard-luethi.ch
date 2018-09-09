import { Link } from "react-router-dom";
import React from 'react'

const TextTile = ({ title, body, bem }) => (
  <div className={bem("")}>
    <h2 className={bem("title")}>{title}</h2>
    <p className={bem("body")} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

const ImageTile = ({ title, src, href, bem }) => (
  <Link to="/kosmos">
    <div className={bem("")}>
      <h2 className={bem("title")}>{title}</h2>
      <img className={bem("image")} src={src} alt="" />
    </div>
  </Link>
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
    {
      markup: <TextTile {...props} bem={bem("tile")} />,
      image: <ImageTile {...props} bem={bem("tile")} />
    }[type] || <p>type not defined</p>
  );
};