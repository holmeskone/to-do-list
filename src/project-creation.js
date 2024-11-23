import {Project} from "./project.js"
import { deleteProject } from "./delete-project";

export function setUpProjectCreation(){
    const createProjectButton = document.getElementById('create-project-button');
    if(createProjectButton){
        createProjectButton.addEventListener('click', createProject);
    }
} 

function createProject(){
    const projectBar = document.getElementById('created-projects');
    const projectSection = document.createElement('div');
    projectSection.id = 'project-1'
    const projectNameDisplay = document.createElement('h3');
    projectNameDisplay.id = 'project-name'
    const deleteProject = document.createElement('button');
    deleteProject.id = 'delete';
    deleteProject.textContent = '❌';
    const projectName = document.getElementById('input-project-name').value
    projectNameDisplay.innerHTML = projectName;
    const newProject =  new Project(projectName);
    console.log('New project created:', newProject);
    projectSection.append(projectNameDisplay,deleteProject);
    projectBar.appendChild(projectSection);

}

