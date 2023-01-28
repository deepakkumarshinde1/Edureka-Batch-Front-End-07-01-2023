// function => is a block of code , can be user again and again
// functions are reusable
function add(varOne, varTwo) {
  if (varOne === undefined || varTwo === undefined) {
    console.warn("Both values ara mandatory ");
  }
  // formal parameter
  console.log(varOne + varTwo); // NaN => Not a Number
}
// function definition () => arguments/parameter

add(10, 20); // function call
var a = 3;
add(); /// actual parameter // null , undefined, error
