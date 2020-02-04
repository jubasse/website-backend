import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { isNullOrUndefined } from '../utils/helpers';
require('dotenv').config();

export enum EnvMode {
    PRODUCTION = 'production',
    DEVELOPMENT = 'development'
}

export enum EnvParam {
    MODE = 'MODE',
    JWT_SECRET = 'JWT_SECRET',
    APP_PORT = 'APP_PORT'
}

export interface EnvConfig {
    MODE: string;
    JWT_SECRET: string;
    APP_PORT: number;
    DATABASE_HOST: string;
}

const envConfig = process.env;

@Injectable()
export class ConfigService {
    private readonly _envConfig: EnvConfig;

    public get port(): number {
        const port = this._getProperty(EnvParam.APP_PORT);
        return port ? parseInt(port, 10) : 3000;
    }

    public get isProduction(): boolean {
        return this._getProperty(EnvParam.MODE) === EnvMode.PRODUCTION
    }

    public get jwtSecret(): string {
        return this._getProperty(EnvParam.JWT_SECRET);
    }

    public get typeOrmConfig(): TypeOrmModuleOptions {
        return {
            type: 'mongodb',
        }
    }

    public constructor() {
        this._envConfig = envConfig as any;
    }

    /**
     * Getting a property by it's name
     * @param name
     * @private
     */
    private _getProperty(name: string): any {
        const prop = this._envConfig;
        if (!isNullOrUndefined(prop[name])) {
            throw new Error(`Enable to find property ${name} in env configuration`);
        }
    }
}
