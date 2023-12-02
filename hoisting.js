// variables declared with var are hoisted with a default initialization of undefined wheras
// variables declared with let are hoisted without a default initialization
// only function declarations are hoisted, not expressions

x = 1;
console.log(x); //1
var x;

console.log(x); // undefined
var x = 3;
console.log(x); // 3

console.log(x); // throws error
let x = 3;
console.log(x);

//function declarations

x();
function x() {
  console.log("hoisted");
}

// function expressions are not hoisted

a();
a = x();
function x() {
  console.log("hoisted");
}
