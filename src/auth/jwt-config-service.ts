import { Injectable } from '@nestjs/common';
import { JwtModuleOptions, JwtOptionsFactory } from '@nestjs/jwt';
import { ConfigService } from 'nestjs-config';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtConfigService implements JwtOptionsFactory {
  public constructor(private readonly _configService: ConfigService) {}

  public createJwtOptions(): JwtModuleOptions {
    const { algorithm, expiresIn, secret } = this._configService.get('jwt');
    const signOptions: jwt.SignOptions = {
        algorithm,
        expiresIn
    };
    const verifyOptions: jwt.VerifyOptions = {
        algorithms: [algorithm],
    };
    return { secret, signOptions, verifyOptions };
  }
}
