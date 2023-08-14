import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { AppService } from './app.service';

@ApiTags('Alectify')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @ApiOperation({ description: 'Get current time' })
  @Get()
  getHello(): string {
    return this.appService.getTime();
  }
}
