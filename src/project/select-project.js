import { allProjects } from "./create-project";

let selectProjectName = null; 
export function selectProject(event, projectName) {
  // Declare all variables
  let i, project;
  // Get all elements with class="project" and remove the class "selected"
  project = document.getElementsByClassName("project");
  for (i = 0; i < project.length; i++) {
      project[i].className = project[i].className.replace(" selected", "");
  }
  
  let todos = document.querySelectorAll(".todo");
  //Get all todos and iterate through them, if the todo has an attribute called data-project that is the same as the selected project then display the todo, if not hide
  todos.forEach(todo => {
    console.log(todo);
    if (todo.hasAttribute('data-project') && todo.getAttribute('data-project') != event.innerHTML) {
      todo.style.display = "none";
      }
    else if (todo.hasAttribute('data-project') && todo.getAttribute('data-project') === event.innerHTML) {
      todo.style.display = "block";
      }
    });

  event.parentElement.className += " selected";
  selectProjectName = event.innerHTML;
}

  export {selectProjectName} ;