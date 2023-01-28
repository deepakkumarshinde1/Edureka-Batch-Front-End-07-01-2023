var btn = document.getElementById("btnClick");
var changeText = document.querySelector("#changeText"); // # , . , h1
var inputText = document.querySelector("#inputText");
var selectId = document.querySelector("#selectId");
var changeSelect = document.querySelector("#changeSelect");
console.log(inputText);
// function clickEvent() {
//   console.log("click");
// }

// if we to change/set the text from javascript to element => innerHTML
// if we want get a text from html to javascript of element we use => innerHTML

// if we want to read/get a value form a input,select,textarea to javascript => value
// if we want to set a value form javascript to input,select,textarea => value

inputText.addEventListener("keyup", function () {
  //var text = changeText.innerHTML; // get/read data
  //console.log(text);
  //changeText.innerHTML = "Edureka"; // set data

  var text = inputText.value; // reading value of input
  changeText.innerHTML = text; // setting value of input to element
});

// click, keyup (input), change (select) ,load(page) , mouseover, drag, drop, scroll
selectId.addEventListener("change", function () {
  console.log(selectId.value);
});

changeSelect.addEventListener("click", function () {
  selectId.value = "a2";
});
