const times = document.getElementById('time')
const greeting = document.getElementById('greeting')
const par = document.querySelectorAll('.p')


function showTime() {
let time = new Date()
let second = time.getSeconds()
let minute = time.getMinutes()
let hours = time.getHours()
const amPm = hours >= 12 ? 'PM' : 'AM'

times.innerText = `${hours}:${addZero(minute)}:${addZero(second)} ${amPm} `

setTimeout(showTime, 1000)
}

function addZero(n){
    return ( parseInt(n, 10) < 10 ? '0' : '') + n
}

function greetings(){
    let time = new Date(),
        hours = time.getHours()

if (hours > 0 && hours <= 10) {
    greeting.innerText = 'Good Morning,'
    document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1465488867967-ffb57e7f0a89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')`
} else if ( hours > 10 && hours <= 14 ){
    greeting.innerText = 'Good Afternoon,'
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1622653533660-a1538fe8424c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
} else if ( hours > 14 && hours < 19 ){
    greeting.innerText = 'Good Evening,'
    document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1534271057238-c2c170a76672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')`
} else if ( hours >= 19 && hours <= 23 ){
    greeting.innerText = 'Good Night,'
    document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1506404523803-9f9fa45e066e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=800')`
    document.body.style.color = 'white'

    par.forEach((p) => {
        p.style.color = 'white'
    })
}
}

showTime()
greetings()
