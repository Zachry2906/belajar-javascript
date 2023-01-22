const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const music = document.getElementById("sound1");
const btn1 = document.getElementById("btn1");
const bg = document.getElementById("play");
const bg1 = document.getElementById("pause");

btn.addEventListener("click", function () {
  search.classList.toggle("active");
  music.play();
  input.focus();
});

btn1.addEventListener("click", function () {
  btn1.setAttribute("onclick", 'document.getElementById("sound1").pause();');
});

bg.addEventListener("click", function () {
  bg.setAttribute("src", "ddd.jpg");
  bg.setAttribute("id", "pause");
  music.play();
})
