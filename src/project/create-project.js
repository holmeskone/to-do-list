import {Project} from "./class-project.js"
import { selectProject } from "./select-project.js";
import { displayProject } from "./display-project.js";

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
    //Setting allProjects
    allProjects.set(projectName, newProject);
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
    selectProject(projectSection.firstElementChild,projectSection.id); // Make the latest project as the currently selected, the variables are to align with the selected function
    console.log(allProjects.get(projectName))
    localStorage.setItem(projectName , JSON.stringify(allProjects.get(`${projectName}`))) // This sets the project name as the key in the localStorage, as value it includes the Map().
    console.log(localStorage.getItem(`${projectName}`));
}


export function createDefaultProject(){
    const projectName = 'Default Project'
    const newProject = new Project(projectName);
    allProjects.set(projectName, newProject);
    console.log('All projects: ', allProjects);
    console.log('New project created:', newProject);
    localStorage.setItem('Default Project' , JSON.stringify(allProjects.get(`${projectName}`))) // This sets the project name as the key in the localStorage, as value it includes the Map().
    displayProject(projectName);
}




// Export the current SELECTED project to the to do creation file. 
export { allProjects };
