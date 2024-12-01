export function displayTodo(todo){
    const displayBlock = document.getElementById('todo-block');
    displayBlock.className = 'todo-block';
    const todoListProject = document.createElement('div');
    todoListProject.className = 'todo';
    todoListProject.setAttribute('data-project',todo.name);
    const todoTitle = document.createElement('p');
    const todoDate = document.createElement('p');
    const todoDescription = document.createElement('p');
    const todoPriority = document.createElement('p');
    const todoNotes = document.createElement('p');
    todoTitle.textContent = todo.todos[[todo.todos.length]-1].title;
    todoDate.textContent = `Due date: ${todo.todos[[todo.todos.length]-1].date}`;
    todoDescription.textContent = todo.todos[[todo.todos.length]-1].description;
    todoPriority.textContent = todo.todos[[todo.todos.length]-1].priority;
    todoNotes.textContent = todo.todos[[todo.todos.length]-1].notes;
    todoListProject.append(todoTitle, todoDate, todoDescription, todoPriority, todoNotes);
    displayBlock.append(todoListProject);
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

    // // Get all elements with class="tab-button" and remove the class "active"
    // tabButton = document.getElementsByClassName("todo-button");
    // for (i = 0; i < tabButton.length; i++) {
    //     tabButton[i].className = tabButton[i].className.replace(" active", "");
    // }
    

    // if (section = createTodoSectionButton.id){
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(displaySectionID).style.display = "block";
    displaySection.className += " active";

}
