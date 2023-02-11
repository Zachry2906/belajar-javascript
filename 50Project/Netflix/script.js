const open = document.querySelector('.open-btn')
const close = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

open.addEventListener('click', () => {
    nav.forEach(navel => navel.classList.add('visible'))
} )

close.addEventListener('click', () => {
    nav.forEach(navel => navel.classList.remove('visible'))
})