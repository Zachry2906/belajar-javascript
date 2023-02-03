const gambars = document.querySelectorAll('.image')
const X = document.getElementById('X')
const page = document.getElementById('page')
const container = document.getElementById('container')
let no = 0

gambars.forEach((gambar) => {
    gambar.addEventListener('click', () => {
        no++
        gambar.style.backgroundImage = `url('https://source.unsplash.com/random/${no}')`
        X.innerText = no
    })
})
