import * as BL from "./images/bl"

const allImages = Object.entries(BL)
.map(([title, src], i) => ({
  key: `${title}-${i}`,
  mods: [],
  title,
  type: "image",
  src,
  href: title
}))

const contact = {
  key: 0,
  mods: [],
  title: "KONTAKT",
  type: "markup",
  body: "<p> Dufourstrasse 35 <br/> CH 8008 Zürich <br/> <a href='tel:+41 44 262 50 40'>+41 44 262 50 40</a> <br/> <a href='mailto:bul@burkhard-luethi.ch'>bul@burkhard-luethi.ch</a> <br/> </p>",
  href: "kontakt"
}

const kosmos = {
  key: 1,
  mods: [],
  title: "kosmos",
  type: "image",
  src: BL.kosmos,
  href: "kosmos",
  sections: [
    {
      key: 2,
      type: "image",
      src: BL.kosmos
    },
    {
      key: 1,
      type: "markup",
      body: "Hello kosmos"
    },
    {
      key: 3,
      type: "image",
      src: BL.kosmos_bistro
    },
    {
      key: 4,
      type: "image",
      src: BL.kosmos_forumstreppe
    },
  ]
}

export default  [
  contact,
  kosmos,
  ...allImages
]