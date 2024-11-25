import { createProject } from "./project-creation";
import { deleteProject } from "./delete-project";

export function delegateProjectCreation(){
    const createProjectButton = document.getElementById('create-project-button');
    const deleteProjectButton = document.getElementById('delete');
    if(createProjectButton){
        createProjectButton.addEventListener('click', createProject);
    }
    if (deleteProjectButton){
        deleteProjectButton.addEventListener('click', deleteProject);
    }
}
