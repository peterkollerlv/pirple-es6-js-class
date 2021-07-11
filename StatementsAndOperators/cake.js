"use strict";

const chocolate = "chocolate";
const vanila = "vanila";

const cake = {
  flavor: vanila,
};

if (cake.flavor === chocolate || cake.flavor === vanila) {
  console.log(`This cake is either ${chocolate} or ${vanila}`);
  if (cake.flavor !== chocolate) {
    console.log(`This cake is not ${chocolate}`);
    console.log(`Therefore, this cake is ${vanila}`);
  }
  if (cake.flavor !== vanila) {
    console.log(`This cake is not ${vanila}`);
    console.log(`Therefore, this cake is ${chocolate}`);
  }
}
