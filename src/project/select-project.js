import { allProjects } from "./create-project";

let selectProjectName = null; 
export function selectProject(event, projectName) {
    // Declare all variables
    var i, project, todos;
  
    // Get all elements with class="todo" and hide them, then show the specific todos of a selected project
    todos = document.querySelectorAll(".todo");
    for (i = 0; i < todos.length; i++) {
      todos[i].style.display = "none";
    }

    //Fix that this none is only applied to the div of the todo's and not the whole todo-block
  
    // Get all elements with class="project" and remove the class "selected"
    project = document.getElementsByClassName("project");
    for (i = 0; i < project.length; i++) {
        project[i].className = project[i].className.replace(" selected", "");
    }
  

    todos.forEach(todo => {
      if (todo.hasAttribute('data-project') && todo.getAttribute('data-project') === event.innerHTML) {
          todo.style.display = 'block';
      }
  });

    event.parentElement.className += " selected";
    selectProjectName = event.innerHTML;
    // console.log('Selected Project: ', selectProjectName);
    // console.log('Selected Project: ', allProjects.get(event.innerHTML));
  }

  export {selectProjectName} ;