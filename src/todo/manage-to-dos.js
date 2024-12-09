import { createToDo } from "./create-todo";
import { selectProjectName } from "../project/select-project";


export function manageToDo(id) {
    const addToDo = document.getElementById('create-todo-button');
 
    if (id === addToDo.id){
        // Fetch input values
        console.log('there was a click')
        let titleToDo = document.getElementById('title').value.trim();
        let dateToDo = document.getElementById('date').value.trim();
        let descriptionToDo = document.getElementById('description').value.trim();
        let priorityToDo = document.getElementById('priorities').value.trim();
        let notesToDo = document.getElementById('notes').value.trim();
        let projectToDo = selectProjectName; // Ensure this is defined elsewhere

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
        createToDo(titleToDo, dateToDo, descriptionToDo, priorityToDo, notesToDo, projectToDo);

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

    // Ensure an element exists for the provided ID
    const completedToDo = document.getElementById(id);
    if (!completedToDo) {
        console.warn(`Element with ID "${id}" not found.`);
        return;
    }

    // Determine if the action is a checkbox or delete
    if (id.includes('-checkbox')) {
        const targetTextId = id.replace('-checkbox', ''); // Derive associated text ID
        const targetTextElement = document.getElementById(targetTextId);
        if (targetTextElement) {
            // Toggle line-through based on current textDecoration value
            if (targetTextElement.style.textDecoration === 'line-through') {
                targetTextElement.style.textDecoration = 'none'; // Remove line-through
            } else {
                targetTextElement.style.textDecoration = 'line-through'; // Add line-through
            }
        } else {
            console.warn(`Text element with ID "${targetTextId}" not found.`);
        }
    } else if (id.includes('-delete')) {
        // Delete the parent element if the delete button is clicked
        const parentElement = completedToDo.parentElement;
        if (parentElement) {
            parentElement.remove();
        } else {
            console.warn(`Parent element for "${id}" not found.`);
        }
    } else {
        console.log(`No action taken for ID "${id}".`);
    }
}


// project should be the SELECTED project.