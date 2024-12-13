import "./style.css"; // Import CSS styles 
import { delegateProjectOperations } from "./project/manage-project";
import { manageToDo } from "./todo/manage-to-dos";
import { defaultProjectOperation } from "./project/manage-project";
import { displayTab } from "./todo/view-todo";
import { completedToDo } from "./todo/manage-to-dos";

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('App initialized');
    defaultProjectOperation();
    displayTab('create-todo-section-button');
});

//Clear out Project Section input when clicking on it
const projectInput = document.getElementById('input-project-name')
projectInput.addEventListener('click', () => {
    projectInput.value='';});
    
// Call when there's a click on the project section
const projectSection = document.getElementById('project-section')
projectSection.addEventListener('click', (e) => {
 delegateProjectOperations(e.target); // Delegate to either create or delete project
 console.log(`this is e.target`,e.target);
});

// Call when there's a click on the to do section
const toDoSection = document.getElementById('create-todo-button');
toDoSection.addEventListener('click', (e) => {
    manageToDo(e.target.id);

});

//Call when tabs are clicked
const tabContent = document.getElementById("todo-tab");
tabContent.addEventListener('click', (e) => {
    displayTab(e.target.id)
});


const prioritySection = document.getElementById('priority-divider');
prioritySection.addEventListener('click', (e) => {
    completedToDo(e.target.id);
})

