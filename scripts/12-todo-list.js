const todoList = [{
    name: 'make dinner', 
    dueDate:'2022-12-22'
  }, {
    name: 'wash dishes',
    dueDate:'2022-12-22'
  }];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject,) => {
    const{name, dueDate} = todoObject;  //shortcut for called destructing
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div> 
      <button class="delete-todo-btn js-delete-todo-btn" 
      ">Delete</button>
 `;
    todoListHTML += html;
  })


  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-btn').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
        renderTodoList();
    });
  });
}

document.querySelector('.js-add-todo-btn').addEventListener('click', () => {
  addTodo();
});


function addTodo() {
 const inputElement = document.querySelector('.js-name-input');
 const name = inputElement.value;

 const dateInputElement = document.querySelector('.js-do-date-input');
const dueDate = dateInputElement.value
 
 todoList.push({
  // name: name,   
  // dueDate: dueDate,
  name,   //both do the same thing for the two up
  dueDate
});


 inputElement.value = '';
 renderTodoList();
}