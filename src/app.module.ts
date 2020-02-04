import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [TypeOrmModule.forRoot({

  }), AuthModule, UsersModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
