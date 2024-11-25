import {Project} from "./class-project.js"

export function createProject(){
    const projectBar = document.getElementById('created-projects');
    const projectSection = document.createElement('div');
    const projectNameDisplay = document.createElement('h3');
    const deleteProject = document.createElement('button');
    const input = document.getElementById('input-project-name');
    const projectName = input.value;
    const newProject =  new Project(projectName);
    projectNameDisplay.id = `${projectName}`
    deleteProject.id = 'delete';
    deleteProject.textContent = '❌';
    projectSection.id = `${projectName}`
    projectNameDisplay.innerHTML = projectName;
    console.log('New project created:', newProject);
    projectSection.append(projectNameDisplay,deleteProject);
    projectBar.appendChild(projectSection);
    input.value = "";
}