export class Todo{
    constructor(title, description){
        this.title = title,
        this.description = description,
        this.createdAt = new Date();
    }

    getDetails(){
        return `Project: ${this.title}, Description: ${this.description}, Created At: ${this.createdAt}`
    } 
    
}
