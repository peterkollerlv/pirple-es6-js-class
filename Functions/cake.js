"use strict";

const cakeFlavors = ["chocolate", "vanila"];

const flavorOfCake = (flavors, isChocolate) => {
  if (flavors.length > 0) {
    console.log(`This cake is either ${flavors.join(" or ")}
    This cake is not ${!isChocolate ? "chocolate" : "vanila"}
    Therefore, this cake is ${isChocolate ? "chocolate" : "vanila"}`);
  }
};

flavorOfCake(cakeFlavors, true);
flavorOfCake(cakeFlavors, false);
