import {delegateProjectCreation} from "./project";


// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('App initialized');
});


// Initialize the application
document.addEventListener('click', () => {
    delegateProjectCreation(); // Delegate setup for the "Create Project" button
});
