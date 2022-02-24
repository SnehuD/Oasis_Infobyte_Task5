window.onload = function () {
  document.querySelector(".content").classList.add("active");
};
var t = false;
function drop() {
  document.querySelector(".bio p").classList.toggle("active");
  if (t === false) {
    t = true;
    document.querySelector(".bio h2 i").classList.remove("fa-caret-down");
    document.querySelector(".bio h2 i").classList.add("fa-sort-up");
  } else {
    t = false;
    document.querySelector(".bio h2 i").classList.remove("fa-sort-up");
    document.querySelector(".bio h2 i").classList.add("fa-caret-down");
  }
}
