const videos =  Array.from(document.querySelectorAll('[data-duration]'))

let js = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

.map(item => item.dataset.duration)

.map(waktu => {
    const parts = waktu.split(':').map(parseFloat(waktu))
    return (parts[0] * 60) + parts[1]
})

.reduce((total, detik) => total + detik)

const jam = Math.floor(js / 3600)
const menit = (js % 3660) / 60
const detik = (js % 3660) % 60

const pDurasi = document.querySelector('.total-durasi')
const pVideo = document.querySelector('.jumlah-video')
const jml = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length

pDurasi.textContent = `${jam} Jam ${menit} menit ${detik} detik`
pVideo.innerText = jml

const X = "sunah:rasul:baik"
console.log(X.split(':'));