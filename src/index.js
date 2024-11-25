import {delegateProjectOperations} from "./project/manage-project";
import { managetodo } from "./todo/manage-to-dos";


// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('App initialized');
});


// Call when there's a click on the project section
const projectSection = document.getElementById('project-section')
projectSection.addEventListener('click', () => {
    delegateProjectOperations(); // Delegate to either create or delete project
});

// Call when there's a click on the to do section
const toDoSection = document.getElementById('create-todo');
toDoSection.addEventListener('click', () => {
    managetodo();
});