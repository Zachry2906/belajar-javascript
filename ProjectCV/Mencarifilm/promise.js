//promise
// Objek yang merepresentasikan keberhasilan atau kegaglan yang asaync pada masa yang alan datang
// janji bisa terpenuhi (fullfill) atau ingkar (rejected)
// states (keadaan) -> pending waktu tunggu saat janjinya terpenuhi
//callback resolve = retpenuhi, reject = tidak terpenuhi, finally = waktu tunggu selesai
//aksi .then = terpenuhi, .catch !=terpenuhi


//conoth 1
let ditepati = true
const janji1 = new Promise((resolve, reject) => {
    if (ditepati) {
        resolve('heheh')
    } else {
        reject ('huhuhu')
    }
})

janji1
//akan keluar sebelum resolve atau reject
    .finally(() => console.log('Selesai menunggu'))
    .then(response => console.log('OK ' + response))
    .catch(response => console.log('NOT OK ' + response))

    console.log(janji1.then(() => console.log('Janji 1 yang ke 2')))


    //contoh2
    let ditepati1 = true
    const janji2 = new Promise((resolve, reject) => {
        if (ditepati1) {
            setTimeout(() => {
                resolve('Ditepati')
            }, 2000);
        } else {
            setTimeout(() => {
                reject('tidak ditepati')
            }, 2000);
        }
    })


    console.log('mulai');
    console.log(janji2.then(() => console.log(janji2)));
    console.log('akhir');