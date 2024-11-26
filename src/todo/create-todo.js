import { Todo } from "./class-todo";
import { currentProject } from "../project/create-project";


export function createToDo(title, date, description, priority, notes){
    const newTodo = new Todo(title, date, description, priority, notes);
    currentProject.todos.push(newTodo); // currentProject is the array with all the information about the project
    console.log('A new todo was created for', currentProject.name, '. The todo is:', newTodo);
    console.log('The updated overview of the project is', currentProject);
}
