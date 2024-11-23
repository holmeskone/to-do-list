import {Project} from "./project.js" 

export function setUpProjectCreation(){
    const createProjectButton = document.getElementById('create-project-button');
    if(createProjectButton){
        createProjectButton.addEventListener('click', createProject);
    }
} 

function createProject(){
    const projectBar = document.getElementById('created-projects');
    const projectSection = document.createElement('div');
    const projectNameDisplay = document.createElement('h3');
    const projectName = document.getElementById('input-project-name').value
    projectNameDisplay.innerHTML = projectName;
    const newProject =  new Project(projectName);
    console.log('New project created:', newProject);
    projectSection.appendChild(projectNameDisplay);
    projectBar.appendChild(projectSection);
}

