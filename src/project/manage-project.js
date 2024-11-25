import { createProject } from "./create-project";
import { deleteProject } from "./delete-project";

export function delegateProjectOperations(){
    const createProjectButton = document.getElementById('create-project-button');
    const deleteProjectButton = document.getElementById('delete');
    if(createProjectButton){
        createProjectButton.addEventListener('click', createProject);
    }
    if (deleteProjectButton){
        const parentID = deleteProjectButton.parentElement // find the parentElement of the clicked delete button
        deleteProjectButton.addEventListener('click', () => deleteProject(parentID)); //Added  => because if not the function is called twice

    }
}
