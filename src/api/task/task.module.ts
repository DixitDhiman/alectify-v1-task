import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TaskController } from './task.controller';
import { TaskService } from './task.service';

import Task from './entities/task.entity';

import { TASK_SERVICE } from './constants';


@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TaskController],
  providers: [
    {
      // You can switch useClass to different implementation
      useClass: TaskService,
      provide: TASK_SERVICE
    }
  ],
})
export class TaskModule { }
