class TaskService{
    constructor(){
        this.taskarr=[];
    }
    getAllTasks(){
        return this.taskarr;
    }
    addTask(task){
        this.taskarr.push(task);
    }
}

export default new TaskService();