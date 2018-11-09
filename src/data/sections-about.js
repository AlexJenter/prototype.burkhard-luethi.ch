import img from '../images/about.png'
const address =
`<span>Burkhard & Lüthi Architektur GmbH<br>
Dufourstrasse 35<br>
CH 8008 Zürich<br>
+41 44 262 50 40<br>
bul@burkhard-luethi.ch</span>`

export default [
  {
    key: 0,
    type: "image",
    src: img
  },
  {
    key: 1,
    type: "markup",
    body: `<ul>
<li>Mark Burkhard</li>
<li>Andreas Lüthi</li>
<li>Eveline Dolenc</li>
<li>Evelyn Chiappori</li>
<li>Marina Keller</li>
<li>Guy Bebié</li>
<li>Dimitri Seibane</li>
<li>Silvia Hähle</li>
<li>Lucas Nydegger</li>
<li>Marcelo Gonzalez</li>
<li>Lino Fontana</li>
<li>Dominik Giger</li>
</ul>`
  },
  {
    key: 2,
    type: "markup",
    body: address
  }
];
