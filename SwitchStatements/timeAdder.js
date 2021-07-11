"use strict";

const acceptedValues = [
  "second",
  "seconds",
  "minute",
  "minutes",
  "hour",
  "hours",
  "day",
  "days",
];

const daysToSecond = (days) => days * 60 * 60 * 24;
const hoursToSecond = (hours) => hours * 60 * 60;
const minutesToSecond = (minutes) => minutes * 60;
const getPlurarString = (text, value) =>
  value > 1 ? `${value + " " + text + "s"} ` : `${value + " " + text} `;

const convertToSecond = (value, label) => {
  let resultValue;

  switch (label) {
    case "second":
    case "seconds":
      resultValue = value;
      break;
    case "minute":
    case "minutes":
      resultValue = minutesToSecond(value);
      break;
    case "hour":
    case "hours":
      resultValue = hoursToSecond(value);
      break;
    case "day":
    case "days":
      resultValue = daysToSecond(value);
      break;
  }

  return resultValue;
};

const invalidInput = (value1, label1, value2, label2) =>
  (label1[label1.length - 1] === "s" && value1 < 2) ||
  (label2[label2.length - 1] === "s" && value2 < 2) ||
  (label1[label1.length - 1] !== "s" && value1 > 1) ||
  (label2[label2.length - 1] !== "s" && value2 > 1) ||
  !acceptedValues.some((value) => value === label1) ||
  !acceptedValues.some((value) => value === label2);

const timeAdder = (value1, label1, value2, label2) => {
  if (invalidInput(value1, label1, value2, label2)) {
    return "Invalid input";
  }
  let finalResult;
  let sumInSeconds;
  let numberOfDays;
  let numberOfHours;
  let numberOfMinutes;
  let numberOfSeconds;
  let secondsRemainder;
  let value1InSeconds = convertToSecond(value1, label1);
  let value2InSeconds = convertToSecond(value2, label2);
  sumInSeconds = value1InSeconds + value2InSeconds;

  switch (true) {
    case sumInSeconds / daysToSecond(1) >= 1:
      numberOfDays = Math.floor(sumInSeconds / daysToSecond(1));

      secondsRemainder = sumInSeconds % daysToSecond(numberOfDays);

      numberOfHours =
        hoursToSecond(secondsRemainder) >= hoursToSecond(1)
          ? Math.floor(secondsRemainder / hoursToSecond(1))
          : 0;

      secondsRemainder = secondsRemainder - hoursToSecond(numberOfHours);

      numberOfMinutes =
        minutesToSecond(secondsRemainder) >= minutesToSecond(1)
          ? Math.floor(secondsRemainder / minutesToSecond(1))
          : 0;

      numberOfSeconds = secondsRemainder - minutesToSecond(numberOfMinutes);

      break;
    case sumInSeconds / hoursToSecond(1) >= 1:
      numberOfHours = Math.floor(sumInSeconds / hoursToSecond(1));

      secondsRemainder = sumInSeconds % hoursToSecond(numberOfHours);

      numberOfMinutes =
        minutesToSecond(secondsRemainder) >= minutesToSecond(1)
          ? Math.floor(secondsRemainder / minutesToSecond(1))
          : 0;

      numberOfSeconds = secondsRemainder - minutesToSecond(numberOfMinutes);

      break;

    case sumInSeconds / minutesToSecond(1) >= 1:
      numberOfMinutes = Math.floor(sumInSeconds / minutesToSecond(1));

      secondsRemainder = sumInSeconds % hoursToSecond(numberOfMinutes);

      numberOfSeconds = secondsRemainder - minutesToSecond(numberOfMinutes);

      break;
    default:
      numberOfSeconds = sumInSeconds;
  }

  finalResult = `${
    numberOfDays > 0 ? getPlurarString("day", numberOfDays) : ""
  }${numberOfHours > 0 ? getPlurarString("hour", numberOfHours) : ""}${
    numberOfMinutes > 0 ? getPlurarString("minute", numberOfMinutes) : ""
  }${numberOfSeconds > 0 ? getPlurarString("second", numberOfSeconds) : ""}`;

  return finalResult;
};

console.log(timeAdder(36, "hours", 181, "seconds"));
