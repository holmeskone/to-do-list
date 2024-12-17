import { createProject } from "./create-project";
import { deleteProject } from "./delete-project";
import { createDefaultProject } from "./create-project";
import { selectProject } from "./select-project";
import { displayProject, displaySavedProject } from "./display-project";


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
    if (localStorage.length === 0) {
        createDefaultProject();
    }
    else{
            // Loop through all keys in localStorage
    for (let i = 0; i < localStorage.length; i++) {
        // Get the key at the current index
        const key = localStorage.key(i);
        // Retrieve the value associated with the key
        const dataString = localStorage.getItem(key);
        
        // Parse the JSON string into a JavaScript object
        const data = JSON.parse(dataString);
        console.log(`data is:`, data)
        // Log the key and its data to the console
        console.log(`Key: ${key}, Data:`, data);
        displayProject(`${key}`);

        }
    }
}
