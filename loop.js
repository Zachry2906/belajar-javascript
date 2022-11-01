var x = "";
var ulang = true;

//PERULANGAN MEPET KIRI
while (ulang) {
  var nilai = prompt("Mau berapa kali?");

  for (i = 1; i < nilai; i++) {
    for (j = 1; j <= i; j++) {
      x += "+";
    }
    x += "\n";
  }
  for (i = nilai; i > 0; i--) {
    for (j = 1; j <= i; j++) {
      x += "+";
    }
    x += "\n";
  }
  console.log(x);
  ulang = confirm("mau coba lagi?");
}

alert("terimakasih sudah mencoba");

// PERULANGAN TENGAH
var s = "";
var ulang = true;

while (ulang) {
  var nilai = prompt("Berapa bintang?");
  for (var i = 1; i <= nilai; i++) {
    for (var x = nilai; x > i; x--) {
      s += " ";
    }
    for (var x = 0; x < i; x++) {
      s += "x ";
    }
    s += "\n";
  }
  for (var i = 1; i < nilai; i++) {
    for (var x = 0; x < i; x++) {
      s += " ";
    }
    for (var x = nilai; x > i; x--) {
      s += "x ";
    }
    s += "\n";
  }
  console.log(s);
  ulang = confirm("ulang ?");
}

alert("Terimakasih");

var s = "";
var pola = 5;
function faktorial(n) {
  var a = 1;
  var i = 1;
  while (i <= n) {
    a *= i;
    i++;
  }

  return a;
}

for (var i = 0; i < pola; i++) {
  for (var j = pola; j >= i; j--) {
    s += " ";
  }
  for (var j = 0; j <= i; j++) {
    s += faktorial(i) / (faktorial(j) * faktorial(i - j)) + " ";
  }
  s += "\n";
}
console.log(s);
