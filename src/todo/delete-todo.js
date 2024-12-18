export function deleteToDo(target) {
    //Retrieve the data from local storage
    let targetItem = (target.split('-')[0]);
    let projectData = JSON.parse(localStorage.getItem(targetItem));
    //Filter out the "low tasks" todo
    const todoTitleID =  target.replace('delete', 'title');
    const todoTitle = document.getElementById(todoTitleID).textContent;
    if (projectData && projectData.todos) {
        projectData.todos = projectData.todos.filter(todo => todo.title != todoTitle);
      }
    // Step 3: Save the updated object back into local storage
    localStorage.setItem(targetItem, JSON.stringify(projectData));
    const toDoSection = target.replace('-delete', '');
    document.getElementById(toDoSection).remove();

}