const tagel = document.getElementById('tags')
const txtarea = document.getElementById('textarea')

txtarea.focus()

txtarea.addEventListener('keyup', function (e) {
    createTags(e.target.value)

    if(e.key === 'Enter'){
        setTimeout(()=> {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

function createTags(x) {
    const tags = x.split(',').filter(tag => tag.trim()
    !=='').map(tag=> tag.trim())
    //trim hapus white space
    //split untuk misah jadi substring
    //map() method creates a new array from the results of calling a function for every element.
    //filter Get every element in the array that has a value of xx or more
    tagel.innerHTML = ''

    tags.forEach(tag => {
        const tagell = document.createElement('span')
        tagell.classList.add('tag')
        tagell.innerText = tag
        tagel.appendChild(tagell)
    });
}

function randomSelect(){
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlight(randomTag)

        setTimeout(() => {
            unhigh(randomTag)
        }, 100)
    }, 100)

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(()=>{
            const randomTag = pickRandomTag()
            highlight(randomTag)
        }, 100)
    }, times * 100)

}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags [Math.floor(Math.random() * tags.length)]
}

function highlight(tag){
    tag.classList.add('highlight')
}

function unhigh(tag){
    tag.classList.remove('highlight')
}