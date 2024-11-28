import "./style.css"; // Import CSS styles 
import { delegateProjectOperations } from "./project/manage-project";
import { managetodo } from "./todo/manage-to-dos";
import { defaultProjectOperation } from "./project/manage-project";
import { displayTab } from "./todo/view-todo";

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('App initialized');
    defaultProjectOperation();
});

// Call when there's a click on the project section
const projectSection = document.getElementById('project-section')
projectSection.addEventListener('click', (e) => {
 delegateProjectOperations(e.target); // Delegate to either create or delete project
});

// Call when there's a click on the to do section
const toDoSection = document.getElementById('create-todo-button');
toDoSection.addEventListener('click', () => {
    managetodo();
});

//Call when tabs are clicked
const tabContent = document.getElementById("todo-tab");
tabContent.addEventListener('click', (e) => {
    displayTab(e.target.id)
});