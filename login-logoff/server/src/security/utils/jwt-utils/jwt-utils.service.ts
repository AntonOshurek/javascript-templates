import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import type { Tokens, GetTokenPayload } from './model';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtUtilsService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async getTokens(tokenPayload: GetTokenPayload): Promise<Tokens> {
    const token = await this.jwtService.signAsync(tokenPayload, {
      expiresIn: Number(this.configService.get<string>('TOKEN_TTL')),
    });

    const refreshToken = await this.jwtService.signAsync(
      { userid: tokenPayload.userId },
      {
        expiresIn: Number(this.configService.get<string>('REFRESH_TOKEN_TTL')),
      },
    );

    return {
      access_token: token,
      refresh_token: refreshToken,
    };
  }
}
