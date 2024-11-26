export class Project{
    constructor(name){
        this.name = name,
        this.todos = []
    }

    getDetails(){
        return `Project: ${this.name}, Todos: ${this.todos}`
    } 

}
