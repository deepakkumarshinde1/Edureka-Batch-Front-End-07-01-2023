window.addEventListener("load", onLoad);

function onLoad() {
  var changeIcon = document.querySelectorAll(".change-icon");

  changeIcon.forEach(function (element) {
    element.addEventListener("click", function () {
      let iElement = this.children[1];
      iElement.classList.toggle("rotate");
    });
  });
}
