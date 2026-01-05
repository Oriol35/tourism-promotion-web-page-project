import tempsImg from "../assets/images/activities/tempsDeFlors.webp";
import funfair from "../assets/images/stNarcis.jpg";
import cityWalls from "../assets/images/muralla.jpg";
import cathedral from "../assets/images/activities/cathedral.jpg";
import waters from "../assets/images/activities/banysArabs.jpg";
import stFelix from "../assets/images/activities/stFelixLleona.png";
import onyarHouses from "../assets/images/onyar.jpg";
import artMuseum from "../assets/images/activities/artMuseum.jpg";
import rambla from "../assets/images/activities/rambla.png";
import pereGalligants from "../assets/images/activities/stPereGalligants.png";

// See how this file holds the information stored in each "ActivityCard" module

/*
  "duration" indicates the estimated duration of the activity. This will indicate the export file the expexted duration of the event.
  "locationUrl" will be put inside the event description
  for more details check this out: https://en.wikipedia.org/wiki/ICalendar
*/

export const activities = [
  // --- Seasonal (a.k.a. Time-exclusive) activities ---
  {
    id: 1,
    title: "Temps de Flors",
    description:
      "Girona's spring flower festival where floral expositions fill the entire city.",
    duration: 330,
    type: "seasonal",
    availableDates: { start: "2026-05-08", end: "2026-05-18" },
    locationUrl: "https://maps.app.goo.gl/UJypkrkCRqtr6fvLA",
    locationName: "Girona Temps de Flors",
    image: tempsImg,
  },
  {
    id: 2,
    title: "Sant Narcís Funfair",
    description:
      "Autumn fair with rides, chestnuts, and the giant Ferris wheel at the park.",
    duration: 240,
    type: "seasonal",
    availableDates: { start: "2026-10-23", end: "2026-11-03" },
    locationUrl: "https://maps.app.goo.gl/7R9EQQas2Raf2iaY7",
    locationName: "Parc of la Devesa, Girona",
    image: funfair,
  },

  // --- All-Year Activities ---
  {
    id: 3,
    title: "Walk the City Walls",
    description: "A scenic walk along the city's medieval defensive walls.",
    duration: 60,
    type: "all-year",
    locationUrl: "https://maps.app.goo.gl/auKPKkL3WehrU9F2A",
    locationName: "Girona Walls",
    image: cityWalls,
  },
  {
    id: 4,
    title: "Girona Cathedral Visit",
    description: "Explore the widest Gothic nave in the world.",
    duration: 45,
    type: "all-year",
    locationUrl: "https://maps.app.goo.gl/zBRUUvHrdys8S973A",
    locationName: "Catedral de Girona",
    image: cathedral,
  },
  {
    id: 5,
    title: "Saint Felix's Basilica Visit",
    description:
      'Visit the most famous church in the entire city, situated next to "cul de la lleona" statue.',
    duration: 35,
    type: "all-year",
    locationUrl: "https://maps.app.goo.gl/3ajnns2GZKEoXm1n9",
    locationName: "Basilica of Saint Felix, Girona",
    image: stFelix,
  },
  {
    id: 6,
    title: "Arab Baths",
    description: "12th-century Romanesque bathhouse with lots of history.",
    duration: 40,
    type: "all-year",
    locationUrl: "https://maps.app.goo.gl/EhSeQ1u6FscTTw5e9",
    locationName: "Arab baths, Girona",
    image: waters,
  },
  {
    id: 7,
    title: "Crossing Girona's Bridges ",
    description:
      "Trace a path along the main bridges of the Onyar River through its most iconic views.",
    duration: 20,
    type: "all-year",
    locationUrl: "https://maps.app.goo.gl/aZ11fKzCAoTdZaBJ8",
    locationName: "Eiffel Bridge, Girona",
    image: onyarHouses,
  },
  {
    id: 8,
    title: "Girona's Art Museum Visit",
    description:
      "This museum offers a wide range of art from the Girona region, from the Romanesque period to the present day.",
    duration: 150,
    type: "all-year",
    locationUrl: "https://maps.app.goo.gl/9r9p4MDY4Fmy2oCq5",
    locationName: "Girona's Art Museum",
    image: artMuseum,
  },
  {
    id: 9,
    title: 'Walk along "La Rambla"',
    description:
      "Take a walk along Girona's oldest main avenue. Full of places to relax for a bit and make a little tourism.",
    duration: 120,
    type: "all-year",
    locationUrl: "https://maps.app.goo.gl/CTH5DBPuYFoJwQrh9",
    locationName: "Pujada a la Catedral, Girona",
    image: rambla,
  },
  {
    id: 10,
    title: '"St.Pere de Galligants" Visit',
    description:
      "Learn more about this ancient Benedictine abbey, now serving the function of Girona's Archaeology Museum.",
    duration: 130,
    type: "all-year",
    locationUrl: "https://maps.app.goo.gl/2WyjHFaVp3TpqNHx9",
    locationName: "Monastery of Sant Pere de Galligants",
    image: pereGalligants,
  },
];
