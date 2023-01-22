const panels = document.querySelectorAll(".panel");

function removeActiveClasess() {
  panels.forEach(function (panel) {
    panel.classList.remove("active");
  });
}

panels.forEach(function (panel) {
  panel.addEventListener("click", function () {
    removeActiveClasess();
    panel.classList.add("active");
  });
});
