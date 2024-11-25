import {delegateProjectCreation} from "./manage-projects";


// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('App initialized');
});


// Call when there's a click on the project section
document.addEventListener('click', () => {
    delegateProjectCreation(); // Delegate to either create or delete project
});
