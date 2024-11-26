import { Todo } from "./class-todo";

export function createToDo(title, date, description, priority, notes){
    const newToDo = new Todo(title, date, description, priority, notes);
    console.log('New project created:', newToDo);
}