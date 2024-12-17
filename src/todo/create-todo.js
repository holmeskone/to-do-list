import { Todo } from "./class-todo";
import { Project } from "../project/class-project";
import { displayTodo } from "./view-todo";
import { selectProject, selectProjectName } from "../project/select-project";
import { allProjects } from "../project/create-project";



export function createToDo(title, date, description, priority, notes, project,status){
    console.log(selectProjectName)
    const newTodo = new Todo(title, date, description, priority, notes, project,status); // It creates a new instance of the class To Do
    console.log(newTodo)
    const projectData = localStorage.getItem(selectProjectName)
    let projectObj = projectData ? JSON.parse(projectData) : { name: selectProjectName, todos: [] };
    projectObj.todos.push(newTodo);
    localStorage.setItem(selectProjectName, JSON.stringify(projectObj));
    console.log("Todo added successfully!", projectObj);
    displayTodo(projectObj);
    // const addedProject = JSON.parse(getProject)
    // console.log(addedProject)
    // getProject.concat(addedProject); // currentProject is the class of Object Project, here we get it's property to do's and push our recently made todo instance into it the project. 
    // const localStoredProject = localStorage.getItem(selectProjectName)
    // // localStorage.getItem(selectProjectName , JSON.stringify(allProjects.get(`${selectProjectName}`)))
    // console.log(`This is localStoredProject`,localStoredProject)
    // const storedProject =  JSON.parse(localStoredProject);
    // storedProject.todos.push(newTodo);
    // const updatedStoredProject =  JSON.stringify(storedProject);
    // localStorage.setItem(`${selectProjectName}`,updatedStoredProject);
    // console.log(addedProject)
}


//Curent project has to be the SELECTED project not the most recent.