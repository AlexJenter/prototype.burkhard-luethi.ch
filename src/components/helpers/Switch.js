import React from "react";
export default ({ match, children }) => {
  const child =
    children.find(c => c.props.case === match) ||
    children.find(c => c.props.case === "default");

  return React.cloneElement(child, child.props);
};
