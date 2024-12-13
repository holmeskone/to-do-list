import { Todo } from "./class-todo";
import { Project } from "../project/class-project";
import { displayTodo } from "./view-todo";
import { selectProjectName } from "../project/select-project";
import { allProjects } from "../project/create-project";



export function createToDo(title, date, description, priority, notes, project,status){
    console.log(selectProjectName)
    const newTodo = new Todo(title, date, description, priority, notes, project,status); // It creates a new instance of the class To Do
    const projectName = allProjects.get(selectProjectName);
    console.log(projectName);
    projectName.addTodo(newTodo); // currentProject is the class of Object Project, here we get it's property to do's and push our recently made todo instance into it the project. 

    const localStoredProject = localStorage.getItem(selectProjectName)
    console.log(`This is localStoredProject`,localStoredProject)
    const storedProject =  JSON.parse(localStoredProject);
    storedProject.todos.push(newTodo);
    const updatedStoredProject =  JSON.stringify(storedProject);
    localStorage.setItem(`${selectProjectName}`,updatedStoredProject);
    console.log(JSON.parse(localStorage.getItem(`${selectProjectName}`)));
    // console.log(allProjects.get("Default Project"))
    // localStorage.setItem('Default Project' , JSON.stringify(allProjects.get(`${projectName}`)))
    // console.log(localStorage.getItem(`${projectName}`));
    displayTodo(projectName);
}


//Curent project has to be the SELECTED project not the most recent.