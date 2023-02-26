const appElement = document.getElementById('app')

// Начальное состояние
let formElement = null
let todoContainerElement = null
let todos = [
  {
    id: Date.now(),
    text: 'Хех. ептъ'
  }
]

function getAddTodoFormElement(text) {
  const form = document.createElement('form')
  // у интпута name и value - обязательные атрибуты, без которых нельзя будет получить данные с формы
  form.innerHTML = `
    <input type="text" name="todo-text" placeholder="текст епта" value="">
    <button type="submit">добавить</button>
  `
  // По деволту при событии submit браузер обновляет страницу - убираем это поведение
  form.addEventListener('submit', (event) => event.preventDefault())

  const button = form.querySelector('button')
  button.addEventListener('click', addTodo)

  return form
}

function getTodoContainerElement() {
  const todoContainerElement = document.createElement('div')
  todoContainerElement.className = 'todo-container'

  return todoContainerElement
}

function getTodoElement(todo) {
  const todoElement = document.createElement('div')
  todoElement.setAttribute('id', todo.id)
  todoElement.className = 'todo-item'
  todoElement.innerHTML = `
    <span class="todo-text">${todo.text}</span>
  `

  return todoElement
}

function renderTodos(todoContainer) {
  todoContainer.innerHTML = ''
  todos.map((todo) => {
    const todoElement = getTodoElement(todo)
    todoContainer.appendChild(todoElement)
  })
}

function renderApplication() {
  formElement = getAddTodoFormElement()
  todoContainerElement = getTodoContainerElement()
  appElement.insertAdjacentElement('beforeend', formElement)
  appElement.insertAdjacentElement('beforeend', todoContainerElement)

  renderTodos(todoContainerElement)
}

function addTodo() {
  const formData = new FormData(formElement)
  const text = formData.get('todo-text')

  if (text.length === 0) {
    throw new Error('Заполни одно ебаное поле пжлста, несложная ведь задача..')
  }

  todos.push({
    id: Date.now(),
    text // то же самое что text: text
  })
  renderTodos(todoContainerElement)

  // чистим форму после отправки и сетим фокус обратно
  const inputElement = formElement.querySelector('input[name="todo-text"]')
  inputElement.value = ''
  inputElement.focus()
}

function removeTodo(id) {
  // TODO: сделать самому
}

function editTodo(id) {
  // TODO: сделать самому
}

// Точка старта приложения
renderApplication()
