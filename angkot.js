var jumaAngkot = 10;
var noAngkot = 1;

var angkotKrerja = 6;
// while (noAngkot <= angkotKrerja) {
//   console.log("Angkot No. " + noAngkot + " berjalan dengan baik");
//   noAngkot++;
// }

// for (var noAngkot = angkotKrerja + 1; noAngkot <= jumaAngkot; noAngkot++) {
//   console.log("Angkot No. " + noAngkot + " tidak beroperasi");
// }

for (var noAngkot = 1; noAngkot <= jumaAngkot; noAngkot++) {
  if (noAngkot <= 6 && noAngkot != 5) {
    console.log("Angkot No. " + noAngkot + " berjalan dengan baik");
  } else if (noAngkot > 6 && noAngkot !== 8 && noAngkot != 10) {
    console.log("Angkot No. " + noAngkot + " tidak beroperasi");
  } else if (noAngkot == 8 || noAngkot == 10 || noAngkot == 5) {
    console.log("Angkot No. " + noAngkot + " sedang lembur");
  }
}
