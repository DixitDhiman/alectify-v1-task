import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  content: string;

  // @ApiProperty()
  // @IsNotEmpty()
  // @IsString()
  // user: string;
}