import { Todo } from "./class-todo";
import { Project } from "../project/class-project";
import { displayTodo } from "./view-todo";
import { selectProjectName } from "../project/select-project";
import { allProjects } from "../project/create-project";



export function createToDo(title, date, description, priority, notes, project){
    console.log(selectProjectName)
    const newTodo = new Todo(title, date, description, priority, notes, project); // It creates a new instance of the class To Do
    const projectName = allProjects.get(selectProjectName);
    console.log(projectName);
    projectName.addTodo(newTodo); // currentProject is the class of Object Project, here we get it's property to do's and push our recently made todo instance into it the project. 
    // console.log('A new todo was created for', Project.name, '. The todo is:', project.getDetails());
    displayTodo(projectName);
}


//Curent project has to be the SELECTED project not the most recent.