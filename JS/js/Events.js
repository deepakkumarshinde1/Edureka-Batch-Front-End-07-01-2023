// DOM => Document Object Model
// DOM => logical representation of HTML code
// Every Element is refer as Object/Node
// DOM  is use to
//      event (user action): click,keypress ,change,  load , unload
//      Change html text / element from JS
//      Change CSS form Javascript For Element

// document.getElementsByTagName();
// document.getElementsByClassName();
// document.getElementById()
// document.querySelector();// single
// css Selector
/***
 * class => .className
 * id => #idName
 * element=> name
 */
// document.querySelectorAll();// array

// call html in js
var btn = document.getElementById("btnClick");
// we get a element or null as value

console.log(btn);
// add event => click

function clickEvent() {
  alert("button is clicked");
}

btn.addEventListener("mouseover", clickEvent);
btn.addEventListener("click", clickEvent);

// event in js
// string methods
// array methods
// maths
// date methods
