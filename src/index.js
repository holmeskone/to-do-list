import {delegateProjectCreation} from "./manage-projects";


// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('App initialized');
});


// Initialize the application
document.addEventListener('click', () => {
    delegateProjectCreation(); // Delegate setup for the "Create Project" button
});
