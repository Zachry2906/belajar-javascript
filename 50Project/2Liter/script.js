const smallC = document.querySelectorAll(".cup-small");
const liter = document.getElementById("liters");
const persen = document.getElementById("persen");
const remained = document.getElementById("remained");

updateBC();

smallC.forEach(function (cup, idx) {
  cup.addEventListener("click", function () {
    highlightC(idx);
  });
});

function highlightC(idx) {
  if (smallC[idx].classList.contains("full") && !smallC[idx].nextElementSibling.classList.contains("full")) {
    idx--;
  }

  smallC.forEach(function (cup, idx2) {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBC();
}

function updateBC() {
  const fullcups = document.querySelectorAll(".cup-small.full").length;
  const sumcups = smallC.length;

  if (fullcups === 0) {
    persen.style.visibility = "hidden";
    persen.style.height = 0;
  } else {
    persen.style.visibility = "visible";
    persen.style.height = `${(fullcups / sumcups) * 330}px`;
    persen.innerText = `${(fullcups / sumcups) * 100}%`;
  }

  if (fullcups === sumcups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liter.innerText = `${2 - (250 * fullcups) / 1000}L`;
  }
}
