import React from "react";

const paths = {
  close: "M13.353 13.353L36.646 36.646M13.353 36.646L36.646 13.353",
  open: "M13 13.5L37 13.5M13 21.1L37 21.1M13 28.833L37 28.833M13 36.5L37 36.5",
  left: "M30.82 13.35L19.17 25L30.82 36.64",
  right: "M19.17 13.35L30.82 25L19.17 36.64",
  up: "M13.35 30.82L25 19.17L36.64 30.82",
  down: "M13.35 19.17L25 30.82L36.64 19.17"
};

export default ({ type }) => (
  <svg
    width="50px"
    height="50px"
    viewBox="0 0 50 50"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      stroke="#000000"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd"
      d={paths[type]}
    />
  </svg>
);
