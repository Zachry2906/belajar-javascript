let panjang = document.getElementById('password').value.length
const password = document.getElementById('password')
const background = document.getElementById('background')

password.addEventListener('input' , (e)=> {
    const input = e.target.value
    const length = input.length
    const blurr = 20 - length * 2
    background.style.filter = `blur(${blurr}px)`
})

const email =  document.getElementById('email')

email.addEventListener('input', (e)=> {
    const input = e.target.value
    const length = input.length
    background.style.filter = `contrast(${length * 10}%)`
})