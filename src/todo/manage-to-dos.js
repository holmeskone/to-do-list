import { createToDo } from "./create-todo";

export function managetodo(){
    const addToDo = document.getElementById('create-todo');
    // const titleToDo = document.getElementById('title');
    // const descriptionToDo = document.getElementById('description');
    if (addToDo){
        addToDo.addEventListener('click', createToDo('titleToDo','test'));
    }
}