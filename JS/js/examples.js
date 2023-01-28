var itemText = document.getElementById("itemText");
var saveItem = document.getElementById("saveItem");
var itemList = document.getElementById("itemList");
var allItems = [];

saveItem.addEventListener("click", function () {
  saveData();
});

itemText.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    saveData();
  }
});

function saveData() {
  var text = itemText.value;
  text = text.toUpperCase();
  itemText.value = "";
  // add data in array => push

  // api call

  allItems.push({ name: text, address: "pune" });
  printData();
}
// map => recreate array
function printData() {
  var list = allItems.map(function (value, index) {
    return `<tr>
                <td>${value.name}</td>
                <td>${value.address}</td>
            </tr>`;
  });

  // convert array to string => .join()
  list = list.join("");
  itemList.innerHTML = list;
}

// array => filter (search) /sort (sorting)
// string
// math
// date

var calcAreaInput = document.getElementById("calcAreaInput");
var calcArea = document.getElementById("calcArea");

calcArea.addEventListener("click", function () {
  var radius = calcAreaInput.value;
  var result = Math.PI * Math.pow(radius, 2);
  result = Math.round(result); // 20.4 => 20, 20.6 => 21
  alert(`Area of circle is = ${result}`);
  calcAreaInput.value = "";
  // pi * r^2
});

console.log(Math.PI);
console.log(Math.pow(2, 2));

var result = 1;
console.log(`Area of circle is = ${result}`);
