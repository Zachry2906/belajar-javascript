ulang = true;

while (ulang) {
  var p = prompt("pilih : gajah, semut, atau orang");

  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  var hasil = "";

  if (p == comp) {
    hasil = "SERI";
  } else if (p == "gajah") {
    if (comp == "orang") {
      hasil = "MENANG";
    } else {
      hasil = "KALAH";
    }
  } else if (p == "orang") {
    if (comp == "semut") {
      hasil = "MENANG";
    } else {
      hasil = "KALAH";
    }
  } else if (p == "semut") {
    if (comp == "gajah") {
      hasil = "MENANG";
    } else {
      hasil = "KALAH";
    }
  } else {
    alert(" Masukkan nilai yang valid");
  }

  alert("kamu memilih : " + p + " dan" + " computer memilih " + comp + " dan hasilnya adalah " + hasil);

  confirm("apakah anda ingin bermain lagi?");
}
