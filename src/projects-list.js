export default function createdProjects(){
    const projectBar = document.getElementById('created-projects');
    const projectSection = document.createElement('div');
    const projectName = document.createElement('h3');
    projectName.innerHTML = document.getElementById('project-name').value
    projectSection.appendChild(projectName);
    projectBar.appendChild(projectSection);
}