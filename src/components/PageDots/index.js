import React from "react";
import "./index.css";

export default ({ position = 0, count = 10 }) => {
  const dots = Array.from(new Array(count));
  dots.fill(false);
  dots[position] = "true";

  return (
    <div className="page-dots">
      <ul>
        {dots &&
          dots.map((bool, i) => (
            <button className={`page-dot${bool ? " page-dot--active" : ""}`}>
              {i}
            </button>
          ))}
      </ul>
    </div>
  );
};
