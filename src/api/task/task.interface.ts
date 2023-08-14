import Task from "./entities/task.entity";

export interface ITaskService {
  create(task: Partial<Task>): Promise<Task>;
  findAll(): Promise<Task[]>;
  findOne(id: string): Promise<Task>;
  update(id: string, task: Partial<Task>): Promise<Task>;
  remove(id: string): Promise<void>;
}