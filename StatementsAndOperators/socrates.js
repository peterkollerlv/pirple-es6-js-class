"use strict";

const allManAreMortal = true;

const socrates = {
  name: "Socrates",
  isMan: true,
};

const superman = {
  name: "Superman",
  isMan: false,
};

function evaluateMortality(subject) {
  if (subject) {
    console.log(`
    All man are ${allManAreMortal ? "mortal" : "immortal"} 
    ${subject.name} is ${subject.isMan ? "a man" : "not a man"}
    therefore ${subject.name} is ${
      allManAreMortal && subject.isMan ? "mortal" : "immortal"
    }`);
  } else {
    console.log("Nothing to wonder about.");
  }
}

evaluateMortality(socrates);
evaluateMortality(superman);
