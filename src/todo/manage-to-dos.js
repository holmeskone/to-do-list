import { createToDo } from "./create-todo";
import { selectProjectName } from "../project/select-project";
import { allProjects, createDefaultProject } from "../project/create-project";
import { deleteToDo } from "./delete-todo";

export function manageToDo(id) {
    const addToDo = document.getElementById('create-todo-button');
    if (id === addToDo.id){
        // Fetch input values
        let titleToDo = document.getElementById('title').value.trim();
        let dateToDo = document.getElementById('date').value.trim();
        let descriptionToDo = document.getElementById('description').value.trim();
        let priorityToDo = document.getElementById('priorities').value.trim();
        let notesToDo = document.getElementById('notes').value.trim();
        let projectToDo = selectProjectName; // Ensure this is defined elsewhere
        let statusToDo = 'pending';

        // Get or create error message element
        let errorMessage = document.getElementById('error');
        if (!errorMessage) {
            const errorSection = document.getElementById('error-section');
            errorMessage = document.createElement('p');
            errorMessage.id = 'error';
            errorSection.appendChild(errorMessage);
        }

        // Validation
        if (!titleToDo || !priorityToDo) {
            errorMessage.textContent = 'Please complete the title and priority fields.';
            errorMessage.style.color = 'red';
            errorMessage.style.display = 'block'; // Make sure it's visible
            return; // Stop here if validation fails
        }

        // Clear error message (if previously displayed)
        errorMessage.textContent = '';
        errorMessage.style.display = 'none'; // Hide the error message

        // Change button text to indicate action
        const originalButtonText = addToDo.textContent || addToDo.value;
        const buttonText = 'Added!';
        
        if (addToDo.tagName === 'BUTTON') {
            addToDo.textContent = buttonText;
        } else {
            addToDo.value = buttonText;
        }

        // Reset button text after 3 seconds
        setTimeout(() => {
            if (addToDo.tagName === 'BUTTON') {
                addToDo.textContent = originalButtonText;
            } else {
                addToDo.value = originalButtonText;
            }
        }, 3000);

        // Call createToDo function with valid data
        createToDo(titleToDo, dateToDo, descriptionToDo, priorityToDo, notesToDo, projectToDo,statusToDo);

        //Clear all input fields:
        const titleInput = document.getElementById('title');
        const dateInput = document.getElementById('date');
        const descriptionInput = document.getElementById('description');
        const prioritiesInput = document.getElementById('priorities');
        const notesInput = document.getElementById('notes');
        titleInput.value = '';
        dateInput.value = '';
        descriptionInput.value = '';
        prioritiesInput.value = '';
        notesInput.value = '';
    };
}

export function completedToDo(id) {
    // Log the clicked ID for debugging
    console.log(id);
    const project = JSON.parse(localStorage.getItem(id.split('-')[0])) // Get the todo ID first string that's associated with the project
    console.log(project)
    const targetTextId = id.replace('checkbox', 'title'); // Derive associated text ID
    const text = document.getElementById(targetTextId).textContent;
    const targetTextElement = document.getElementById(targetTextId); // The whole div of the todo task
    const todoChecked = id.split('-')[1]; // Get the todo index in the Map() project
    // Ensure an element exists for the provided ID
    const completedToDo = document.getElementById(id);
    if (!completedToDo) {
        console.warn(`Element with ID "${id}" not found.`);
        return;
    }
    // Determine if the action is a checkbox or delete
    if (id.includes('-checkbox')) {
        if (targetTextElement) {
            if (project && project.todos) {
                // Toggle the todo status
                project.todos = project.todos.map(todo => {
                    if (todo.title === text) {
                        console.log("Found the todo to toggle:", todo);
    
                        // Toggle the status and text decoration
                        if (todo.status === "pending") {
                            console.log("Changing status to completed");
                            targetTextElement.style.textDecoration = "line-through";
                            return { ...todo, status: "completed" }; // Update to completed
                        } else if (todo.status === "completed") {
                            console.log("Changing status to pending");
                            targetTextElement.style.textDecoration = "none";
                            return { ...todo, status: "pending" }; // Update to pending
                        }
                    }
                    return todo; // Return unchanged todos for non-matching cases
                });
            } else {
                console.warn("No todos found for this project.");
            }
    
            // Save the updated project back to localStorage
            localStorage.setItem(id.split('-')[0], JSON.stringify(project));
        } else {
            console.warn(`Text element with ID "${targetTextId}" not found.`);
        }
    } else if (id.includes('-delete')) {
        deleteToDo(id);
    }
}