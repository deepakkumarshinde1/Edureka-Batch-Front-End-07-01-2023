// js code

console.log("Hello Edureka"); // testing outputs

// console => js object
// log => method of console

//alert("Hello Edureka"); // inbuilt function

// data in variables
var VarName = "Hello Edureka"; // every variables has memory

var a = 10;
var b = 20;
var c = a + b; // 30

// Arithmetic Operators + - / * %

// type of data is i.e data type => typeof
var text = null;
var type = typeof text;
console.log(text, type); // class object => oop
/**
 * string
 * number
 * boolean (true,false)
 * object
 *  => array, jsObject , function , null
 * undefined
 */

// its clear => yes (true) or no (false)
// conditions Operators
var a = 10;
var b = 20;

// a === b, a !== b, a > b, a >= b , a < b , a <= b
var itsClear = false;
// conditional statement
/** if else */
if (itsClear === true) {
  // true code
  //console.log("yes");
} else {
  // false code
  //  console.log("No");
}

var a = 10; // number
var b = "10"; // string
// === data and typeof
if (a === b) {
  console.log("yes");
} else {
  console.log("No");
}

//store more then one data
// Array => collection same different type of data
// data is store at a key or index position
// key start with 0
var rollNo = [10, 20, 30, 40];

// how we can read a single data from array
//console.log(rollNo[2]);

// loop => run a repeated code
// for , while , do while, for in , for of
var arrayLength = rollNo.length;

for (var index = 0; index < arrayLength; index++) {
  // console.log(rollNo[index], " FOR LOOP");
}

var index = 0;
while (index < arrayLength) {
  index++;
  //console.log(rollNo[index], " FOR LOOP");
}

// DO WHILE
var index = 0;
do {
  // console.log(rollNo[index], " Do WHILE LOOP");
  index++;
} while (index < arrayLength); // min one time

// for in , for of
for (var index in rollNo) {
  // code
  // console.log(key);
  console.log(rollNo[index], " For In Loop");
}

for (var value of rollNo) {
  // code
  // console.log(key);
  console.log(value, " For of Loop");
}

// limitation of array
var studentDetails = ["Deepakkumar", 20, 30];
console.log(studentDetails);

// JS Object =>Collection Set Key(prop) value pair , but key ar user defined , char
var studentDetails = {
  name: "Deepakkumar",
  marks: 20,
  rollNo: 30,
}; // JSON => Javascript Object Notation

// read a value
console.log(studentDetails);

/// array + js object = [{...},{...},{...},{...}] => JSON array/ Object Array

var restaurantList = [
  { id: 1, name: "Green cafe", location: "Pune" },
  { id: 2, name: "KFC", location: "Mumbai" },
];

// search => find / filter
// sort => sort()
// slice => 10

// employee
