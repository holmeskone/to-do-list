export class Project{
    constructor(name){
        this.name = name,
        this.createdAt = new Date();
    }

    getDetails(){
        return `Project: ${this.name}, Created At: ${this.createdAt}`
    } 
    
}
