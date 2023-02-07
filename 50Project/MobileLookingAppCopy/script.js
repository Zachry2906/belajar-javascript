const img = document.querySelectorAll('.content')
const listItem =  document.querySelectorAll('nav ul li')

listItem.forEach((item, idz) => {
    item.addEventListener('click', () => {
        hideContent()
        hideItem()

        item.classList.add('active')
        img[idz].classList.add('show')
    })
})

function hideContent(){
    img.forEach(content => content.classList.remove('show'))
}

function hideItem(){
    listItem.forEach(item => item.classList.remove('active'))
}
