import { selectProjectName } from "../project/select-project"; // importing the inner text of the selected project to then only display todos of that specific project

export function displayTodo(todo){
    console.log(todo)
    for (let i=0; i<todo.todos.length; i++){
    console.log(todo.todos[i].title);
    const displayBlock = document.getElementById('priority-divider');
    const lowPriorityBlock = document.getElementById('low-priority');
    const mediumPriorityBlock = document.getElementById('medium-priority');
    const highPriorityBlock = document.getElementById('high-priority');
    displayBlock.className = 'todo-block';
    const todoListProject = document.createElement('div');
    todoListProject.className = 'todo';
    // if it's projected has selected then thhis style is block else todoListProject.style.display = 'none';
    todoListProject.id = `${todo.name}-${i}`
    todoListProject.setAttribute('data-project',todo.name);
    const todoTitle = document.createElement('p');
    todoTitle.className = 'todo-item-title';
    todoTitle.id = `${todo.name}-${i}-title`
    const todoCompleted = document.createElement('input');
    todoCompleted.type = 'checkbox';
    todoCompleted.id = `${todo.name}-${i}-checkbox`;
    const todoHeader = document.createElement('div')
    todoHeader.className = 'todo-item-header';
    todoHeader.append(todoTitle,todoCompleted)
    const todoDate = document.createElement('p');
    todoDate.className = 'todo-item-date';
    const todoDescription = document.createElement('p');
    todoDescription.className = 'todo-item-description';
    const todoPriority = document.createElement('p');
    todoPriority.className =  'todo-item-priority'
    const todoNotesSection = document.createElement('div');
    todoNotesSection.className = 'todo-section-notes'
    const todoNotesComment = document.createElement('p');
    todoNotesComment.className = 'todo-notes-title'
    const todoNotes = document.createElement('div');
    todoNotesComment.textContent = 'Notes:'
    todoNotesSection.append(todoNotesComment,todoNotes);
    todoNotes.className = 'todo-item-notes';
    todoTitle.textContent = todo.todos[i].title;
    todoDate.textContent = `Due date: ${todo.todos[i].date}`;
    todoDescription.textContent = todo.todos[i].description;
    todoPriority.textContent = todo.todos[i].priority;
    todoNotes.textContent = todo.todos[i].notes;
    const deleteTodo = document.createElement('button');
    deleteTodo.textContent = 'Delete';
    deleteTodo.className = 'todo-item-delete';
    deleteTodo.id = `${todo.name}-${i}-delete`;
    todoListProject.append(todoHeader, todoDate, todoDescription, todoNotesSection,deleteTodo);
    let priorityBlock;
        if (todoPriority.textContent === 'high'){
            priorityBlock = highPriorityBlock.append(todoListProject);
        }
        else if (todoPriority.textContent === 'medium'){
            priorityBlock =  mediumPriorityBlock.append(todoListProject);
        }
        else if (todoPriority.textContent === 'low'){
            priorityBlock = lowPriorityBlock.append(todoListProject);
        }
    }
}



export function displayTab(section) {
    // Declare all variables
    let i, tabContent, tabButton; 

    const displaySectionID = section.replace('-button','');
    const displaySection = document.getElementById(displaySectionID);

    // Get all elements with class="tab-content" and hide them
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
        tabContent[i].className = tabContent[i].className.replace(" active", "");
    }

  tabButton = document.getElementsByClassName("todo-button");
  for (i = 0; i < tabContent.length; i++) {
    tabButton[i].style.backgroundColor = "#1B4965";
    tabButton[i].style.color = "#fff";
    tabButton[i].className = tabButton[i].className.replace(" active", "");
    }

    // if (section = createTodoSectionButton.id){
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(displaySectionID).style.display = "block";
    displaySection.className += " active";

    //Have display show highlighted button when corresponding todo section is displayed
    document.getElementById(section).style.backgroundColor = 'White';
    document.getElementById(section).style.border = '1px solid #1B4965';
    document.getElementById(section).style.color = '#1B4965';
    document.getElementById(section).className += " active";

    //for the project selected call displaytoDo
    // Get all elements with class="todo" and hide them, then show the specific todos of a selected project
    // const elements = document.querySelectorAll('[class*=" selected"]');
    // console.log(elements);
    let todos = document.querySelectorAll(".todo");
    let selectedProject = document.getElementsByClassName(' selected');
    let selectedProjectTitle = selectedProject[0].firstChild.textContent;
    todos.forEach(todo => {
        console.log(todo);
        if (todo.hasAttribute('data-project') && todo.getAttribute('data-project') != selectedProjectTitle) {
          todo.style.display = "none";
          }
        else if (todo.hasAttribute('data-project') && todo.getAttribute('data-project') === selectedProjectTitle) {
          todo.style.display = "block";
          }
        });


}

export function defaultToDoDisplay(){
    for (let i = 0; i < localStorage.length; i++) {
        // Get the key at the current index
        const key = localStorage.key(i);
        // Retrieve the value associated with the key
        const dataString = localStorage.getItem(key);
        
        // Parse the JSON string into a JavaScript object
        const data = JSON.parse(dataString);
        console.log(`data is:`, data)
        // // Log the key and its data to the console
        // console.log(`Key: ${key}, Data:`, data);
        displayTodo(data);
        // console.log(`todo length`, data.todos.length)
    }
}
