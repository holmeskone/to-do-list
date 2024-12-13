import { selectProject } from "./select-project.js";

export function displayProject(projectName){
    const projectBar = document.getElementById('created-projects');
    const projectSection = document.createElement('div');
    const projectNameDisplay = document.createElement('h3');
    const deleteProject = document.createElement('button');
    // const projectName = 'Default Project'
    // Create a new project
    // const newProject = new Project(projectName);
    // allProjects.set(projectName, newProject);
    // console.log('All projects: ', allProjects);
    projectNameDisplay.id = `${projectName}`
    projectNameDisplay.className = `${projectName}-title`
    deleteProject.id = `${projectName}-delete`;
    deleteProject.className = 'delete-project';
    deleteProject.textContent = '❌';
    projectSection.id = `${projectName}-section`;
    projectSection.className = 'project';
    projectNameDisplay.innerHTML = projectName;
    // console.log('New project created:', newProject);
    projectSection.append(projectNameDisplay,deleteProject);
    projectBar.appendChild(projectSection);
    selectProject(projectSection.firstElementChild,projectSection.id); //Make default project as selected one.
}
