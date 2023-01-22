const toggle = document.querySelectorAll('.faq-toggle')

toggle.forEach(toggle=> {
    toggle.addEventListener('click', function (){
        toggle.parentNode.classList.toggle('active')
    })
})