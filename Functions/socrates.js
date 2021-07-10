"use strict";

const allManAreMortal = true;

const namesToTest = ["Socrates", "Superman", ""];

const subjects = [
  { name: "Socrates", isMan: true },
  { name: "Superman", isMan: false },
];

const isMan = (subjectName) => {
  const filteredSubjects = subjects.filter(
    (subject) => subject.name === subjectName
  );
  return filteredSubjects[0].isMan;
};

const evaluateMortality = (subjectName) => {
  if (subjectName && subjectName.length > 0) {
    const isMortal = isMan(subjectName);
    console.log(`
    All man are ${allManAreMortal ? "mortal" : "immortal"} 
    ${subjectName} is ${isMortal ? "a man" : "not a man"}
    therefore ${subjectName} is ${isMortal ? "mortal" : "immortal"}`);
  } else {
    console.log("Nothing to wonder about.");
  }
};

namesToTest.forEach((subject) => {
  evaluateMortality(subject);
});
