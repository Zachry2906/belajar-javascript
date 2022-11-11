function Angkot(supir, penumpang, kas, trayek) {
  this.supir = supir;
  this.trayek = trayek;
  this.kas = kas;
  this.penumpang = penumpang;

  this.penumpangNaik = function (namaPenumpang) {
    if (penumpang.length == 0) {
      this.penumpang.push(namaPenumpang);
      return this.penumpang;
    } else {
      for (let i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == namaPenumpang) {
          alert("udah masuk orangnya");
          return false;
        } else if (i == this.penumpang.length - 1) {
          this.penumpang.push(namaPenumpang);
          return this.penumpang;
        }
      }
    }
  };

  this.penumpangTurun = function (namaPenumpang) {
    if (this.penumpang.length === 0) {
      alert("gaada datanya");
      return false;
    }

    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        return this.penumpang;
      } else if (i == namaPenumpang - 1) {
        alert("orangnya gaada diangkot");
        return this.penumpang;
      }
    }
  };
}

const angkot1 = new Angkot("Ahmad Zakaria", [], 0, "Pakem-UGM");
const angkot2 = new Angkot("Gataw", [], 0, "Bandara-Pakem");
