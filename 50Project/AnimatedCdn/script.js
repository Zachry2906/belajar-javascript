const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalm = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

function resetDom(){
    counter.classList.remove('hide')
    finalm.classList.remove('show')

    nums.forEach((num) => {
        num.classList.value = ''
    })

    nums[0].classList.add('in')
}

function runAnimation(){
    nums.forEach((num, idx) => {
        const nextToLast = nums.length - 1

        num.addEventListener('animationend', (e) => {
            if(e.animationName === 'goIn' && idx!== nextToLast) {
                num.classList.remove('in')
                num.classList.add('out')
            } else if ( e.animationName === 'goOut' && num.nextElementSibling){
                num.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')
                finalm.classList.add('show')
            }
        })
    })
}

replay.addEventListener('click', ()=> {
    resetDom()
    runAnimation()
})