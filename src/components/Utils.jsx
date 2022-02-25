import React from "react";
import namor from "namor";
import randomDate from "random-date";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

var DateArray = [
  "14.03.2018",
  "15.03.2018",
  "16.03.2018",
  "17.03.2018",
  "18.03.2018",
  "19.03.2018"
];
var OrtArray = ["600", "610", "620", "630", "640"];

var ProduktionArray = [
  "Gemüseburger",
  "Hamburger",
  "Schnitzel mit Pommes",
  "Schweinebraten in Rotwein",
  "Spinatgratin",
  "Seelachsfilet in Sonnenblumenkernkruste ",
  "Kürbis-Spinateintopf",
  "Bärlauchbratwurst",
  "Hähnchenfleisch in Currysauce",
  "Grüne Bohnen mit Speck",
  "Forelle Müllerin Art",
  "Gourmet Teller",
  "Gemüsepfanne",
  "Indisches Linsencurry",
  "Caesar Salat",
  "Maultaschen Schwäbischer Art",
  "Linsen mit Spätzle",
  "Grünkernfrikadellen mit Kartoffelbrei",
  "Dönerteller",
  "Elsässer Flammkuchen",
  "Schupfnudeln",
  "Apfelstrudel mit Vanillesoße"
];

var GebindeArray = [
  "Gut und Günstig",
  "Sättigungsbeilage",
  "Hauptkomponente",
  "Salatbuffet",
  "Tagessuppe",
  "Grillstation"
];

var VerbrauchsortArray = [
  "Ausgabestelle 42",
  "Mensa 2",
  "Mensa 1",
  "Cafeteria XY"
];

var PrognoseArray = [
  "502 \xB1 50",
  "523 \xB1 15",
  "383 \xB1 10",
  "455 \xB1 80",
  "170 \xB1 45",
  "270 \xB1 20",
  "89 \xB1 5",
  "83 \xB1 2",
  "873 \xB1 30",
  "735 \xB1 23",
  "412 \xB1 63",
  "123 \xB1 21",
  "62 \xB1 4",
  "502 \xB1 50",
  "523 \xB1 15",
  "383 \xB1 10",
  "455 \xB1 80",
  "170 \xB1 45",
  "270 \xB1 20",
  "89 \xB1 5",
  "83 \xB1 2",
  "873 \xB1 30",
  "735 \xB1 23",
  "412 \xB1 63",
  "123 \xB1 21",
  "62 \xB1 4",
  "735 \xB1 23",
  "412 \xB1 63",
  "123 \xB1 21",
  "62 \xB1 4",
];

var SollmengeArray = [
  850,
  500,
  300,
  450,
  180,
  180,
  125,
  75,
  800,
  800,
  500,
  100,
  100,
  850,
  500,
  300,
  450,
  180,
  180,
  125,
  75,
  800,
  800,
  500,
  100,
  100,
  800,
  500,
  100,
  100
];

var AbweichungArray = [
  348,
  -23,
  -83,
  5,
  10,
  -90,
  36,
  -8,
  -73,
  65,
  88,
  -23,
  38,
  348,
  -23,
  -83,
  5,
  10,
  -90,
  36,
  -8,
  -73,
  65,
  88,
  -23,
  38,
  65,
  88,
  -23,
  38
];

var SicherheitArray = [
  "sicher", 
  "sehr sicher", 
  "sehr sicher",
  "unsicher",
  "unsicher",
  "sicher",
  "sehr sicher",
  "sehr sicher",
  "sehr sicher",
  "sicher",
  "sicher",
  "sehr sicher",
  "sicher",
  "sehr sicher",
  "sehr sicher",
  "unsicher",
  "unsicher",
  "sicher",
  "sehr sicher",
  "sehr sicher",
  "sehr sicher",
  "sicher",
  "sicher",
  "sehr sicher",
  "sehr sicher",
  "sicher",
  "sicher",
  "sehr sicher"
];

//var a = ["w", "y", "k", "o", "p"];
//var iterator = a.values();

const newProductionPlan = () => {
  return {
    date: DateArray[Math.floor(Math.random() * DateArray.length)],
    production:
      ProduktionArray[Math.floor(Math.random() * ProduktionArray.length)],
    art: GebindeArray[Math.floor(Math.random() * GebindeArray.length)],
    ort_id: OrtArray[Math.floor(Math.random() * OrtArray.length)],
    verbrauchsort:
      VerbrauchsortArray[Math.floor(Math.random() * VerbrauchsortArray.length)],
    sicherheit:
      SicherheitArray[Math.floor(Math.random() * SicherheitArray.length)]
  };
};

export function makeData(len = 30) {
  return range(len).map(d => {
    return {
      ...newProductionPlan(),
      prognosemenge: PrognoseArray[d],
      sollmenge: SollmengeArray[d],
      abweichung: AbweichungArray[d],
      sicherheit: SicherheitArray[d]
      //    children: range(10).map(newProductionPlan)
    };
  });
}
