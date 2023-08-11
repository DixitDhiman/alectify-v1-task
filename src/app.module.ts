import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './api/users/users.module';
import { TaskModule } from './api/task/task.module';

import { PostgresDatabaseModule } from './api/config/database/config.module';
import { PostgresConfigService } from './api/config/database/config.service';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync({
      imports: [PostgresDatabaseModule],
      useClass: PostgresConfigService,
      inject: [PostgresConfigService]
    }),
    UsersModule, 
    TaskModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
