import { createProject } from "./create-project";
import { deleteProject } from "./delete-project";
import { createDefaultProject } from "./create-project";
import { selectProject } from "./select-project";

export function delegateProjectOperations(section){
    const createProjectButton = document.getElementById('create-project-button'); // variable for the add project button
    const deleteProjectButtonClass = 'delete-project' // variable for the delete project button ❌
    const projectClass = 'project'; // variable for the project, specifically when we select it
    if(section === createProjectButton){ // if you click add project send to create project function
        createProject();
    };

    if (section.className === deleteProjectButtonClass){ // if you click delete project then send to that file 
        deleteProject(section.parentElement); //Added  => because if not the function is called twice
    };

    if (section.parentElement.className === projectClass) { // if you click on the project then redirect to selectProject
            selectProject(section, section.parentElement.id)
        };
    }

export function defaultProjectOperation(){
    createDefaultProject()
}
