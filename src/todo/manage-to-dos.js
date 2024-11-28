import { createToDo } from "./create-todo";
import { currentProject } from "../project/create-project";

let project = 'blue';

export function managetodo(){
    const addToDo = document.getElementById('create-todo-button');
    const titleToDo = document.getElementById('title').value;
    const dateToDo = document.getElementById('date').value;
    const descriptionToDo = document.getElementById('description').value;
    const priorityToDo = document.getElementById('priorities').value;
    const notesToDo = document.getElementById('notes').value;
    const projectToDo = project;
    if (addToDo){ //If "Add To Do" button is clicked then we call the createToDo function
        addToDo.addEventListener('click', createToDo(titleToDo,dateToDo,descriptionToDo,priorityToDo,notesToDo,projectToDo ));
    }
}

// project should be the SELECTED project.