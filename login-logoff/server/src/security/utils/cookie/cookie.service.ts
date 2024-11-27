import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CookieService {
  constructor(private readonly configService: ConfigService) {}

  setAuthCookie(res: Response, token: string, refreshToken?: string): void {
    res.cookie('access_token-test', token, {
      httpOnly: true,
      secure: this.configService.get<string>('NODE_ENV') === 'production',
      maxAge: Number(this.configService.get<string>('TOKEN_TTL')),
    });

    if (refreshToken && refreshToken !== '') {
      res.cookie('refresh_token', refreshToken, {
        httpOnly: true,
        secure: this.configService.get<string>('NODE_ENV') === 'production',
        maxAge: Number(this.configService.get<string>('REFRESH_TOKEN_TTL')),
      });
    }
  }
}
