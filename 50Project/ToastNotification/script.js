const button = document.getElementById('btn')
const toasts = document.getElementById('toasts')

const messages = ['1', '2', '3']



button.addEventListener('click', function(){
    createNotif('Invalid data')
})

function createNotif(message = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')

    notif.innerText = message ? message : getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()}, 3000)
    }

function getRandomMessage() {
    return messages [Math.floor(Math.random() * messages.length)]
}