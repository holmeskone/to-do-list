import {Project} from "./class-project.js"

let currentProject = null;

export function createProject(){
    const projectBar = document.getElementById('created-projects');
    const projectSection = document.createElement('div');
    const projectNameDisplay = document.createElement('h3');
    const deleteProject = document.createElement('button');
    const input = document.getElementById('input-project-name');
    const projectName = input.value;
    // Create a new project
    currentProject = new Project(projectName);
    projectNameDisplay.id = `${projectName}`
    deleteProject.id = 'delete';
    deleteProject.textContent = '❌';
    projectSection.id = `${projectName}`
    projectNameDisplay.innerHTML = projectName;
    console.log('New project created:', currentProject);
    projectSection.append(projectNameDisplay,deleteProject);
    projectBar.appendChild(projectSection);
    input.value = "";
}

// Export the current project
export { currentProject };