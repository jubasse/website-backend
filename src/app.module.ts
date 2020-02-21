import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from 'nestjs-config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import * as path from 'path';

@Module({
    imports: [
        ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}'), {
            modifyConfigName: name => name.replace('.config', ''),
        }),
        TypeOrmModule.forRootAsync({
            useFactory: async (config: ConfigService) => config.get('database'),
            inject: [ConfigService],
        }),
        AuthModule,
        UsersModule,
        ConfigModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
