import {delegateProjectOperations} from "./project/manage-project";


// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('App initialized');
});


// Call when there's a click on the project section
document.addEventListener('click', () => {
    delegateProjectOperations(); // Delegate to either create or delete project
});
