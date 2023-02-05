const btn = document.querySelectorAll(".click");
const reset = document.getElementById("reset");
const start = document.getElementById("start");
const stopp = document.getElementById("stop");
const waktu = document.getElementById("waktu");
var interval;
let seconds = 00;
let tens = 00;
let minutes = 00;
const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");
const appendMinutes = document.getElementById("minute");

btn.forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.style.transform = "scale(0.4)";
  });
});

btn.forEach((button) => {
  button.addEventListener("mouseup", () => {
    button.style.transform = "scale(1)";
  });
});

function time() {
  tens++;

  if (tens <= 9) {
    appendTens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    appendTens.innerHTML = tens;
  }

  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
  if (seconds > 59) {
    minutes++;
    appendMinutes.innerHTML = "0" + minutes;
    seconds = 0;
    appendTens.innerHTML = "0" + 0;
  }
}

start.addEventListener("click", () => {
    clearInterval(interval);
  interval = setInterval(time, 10);
});

stopp.addEventListener("click", () => {
  clearInterval(interval);
});

reset.addEventListener("click", function () {
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
});
