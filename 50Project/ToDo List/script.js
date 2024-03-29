const form = document.getElementById('form')
const input = document.getElementById('input')
const todoUL = document.getElementById('todos')

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value

    if(todo){
        todoText = todo.text
    }

    if(todoText) {
        const todoEl = document.createElement('li')
        if(todo && todo.completed){
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText

        todoEl.addEventListener('click', function(){
            todoEl.classList.toggle('completed')
        })

        todoEl.addEventListener('contextmenu', function(e){
            e.preventDefault()
            todoEl.remove()
        })

        todoUL.appendChild(todoEl)

        input.value = ''
    }
}