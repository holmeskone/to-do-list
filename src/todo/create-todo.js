import { Todo } from "./class-todo";
import { currentProject } from "../project/create-project";
import { displayTodo } from "./view-todo";


export function createToDo(title, date, description, priority, notes, project){
    const newTodo = new Todo(title, date, description, priority, notes, project); // It creates a new instance of the class To Do
    currentProject.todos.push(newTodo); // currentProject is the class of Object Project, here we get it's property to do's and push our recently made todo instance into it the project. 
    console.log('A new todo was created for', currentProject.name, '. The todo is:', newTodo);
    console.log('The updated overview of the project is', currentProject);
    displayTodo(newTodo);
}


//Curent project has to be the SELECTED project not the most recent.