// import { Todo } from "./class-todo";

export function displayTodo(todo){
    const displayBlock = document.getElementById('todo-block');
    const todoListProject = document.createElement('div');
    const todoTitle = document.createElement('p');
    const todoDate = document.createElement('p');
    const todoDescription = document.createElement('p');
    const todoPriority = document.createElement('p');
    const todoNotes = document.createElement('p');
    todoTitle.textContent = todo.title;
    todoDate.textContent = `Due date: ${todo.date}`;
    todoDescription.textContent = todo.description;
    todoPriority.textContent = todo.priority;
    todoNotes.textContent = todo.notes;
    todoListProject.append(todoTitle, todoDate, todoDescription, todoPriority, todoNotes);
    displayBlock.append(todoListProject);

}

