import kosmos_img1 from "../images/139_kosmos/139_02_Bilder_JPG/Burkhard-Luethi_139_Kosmos_1_Foyer.jpg";
import kosmos_img2 from "../images/139_kosmos/139_02_Bilder_JPG/Burkhard-Luethi_139_Kosmos_4_Kinobar.jpg";
import kosmos_img3 from "../images/139_kosmos/139_02_Bilder_JPG/Burkhard-Luethi_139_Kosmos_3_Kinoabgang.jpg";
import kosmos_pln1 from "../images/139_kosmos/139_01_Pläne/Burkhard-Luethi_139_Kosmos_30_01_7_LS_Kinoallee.jpg";

export default [
  {
    key: 0,
    type: "image",
    src: kosmos_img1
  },
  {
    key: 1,
    type: "markup",
    body:
      "<p>Der zentrale architektonische Gedanke besteht darin, den im Grundausbau vorgefundenen Rohbau als architektonische Qualität zu verstehen und zum Erscheinungsbild der Kosmos-Räume zu etablieren. Trotz einer hochinstallierten und komplexen Kino-, Veranstaltungs- und Gastrotechnik, sollen die eingesetzten Materialien von schlichter Eleganz und gleichzeitig von solider und langlebiger Qualität sein. Dadurch entsteht eine Architektur, welche nicht im Vordergrund steht, sondern einen unprätentiösen Hintergrund aufbaut, welcher die Atmosphäre der verschiedenen Bereiche des Kosmos und ihren Akteuren umso bes- ser zur Geltung bringen lässt.<br>Der Kosmos ist selbst gleichermassen Ort und Bindeglied an der Schnittstelle zwischen Europaallee und Langstrasse.</p>"
  },
  {
    key: 3,
    type: "image",
    src: kosmos_img3
  },
  {
    key: 2,
    type: "image",
    src: kosmos_pln1
  },
  {
    key: 3,
    type: "image",
    src: kosmos_img2
  },
  {
    key: 5,
    type: "table",
    title: "Spezifikation",
    rows: [
      ["Bauherrschaft", "Kosmos - Kultur AG"],
      [
        "Aufgabe",
        "Ausbau von 6 Kinosälen, Gastrobetrieb, Veranstaltungen und Buchladennutzung"
      ],
      ["Bereich", "Gesamtprojekleitung Planung und Ausführung"],
      ["Stand", "Planung ab 2013 / Eröffnung am 2. September 2017"],
      ["Perimeter", "ca. 5000 m2"],
      ["Baukosten", "BKP 1-9: 13‘990‘000.-"],
      ["Bauherrenvertretung", "Büher&Oettli Baumanagement AG"]
    ]
  },
  {
    key: 6,
    type: "table",
    title: "Fachplaner",
    rows: [
      ["Elektroingenieur", "Schmidiger + Rosasco AG"],
      ["HLKKS-Ingenieur", "Lippuner AG"],
      ["Kälteplaner", "Rohr Kälteconsulting"],
      ["Küchenplaner", "Wallimann Konzepte & Planung GmbH"],
      ["Bauphysik/Akustik", "Zeugin Bauberatungen AG"],
      ["Kinoplaner", "Audio-Ciné AG"],
      ["Beleuchtungsplaner", "Neue Werkstatt GmbH"]
    ]
  }
];