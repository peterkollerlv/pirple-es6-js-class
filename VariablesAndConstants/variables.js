'use strict'

hoisting = "i am declared at the bottom and used at the top";
console.log(hoisting);
/* Hoisting in JavaScript means that a variable can be used before it is declared, and it is moved at the top of the block. 
"let" and "const" cannot be hoisted without receiving and error */

/* "var" can be used independent of the block scopes es6 and present time cjs with node will throw an error tho, 
it is becoming more and more depreceated as "let" and "const" where introduced to mainstream web development
and it can also lead to unintended consicuences*/
function exampleWithVar() {
  var myVar = 'i am a "var" in a function but used outside of it';
  console.log(myVar);
}

exampleWithVar();

// this throws an error when ran with node, although in the course it was demonstrated like such in js bin / js preset
// console.log(myVar);

/* "let" is scope senistive, it cannot be used outside of the scope of the block where it was declared, this is usefull
separate concerns of variables in different scopes and eliminate the drawback of using "var"*/

function exampleWithLet() {
  let myLet =
    'i am a "let" and i can only be used in the block i was declared in';
  console.log(myLet);
}

exampleWithLet();

/* "const" is the es6 js declaration of constants, it cannot be re assigned, it is scope restricted, but the value of it can 
be modified so it is not considered immutable */

function exampleWithConst() {
  const myConst = [
    'i am a "const" and i cannot be re-assigned, but my value can be manipulated',
  ];
  console.log(myConst);
  myConst.push("something changed");
  console.log(myConst);
}

exampleWithConst();

var hoisting;
