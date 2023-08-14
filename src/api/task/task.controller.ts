import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { ITaskService } from './task.interface';

import Task from './entities/task.entity';

import { CreateTaskDto } from './dto/create-task.dto';

import { TASK_SERVICE } from './constants';

@ApiTags('Task')
@Controller('task')
export class TaskController {
  constructor(
    @Inject(TASK_SERVICE)
    private readonly _taskService: ITaskService
  ) { }

  @ApiOperation({ description: 'Create task' })
  @ApiResponse({ status: 201, type: Task, description: 'Creates new task object.' })
  @Post()
  async create(@Body() task: CreateTaskDto): Promise<Task> {
    return this._taskService.create(task);
  }

  @ApiOperation({ description: 'Get all tasks' })
  @Get()
  findAll() {
    return this._taskService.findAll();
  }

  @ApiOperation({ description: 'Get task by id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._taskService.findOne(id);
  }

  @ApiOperation({ description: 'Update an task' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() task: Task) {
    return this._taskService.update(id, task);
  }

  @ApiOperation({ description: 'Delete an task' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this._taskService.remove(id);
  }
}
