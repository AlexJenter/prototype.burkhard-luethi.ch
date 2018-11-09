import kosmos_sections from './sections-kosmos'
import backToTopLink from './backToTopLink'
import emptyTile from './emptyTile'
import * as BL from "../images/bl";

const contact = {
  key: 100,
  mods: ["logo"],
  title: "",
  type: "company",
  body:
    "<p>Dufourstrasse 35 <br/> CH 8008 Zürich<br/><br/><a href='tel:+41 44 262 50 40'>+41 44 262 50 40</a> <br/> <a href='mailto:bul@burkhard-luethi.ch'>bul@burkhard-luethi.ch</a></p>",
  href: "#"
};

const kosmosTile = {
  key: 1,
  mods: ["height-2x"],
  title: "kosmos",
  type: "image",
  src: BL.kosmos,
  href: "kosmos",
  sections: kosmos_sections
};

const text = {
  key: 2,
  mods: ["large-type"],
  title: "kosmos",
  type: "markup",
  body:
    "Wir helfen gerne bei ihrer Bau-eingabe <br><br><a href='kosmos'>fragen sie uns</a>"
};

const allImages = Object.entries(BL).map(([title, src], i) => ({
  key: `${title}-${i}`,
  mods: [
    Math.random() > 0.5
      ? "width-2x"
      : Math.random() > 0.5
      ? "height-2x"
      : "default"
  ],
  title,
  type: "image",
  src,
  href: "kosmos"
}));

const [imageTile1, imageTile2, imageTile3, ...imageTiles] = allImages.reduce(
  (acc, x) => {
    return [...acc, ...(Math.random() < 0.9 ? [x, emptyTile] : [x])];
  },
  []
);

export default [kosmosTile, ...allImages];
export const dataList = [...allImages];
export const dataFooter = [backToTopLink];

export const dataTiles = [
  contact,
  kosmosTile,
  imageTile1,
  text,
  imageTile2,
  imageTile3,
  ...imageTiles
];
