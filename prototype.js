/*
function Mahasiswa(nama, energi) {
    //dibelakang layar
    //this = Object.create(Mahasiswa.prototype)
    this.nama = nama
    this.energi = energi
    //returm this
}

Mahasiswa.prototype.makan = function(porsi) {
    this.energi += porsi
    return `energi sekarang ${this.energi}`
}

Mahasiswa.prototype.main = function(jam) {
    this.energi -= jam
    return `energi sekarang ${this.energi}`
}

let arya =  new Mahasiswa('Zaka', 10) 
*/

//VERSI KELAS

// class Mahasiswa {
//     constructor(nama, energi){
//         this.nama = nama
//         this.energi = energi
//     }

//     makan(porsi) {
//         this.energi += porsi
//         return `energi sekarang ${this.energi}`
//     }

//     main(jam) {
//         this.energi -= jam
//         return `energi sekarang ${this.energi}`
//     }
// }

// let Arya = new Mahasiswa('Zaka', 20)

// //Destructuring Assignment
// const perkenalan = ["halo", "nama", "saya"];
// const [salam, , dua] = perkenalan
// console.log("Destructuring Assignment = "+ dua);

// //Returun value function

// function coba() {
//     return [1, 2]
// }

// const [a, b] = coba()

// console.log("Return value function = " + a);

// const [x, ...values] = [1, 2, 3, 4, 5]
// console.log("Destructuring array banyak = " + values);

// //Destructuring Object with deklasrasi

// const mhs = {
//     nama: "Arya",
//     umur: 19
// }

// const {nama, umur, email='emaildefault'} = mhs
// console.log("Destructuring Object with deklasrasi = " + umur );

// //ASSIGN KE VARIABEL BARU

// const mhs1 = {d
//     nama: "Arya",
//     umur: 19
// }

// const {nama:N, umur:U} = mhs1
// let xxx = "ASSIGN KE VARIABLE BARU = "
// let y = xxx.toLowerCase()
// console.log(xxx + U)

//Spread Operator
// const nama = document.getElementById("nama");
// const huruf = [...nama.textContent].map((h) => `<span> ${h} </span>`).join(" ");
// //... merubah nidelist menjadi array
// nama.innerHTML = huruf;

// //Rest operator
// function filter1(type, ...values) {
//   return values.filter((v) => typeof v === type);
// }
// //untuk merubah argumen menjadi array
// console.log(filter1("string", 1, 2, true, 10, "makanan", "ringan", false));


// console.log(1);
// setTimeout(() => {
//     console.log(2); 
// }, 0)
// console.log(3);