const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCount = function() {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText
        //+ Digunakan agar string counter '0' berubah menjadi integer shg bisa dioprasikan

        const increment = target / 400

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCount, 1)
        } else {
            counter.innerText = target
        }
    }
    updateCount()
})