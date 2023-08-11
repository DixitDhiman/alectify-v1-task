import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import User from './entities/user.entity';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  // get all users
  @ApiOperation({ description: 'Get all users' })
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  //get user by id
  @ApiOperation({ description: 'Get user by id' })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    } else {
      return user;
    }
  }

  //create user
  @ApiOperation({ description: 'Create user' })
  @ApiResponse({ status: 201, type: User, description: 'Creates new user object.' })
  @Post()
  async create(@Body() user: CreateUserDto): Promise<User> {
    return this.usersService.create(user);
  }

  //update user
  @ApiOperation({ description: 'Update user' })
  @Put(':id')
  async update(@Param('id') id: string, @Body() user: User): Promise<any> {
    return this.usersService.update(id, user);
  }

  //delete user
  @ApiOperation({ description: 'Delete user' })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    //handle error if user does not exist
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    }
    return this.usersService.delete(id);
  }
}
