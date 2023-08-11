import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

import User from 'src/api/users/entities/user.entity';

export class CreateTaskDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  content: string;

  @ApiProperty({ example: 'fffa73e4efca9245489e2bac' })
  @IsNotEmpty()
  @IsString()
  readonly user: User;
}