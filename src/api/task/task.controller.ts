import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import Task from './entities/task.entity';

import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@ApiTags('Task')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @ApiOperation({ description: 'Create task' })
  @ApiResponse({ status: 201, type: Task, description: 'Creates new task object.' })
  @Post()
  async create(@Body() task: CreateTaskDto): Promise<Task> {
    return this.taskService.create(task);
  }

  @ApiOperation({ description: 'Get all tasks' })
  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @ApiOperation({ description: 'Get task by id' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @ApiOperation({ description: 'Update an task' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() task: Task) {
    return this.taskService.update(id, task);
  }

  @ApiOperation({ description: 'Delete an task' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(id);
  }
}
