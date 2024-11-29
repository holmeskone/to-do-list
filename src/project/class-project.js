export class Project{
    constructor(name){
        this.name = name,
        this.todos = []
    }

    getDetails(){
        return `Project: ${this.name}, Todos: ${this.todos[0].title}`;
    }

    addTodo(todo) {
        this.todos.push(todo); // Example method to add a todo
    }

}
