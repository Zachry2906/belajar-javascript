const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.rating-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', function(e){
    if(e.target.parentNode.classList.contains('rating')){
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.innerHTML
    }
})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = ` 
    <i class="fas fa-heart"></i>
    <strong> Thank You </strong>
    <br>
    <strong> Feedback: ${selectedRating} </strong>
    <p>We'll use your feedback to improve our <br> customer support</p>
    `
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++){
        ratings[i].classList.remove('active')
    }
}