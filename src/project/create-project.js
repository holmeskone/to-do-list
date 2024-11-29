import {Project} from "./class-project.js"
import { selectProject } from "./select-project.js";

let currentProject = null;
const allProjects = new Map(); // We use Map to make it efficient to retrieve a project by its name.

export function createProject(){
    const projectBar = document.getElementById('created-projects');
    const projectSection = document.createElement('div');
    const projectNameDisplay = document.createElement('h3');
    const deleteProject = document.createElement('button');
    const input = document.getElementById('input-project-name');
    const projectName = input.value;
    const newProject = new Project(projectName);
    allProjects.set(projectName, newProject);
    console.log('All projects: ', allProjects);
    // Create a new project
    // currentProject = new Project(projectName);
    projectNameDisplay.id = `${projectName}`
    projectNameDisplay.className = 'project';
    deleteProject.textContent = '❌';
    deleteProject.id = `delete-${projectName}`;
    deleteProject.className = 'delete-project';
    projectSection.id = `${projectName}-section`;
    projectSection.className = 'project';
    projectNameDisplay.innerHTML = projectName;
    console.log('New project created:', newProject);
    projectSection.append(projectNameDisplay,deleteProject);
    projectBar.appendChild(projectSection);
    input.value = "";
    selectProject(projectSection.firstElementChild,projectSection.id); // Make the latest project as the currently selected, the variables are to align with the selected function.
}


export function createDefaultProject(){
    const projectBar = document.getElementById('created-projects');
    const projectSection = document.createElement('div');
    const projectNameDisplay = document.createElement('h3');
    const deleteProject = document.createElement('button');
    const projectName = 'Default Project'
    // Create a new project
    const newProject = new Project(projectName);
    allProjects.set(projectName, newProject);
    console.log('All projects: ', allProjects);
    projectNameDisplay.id = `${projectName}`
    projectNameDisplay.className = `${projectName}-title`
    deleteProject.id = `${projectName}-delete`;
    deleteProject.className = 'delete-project';
    deleteProject.textContent = '❌';
    projectSection.id = `${projectName}-section`;
    projectSection.className = 'project';
    projectNameDisplay.innerHTML = projectName;
    console.log('New project created:', newProject);
    projectSection.append(projectNameDisplay,deleteProject);
    projectBar.appendChild(projectSection);
    selectProject(projectSection.firstElementChild,projectSection.id); //Make default project as selected one. 
}


// Export the current SELECTED project to the to do creation file. 
export { allProjects };
