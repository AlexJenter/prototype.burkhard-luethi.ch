import kosmos_sections from "./sections-kosmos";
import about_sections from "./sections-about";
import backToTopLink from "./backToTopLink";
import emptyTile from "./emptyTile";
import categories from "./categories";
import * as utils from "../utils";
import * as BL from "../images/bl";

const inlineStyles = {
  logo: {
    // background: "transparent"
  },
  tile: {
    title: {
      left: -6,
      top: 0
      // transform: `translateY(-100%)`
    }
  },
  date: {
    // display: 'none'
  }
};

const contact = {
  key: 100,
  inline: inlineStyles.logo,
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
  inline: inlineStyles.tile,
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

const randomCategory = () =>
  categories[Math.ceil(Math.random() * categories.length) - 1];

const allImages = Object.entries(BL).map(([title, src], i) => ({
  key: `${title}-${i}`,
  mods: [
    Math.random() > 0.5
      ? "width-2x"
      : Math.random() > 0.5
      ? "height-2x"
      : "default"
  ],
  inline: inlineStyles.tile,
  title,
  type: "image",
  src,
  href: "kosmos",
  category: randomCategory().slug
}));

const groupedImages = utils.groupBy(allImages, "category");

const date = num => ({
  key: 1,
  mods: [],
  inline: inlineStyles.date,
  year: num,
  type: "date"
});

const [imageTile1, imageTile2, imageTile3, ...imageTiles] = allImages
  .reduce((acc, x) => {
    return [...acc, ...(Math.random() < 0.9 ? [x, emptyTile] : [x])];
  }, [])
  .reduce(
    (acc, x) => {
      return Math.random() > 0.9
        ? {
            arr: [
              ...acc.arr,
              ...[x, date(acc.year)]
            ],
            year: --acc.year
          }
        : {
            arr: [ ...acc.arr, x ],
            year: acc.year
          };
    },
    { arr: [], year: 2017 }
  )["arr"];

const aboutTile = {
  key: 1,
  mods: [],
  title: "buero",
  type: "image",
  src: BL.kosmos,
  href: "buero",
  sections: about_sections
};

export default [aboutTile, kosmosTile, ...allImages];
export const dataList = groupedImages;
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
