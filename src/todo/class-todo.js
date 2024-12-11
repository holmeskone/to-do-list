export class Todo{
    constructor(title, date, description, priority, notes, project, status){
        this.title = title,
        this.date = date,
        this.description = description,
        this.priority = priority,
        this.notes = notes,
        this.project = project,
        this.status = status,
        this.createdAt = new Date();
    }

    getDetails(){
        console.log('Class created');
        return `To Do: ${this.title}, Date: ${this.date} Description: ${this.description}, Priority: ${this.priority}, Notes: ${this.notes}, Project: ${this.project}, Status: ${this.status}, Created At: ${this.createdAt}`
    } 
    
}
