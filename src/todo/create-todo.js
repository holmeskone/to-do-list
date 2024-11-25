import { Todo } from "./class-todo";

export function createToDo(titleToDo,descriptionToDo){
    console.log('This is a new To Do')
    const newTodo =  new Todo(titleToDo,descriptionToDo);
}