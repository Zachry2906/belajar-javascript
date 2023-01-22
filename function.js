// FUNCTION 1 : NORMAL

// function nilaiFaktorial(a, b) {
//   var a, b;
//   var nilai;

//   nilai = a * b;

//   return nilai;
// }

// var ulang = true;

// while (ulang) {
//   var a = Number(prompt("Masukkan Nilai A :"));
//   var b = Number(prompt("Masukkan Nilai B :"));

//   var hasil = nilaiFaktorial(a, b);

//   alert("Hasilnya adalah " + hasil);

//   ulang = confirm("Apakah anda ingin menconba lagi ?");
// }
// alert("terimakasih sudah bermain");

// FUNCTION 2 : REKURSIF

function cetakAngka(n) {
  if (n === 0) {
    return;
  } else {
    console.log(n);
    return cetakAngka(n - 1);
  }
}

cetakAngka(Number(prompt("Masukkan nilai n :")));

//function 3 : Rekursif loopiping DEKLARASI

function faktorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * faktorial(n - 1);
  }
}

// alert("hasilnya adalah " + faktorial(Number(prompt("Masukkan nilai n :"))));

// FUNCTION 3.1 : REKRUSIF LOOP EXPRESIONAL

var faktorial = function (n) {
  if (n === 0) {
    return 1;
  } else {
    return n * faktorial(n - 1);
  }
};

alert("hasilnya adalah " + faktorial(Number(prompt("Masukkan nilai n :"))));

//FUNCSION 4 : EXXPRESION LOOP ARRAY
var tambah = function () {
  var hasil = 0;
  for (i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
};

var coba;
console.log((coba = tambah(1, 2, 5)));
