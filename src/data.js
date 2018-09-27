import * as BL from "./images/bl";

const allImages = Object.entries(BL).map(([title, src], i) => ({
  key: `${title}-${i}`,
  mods: [],
  title,
  type: "image",
  src,
  href: title
}));

const contact = {
  key: 0,
  mods: [],
  title: "KONTAKT",
  type: "markup",
  body:
    "<p> Dufourstrasse 35 <br/> CH 8008 Zürich <br/> <a href='tel:+41 44 262 50 40'>+41 44 262 50 40</a> <br/> <a href='mailto:bul@burkhard-luethi.ch'>bul@burkhard-luethi.ch</a> <br/> </p>",
  href: "kontakt"
};

const kosmos = {
  key: 1,
  mods: ["width-2x", "height-2x"],
  // mods: ["height-2x"],
  // mods: ["width-2x"],
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
      body: "<p><strong>Hello kosmos</strong> — Cupiditate odio enim minima ab facere. Iusto impedit temporibus deleniti. Iure doloribus quis culpa aspernatur incidunt. Iste voluptas reiciendis similique ipsa perspiciatis eum. Incidunt aspernatur pariatur quidem cupiditate asperiores beatae. Consectetur animi ad eum voluptate reprehenderit. Voluptas reprehenderit iusto architecto. Eos magni fugiat dolor blanditiis quam. Debitis minima at laboriosam. Placeat possimus sunt est qui beatae dolor aliquid. Quidem illo vitae ratione numquam. Alias totam autem dignissimos corporis voluptate. Illo fugiat placeat expedita nostrum explicabo. Vel aliquid ducimus vel occaecati nemo. Suscipit animi voluptatem asperiores vero quisquam incidunt.</p>"
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
    {
      key: 5,
      type: "table",
      rows: [
        ["Bauherrschaft", "Politische Gemeinde Thalwil"],
        ["Aufgabe", "Erweiterungsneubau"],
        ["Bearbeitungszeit", "2015–2018"],
        ["Baukosten", "5,3 Mio. CHF"],
        ["Kubatur", "7’600 m³ "]
      ]
    },
  ]
};
const text = {
  key: 2,
  mods: ["width-2x", "large-type"],
  title: "kosmos",
  type: "markup",
  body: "Wir helfen ihnen auch mit ihrer Baueingabe <br><br><a href='kosmos'>fragen sie uns</a>",
};


export default [contact, kosmos, text, ...allImages];
