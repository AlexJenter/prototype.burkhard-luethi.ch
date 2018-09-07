import * as BL from "./images/bl"

const allImages = Object.entries(BL)
.map(([title, src]) => ({
  key: 9794700,
  mods: [],
  title,
  type: "image",
  src,
  href: title
}))

allImages[0] =   {
  key: 9794792,
  mods: [],
  title: "KONTAKT",
  type: "markup",
  body: "<p> Dufourstrasse 35 <br/> CH 8008 Zürich <br/> <a href='tel:+41 44 262 50 40'>+41 44 262 50 40</a> <br/> <a href='mailto:bul@burkhard-luethi.ch'>bul@burkhard-luethi.ch</a> <br/> </p>",
  href: "kontakt"
}

allImages[1] = {
  key: 9794700,
  mods: ["width-2x", "height-2x"],
  title: "kosmos",
  type: "image",
  src: BL.kosmos,
  href: "kosmos"
}

allImages[6] = {
  key: 9794700,
  mods: [],
  title: "?",
  type: "markup",
  body: "<h2>Brauchen sie hilfe bei einer <em>Baueingabe</em>?</h2>",
  href: "baugesuch"
}

export default  allImages