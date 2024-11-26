import { createToDo } from "./create-todo";

export function managetodo(){
    const addToDo = document.getElementById('create-todo');
    const titleToDo = document.getElementById('title').value;
    const dateToDo = document.getElementById('date').value;
    const descriptionToDo = document.getElementById('description').value;
    const priorityToDo = document.getElementById('priorities').value;
    const notesToDo = document.getElementById('notes').value;
    if (addToDo){
        addToDo.addEventListener('click', createToDo(titleToDo,dateToDo,descriptionToDo,priorityToDo,notesToDo));
    }
}