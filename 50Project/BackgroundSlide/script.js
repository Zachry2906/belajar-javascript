const body = document.body;
const slides = document.querySelectorAll(".slide");
const left = document.getElementById("left");
const right = document.getElementById("right");

let actives = 0;


right.addEventListener('click', function(){
    actives++

    if (actives > slides.length - 1) {
        actives = 0
    }

    bgToBody()
    setSlide()
})

left.addEventListener('click', function(){
    actives--

    if (actives < 0) {
        actives = slides.length - 1
    }

    bgToBody()
    setSlide()
})

bgToBody()

function bgToBody() {
    body.style.backgroundImage = slides[actives].style.backgroundImage
}

function setSlide() {
    slides.forEach((slide) =>
        slide.classList.remove('active'))

        slides[actives].classList.add('active')
}
