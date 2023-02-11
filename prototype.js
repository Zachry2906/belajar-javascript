
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

class Mahasiswa {
    constructor(nama, energi){
        this.nama = nama
        this.energi = energi
    }

    makan(porsi) {
        this.energi += porsi
        return `energi sekarang ${this.energi}`
    }
    
    main(jam) {
        this.energi -= jam
        return `energi sekarang ${this.energi}`
    }
}

let Arya = new Mahasiswa('Zaka', 20)