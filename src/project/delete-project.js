import { allProjects } from "./create-project";
export function deleteProject(id) {
    // Check if `id` exists and has a valid `firstChild`
    if (!id || !id.firstChild || !id.firstChild.innerHTML) {
        console.error("Invalid `id` provided or `firstChild` is missing.");
        return; // Exit the function early
    }

    // Select all elements with the data-project attribute
    let toDos = document.querySelectorAll(`[data-project="${id.firstChild.innerHTML}"]`);

    console.log("Found toDos:", toDos);

    // Check if there are any matching toDos
    if (toDos.length === 0) {
        console.warn("No matching toDos found for the given project.");
    }

    // Loop through and remove the toDos
    for (let i = 0; i < toDos.length; i++) {
        console.log("Deleting:", toDos[i]);
        toDos[i].remove();
    }

    // Remove the project itself
    id.remove();
    console.log("Project deleted:", id);
}