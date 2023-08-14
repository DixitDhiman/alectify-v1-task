import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import User from './entities/user.entity';

import { USERS_SERVICE } from './constants';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    {
      // You can switch useClass to different implementation
      useClass: UsersService,
      provide: USERS_SERVICE
    }
  ],
})
export class UsersModule { }
