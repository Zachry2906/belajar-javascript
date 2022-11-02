var nilai = true;

while (nilai) {
  alert(" Tebak angka 1 - 10!\n Kamu punya 3x kesempatan ");
  angkaTebak = prompt(" Masukkan angka ");

  var algo = Math.floor(Math.random() * 11);

  if (angkaTebak < algo) {
    hasil = "Tebakan terlalu rendah";
  } else if (angkaTebak > algo) {
    hasil = "Tebakan terlalu tinggi";
  } else {
    hasil = "Tebakan Benar";
  }
  alert(hasil);
  if (hasil === "Tebakan terlalu rendah" || hasil == "Tebakan terlalu tinggi") {
    angkaTebak = prompt(" Coba lagi : \n Kesempatan sisa 2 ");
    if (angkaTebak < algo) {
      hasil = "Tebakan terlalu rendah";
    } else if (angkaTebak > algo) {
      hasil = "Tebakan terlalu tinggi";
    } else {
      hasil = "Tebakan Benar";
    }

    alert(hasil);
    if (hasil === "Tebakan terlalu rendah" || hasil == "Tebakan terlalu tinggi") {
      angkaTebak = prompt(" Coba lagi : \n Kesempatan sisa 1 ");
      if (angkaTebak < algo) {
        hasil = "Tebakan terlalu rendah";
      } else if (angkaTebak > algo) {
        hasil = "Tebakan terlalu tinggi";
      } else {
        hasil = "Tebakan Benar";
      }
      alert(hasil);
      if (hasil === "Tebakan terlalu rendah" || hasil == "Tebakan terlalu tinggi") {
        alert(" sisa coba hasbis");
      }
    }
  }

  nilai = confirm(" Apakah anda ingin bermain lagi?");
}

alert("Terimakasih sudah bermain");
