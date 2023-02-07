const gambar = [
    'https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1617106400392-b53e003bfc35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 
    'https://images.unsplash.com/photo-1576506542790-51244b486a6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWJvdXQlMjB1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'
]

const li = document.querySelectorAll('.navbar')
const background = document.getElementById('hero')

li.forEach((list, idx) => {
    list.addEventListener('click', ()=> {
        hero.style.backgroundImage = `url(${gambar[idx]})`
        list.classList.add('active')
        list[idx].classList.remove('active')
    })
} )