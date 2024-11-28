export function selectProject(event, projectName) {
    // Declare all variables
    var i, project, todo;
  
    // Get all elements with class="todo" and hide them
    todo = document.getElementsByClassName("todo");
    for (i = 0; i < todo.length; i++) {
      todo[i].style.display = "none";
    }

    //Fix that this none is only applied to the div of the todo's and not the whole todo-block
  
    // Get all elements with class="project" and remove the class "selected"
    project = document.getElementsByClassName("project");
    for (i = 0; i < project.length; i++) {
        project[i].className = project[i].className.replace(" selected", "");
    }
  
    // Show the selected project and to do list, and add an "active" class to the button that opened the tab
    document.getElementById(projectName).style.display = "block";
    event.parentElement.className += " selected";
  }


  //Need to add selected and remove selected to the others. 