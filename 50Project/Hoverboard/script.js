const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const X = 2200

for(let i = 0; i < X; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    const speed = 0.1
    square.style.transition = `all ${speed}s`
    square.addEventListener('mouseover', function(){
        setColor(square)})

    square.addEventListener('mouseout', function(){
        removeColor(square)
    })

    container.appendChild(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 10px ${color}, 0 0 15px ${color}`
}

function removeColor(element){
    element.style.background = '#1d1d1c'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}