export type Task = {
    id : number;
    todo : string;
    completed : boolean;
    userId : number;
}

export type Tasks = {
    completeTasks : Task[];
    incompleteTasks : Task[];
}