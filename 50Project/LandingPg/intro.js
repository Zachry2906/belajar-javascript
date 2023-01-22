const left = document.querySelector(".left");
const right = document.querySelector(".right");
const cont = document.querySelector(".container");

left.addEventListener("mouseenter", function () {
  cont.classList.add("hover-left");
});
left.addEventListener("mouseleave", function () {
  cont.classList.remove("hover-left");
});

right.addEventListener("mouseenter", function () {
  cont.classList.add("hover-right");
});
right.addEventListener("mouseleave", function () {
  cont.classList.remove("hover-right");
});