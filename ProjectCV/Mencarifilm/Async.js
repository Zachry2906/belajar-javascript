// Js, single-thread, non-blocking, asynchrouns, concurent
// Singgle-thread = harus menyelesaikan satu tugas sebelum ke tugas yang lain, task 1 -> 2
//Non-blocking = saat tugas 1 belum slesai boleh ke 2 terlebih dahulu
//async tugas 1 belum selesai bisa pindah ke yang lain dulu
//conccurent songgle+async

//callback -> fungsi dengan parameter fungsi
//event loop menumpuk terjadi saaat calback queue penuh dengan fungsi yang akan berjalan

//Aync Callbacks

function getData(url, success, error){
    //nuat objek ajax
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        //ketika state sudah siap lakukan
        if (xhr.readyState === 4){
            if(xhr.status === 200){
                success(xhr.response)
            } else if (xhr.readyState === 400){
                error();
            }
        }
    }

//panggil ajax
xhr.open('get', url)
xhr.send();
}

//panggil function
getData('data.json', (result) => {
    const dataa = JSON.parse(result)
    dataa.forEach(m => console.log(m.kelas))
}, ()=> {
    log
})

console.log('selesai');
//olahraga, minum air puth
//stress, mandi setelah beraktivitas, berhenti memencet, gula dan kalori dibatasi