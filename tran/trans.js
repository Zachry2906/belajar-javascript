const closes = document.querySelectorAll('.close');
const cards = document.querySelectorAll('.card');
const click = document.querySelectorAll('.btn');

closes.forEach(function (close){
    // ek.addEventListener('click', function (y) {
    //     y.target.parentElement.style.display = 'none';
    // });
    close.addEventListener('click', function() {
        close.parentElement.classList.add("active");
    })
});

click.forEach(function (btn, close){
    btn.addEventListener('click', function() {
        btn.nextElementSibling.classList.remove("active");
    })
});