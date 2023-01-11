//Create a class for the Keyword object type.


import Keyword from "./Keyword.js";

const demoTrading = new Keyword(
  "demo trading",
  300,
  "converting",
  15,
  260,
  false
);

console.log("The demo trading keyword object:", demoTrading);
console.log("The search volume value:", demoTrading.searchVolume);
