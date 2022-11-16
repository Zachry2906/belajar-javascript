//ELementes.bytagname = HTMLCollection Array
const p = document.getElementsByTagName("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
//   p[i].setAttribute("name", "Aruy");
// }

// Sama, HTML COLECCTION JG
const p1 = document.getElementsByClassName("p1");
p1[0].style.color = "green";

//wlwmwnt
const p2 = document.querySelector("#b p");
p2.style.fontSize = "20px";

// NOdelist
// const p3 = document.querySelectorAll("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
//   p[i].style.borderRadius = "0px";
// }

//CRUD JS
const baruul = document.createElement("li");
const ulBaru = document.createTextNode("Item bau");

baruul.appendChild(ulBaru);

const judul = document.getElementById("judul");
judul.innerHTML = "Coba InnerHTML";
judul.style.color = "red";

const ul = document.querySelector("section#b ul");
const ul2 = document.querySelector("section#b ul li:nth-child(2)");

ul.insertBefore(baruul, ul2);

//MY OWN
const sec = document.getElementById("a");
//menentukan sebelum apa
const par3 = sec.querySelector("p");
const par = document.createElement("p");
const instagram = document.createTextNode("<a href ='instagram.com'> saya </a>");

par.appendChild(instagram);
//menetukan parent mana
//menyambungkkan
sec.replaceChild(par, par3);

par.style.backgroundColor = "BLUE";
par.style.borderRadius = "10px";

//HAPUS LINK
const secA = document.getElementById('a');
const link = document.getElementsByTagName('a')[0];

secA.removeChild(link);

//BUAT LI BARU ON CLICT
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
  const ul = document.querySelector('section#b ul');
  const libaru = document.createElement('li');
  const text = document.createTextNode('coba-coba aja');

  libaru.appendChild(text);
  ul.appendChild(libaru);
})

const item1 = document.querySelector('section#b ul li:nth-child(1)');
item1.addEventListener('mouseenter', function(){
  item1.style.backgroundColor = 'red';
},
item1.addEventListener('mouseleave', function(){
  item1.style.backgroundColor = 'white';
} )
)

const nav = document.querySelector('section#a p.p3');
nav.addEventListener('mouseenter', function(){
  nav.style.backgroundColor = 'red';
})

const but = document.createElement('button');
const tx = document.createTextNode('coba-coba')

but.appendChild(tx);
but.setAttribute('type', 'button');
p2.after(but);

but.addEventListener('mouseenter', function(){
  but.style.backgroundColor = 'blue';
})