import React from 'react'
export default ({ predicate, childProps, children }) => {
  const child = children.find(c => c.props.case === predicate) || (
    <p>case not handeled: {childProps.type}</p>
  );
  const TagName = child.type;
  return <TagName {...childProps} />;
};
