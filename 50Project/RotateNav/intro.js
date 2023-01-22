const miring = document.getElementById("open");
const mirings = document.getElementById("close");

miring.addEventListener("click", function () {
  miring.parentElement.parentElement.parentElement.classList.add("show-nav");
});

mirings.addEventListener("click", function () {
  mirings.parentElement.parentElement.parentElement.classList.remove("show-nav");
});
