import { allProjects } from "./create-project";
export function deleteProject(id){
    let i;
    let toDos = document.querySelectorAll(`[data-project=${id.firstChild.innerHTML}]`)

    console.log(toDos)

    for(i=0; i<toDos.length; i++){
        toDos[i].remove()
        console.log('this has been deleted',toDos[i])
    }
    id.remove();
}
    