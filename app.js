const input = document.getElementById('input');
const form = document.getElementById('form');
const todos = document.getElementById('todos');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodo();
})



const addTodo = () => {
    const todoText = input.value;

    if (todoText) {
        const todoEl = document.createElement('li');
        todoEl.innerText = todoText;

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            storeTodos();
        })
        todoEl.addEventListener('contextmenu', () => {
            todoEl.remove();
            storeTodos();
        })
        todos.appendChild(todoEl);

        
        input.value = '';

        storeTodos();
    }
}

const storeTodos = () => {
    
    const todoEl = document.querySelectorAll('li');

    const todos = [];

    todoEl.forEach((todoEl) => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed'),
        });
    })

    localStorage.setItem('todos', JSON.stringify(todos));
}