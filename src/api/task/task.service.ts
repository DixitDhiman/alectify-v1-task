import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ITaskService } from './task.interface';

import Task from './entities/task.entity';

@Injectable()
export class TaskService implements ITaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) { }

  // This action adds a new task
  async create(task: Partial<Task>): Promise<Task> {
    const newTask = this.taskRepository.create(task);
    return this.taskRepository.save(newTask);
  }

  // This action returns all task
  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  // This action returns a #${id} task
  async findOne(id: string): Promise<Task> {
    return this.taskRepository.findOne({ where: { id } });
  }

  // This action updates a #${id} task
  async update(id: string, task: Partial<Task>): Promise<Task> {
    await this.taskRepository.update(id, task);
    return this.taskRepository.findOne({ where: { id } });
  }

  // This action removes a #${id} task
  async remove(id: string): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
