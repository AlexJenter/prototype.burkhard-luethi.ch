import React from "react";
import List from "../helpers/List";
import Switch from "../helpers/Switch";
import data from "../../data";

const Markup = ({ body }) => <div dangerouslySetInnerHTML={{ __html: body }} />;
const Image = props => <img {...props} alt="" width={300} />;

export default ({ match }) => {
  const { sections, title } = data.find(x => x.title === match.params.id);

  return (
    <div>
      <h2>{title}</h2>
      <List iterable={sections}>
        {item => (
          <Switch match={item.type} key={item.key}>
            <Markup case="markup" {...item}/>
            <Image case="image" {...item} />
            <p case="default">Default case hit: {item.type}</p>
          </Switch>
        )}
      </List>
    </div>
  );
};
