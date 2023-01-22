const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const warna = document.getElementById('color')
const clear = document.getElementById('clear')
const hapus = document.getElementById('clear1')
const styleEl = getComputedStyle(canvas)
const decrease = document.getElementById('decrease')
const increase = document.getElementById('increase')
const ukuran = document.getElementById('size')

let size = 30
let color = 'black'
let x 
let y
let isPressed = false
ukuran.innerText = size


canvas.addEventListener('mousedown', function(e){
    isPressed = true;

    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup', function(e){
    isPressed = false;

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', function(e){
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

warna.addEventListener("input", function(){
    if (hapus.className == 'active'){
        color = styleEl.backgroundColor
    } else {
        color = warna.value
    }
})

// clear.addEventListener('click', function(){
//     console.log(drawLine());
//     console.log(drawCircle());
// })

hapus.addEventListener('click', function(){
    hapus.classList.toggle('active')
    if (hapus.className == 'active'){
        color = styleEl.backgroundColor
    } else {
        color = warna.value
    }
})

decrease.addEventListener('click', function(){
    size--
    ukuran.innerText = size
})

increase.addEventListener('click', function(){
    size++
    ukuran.innerText = size
})

function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2){
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color 
    ctx.lineWidth = size * 2
    ctx.stroke()
}