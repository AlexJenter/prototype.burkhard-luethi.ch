import React from "react";
import List from "../helpers/List";
import Switch from "../helpers/Switch";
import data from "../../data";

const Markup = ({ body }) => <div dangerouslySetInnerHTML={{ __html: body }} />;
const Image = ({ src }) => <img src={src} alt="" width={300} />;

export default ({ match }) => {
  const { sections } = data.find(x => x.title === match.params.id);

  return (
    <div>
      <List iterable={sections}>
        {item => (
          <Switch predicate={item.type} childProps={item}>
            <Markup case="markup" />
            <Image case="image" />
          </Switch>
        )}
      </List>
    </div>
  );
};
