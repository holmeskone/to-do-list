import {Project} from "./project.js"

export function createProject(){
    const projectBar = document.getElementById('created-projects');
    const projectSection = document.createElement('div');
    const projectNameDisplay = document.createElement('h3');
    projectNameDisplay.id = 'project-name'
    const deleteProject = document.createElement('button');
    deleteProject.id = 'delete';
    deleteProject.textContent = '❌';
    const projectName = document.getElementById('input-project-name').value
    projectSection.id = `${projectName}`
    projectNameDisplay.innerHTML = projectName;
    const newProject =  new Project(projectName);
    console.log('New project created:', newProject);
    projectSection.append(projectNameDisplay,deleteProject);
    projectBar.appendChild(projectSection);

}

