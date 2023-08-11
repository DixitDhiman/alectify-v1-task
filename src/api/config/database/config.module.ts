import { Module } from '@nestjs/common';
import { PostgresConfigService } from './config.service';
 
@Module({
  imports: [],
  providers: [PostgresConfigService]
})
export class PostgresDatabaseModule {}