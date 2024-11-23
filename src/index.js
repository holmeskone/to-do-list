import {setUpProjectCreation} from "./project-creation";
import { deleteProjectCreation } from "./delete-project";

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('App initialized');
    setUpProjectCreation(); // Delegate setup for the "Create Project" button
});

