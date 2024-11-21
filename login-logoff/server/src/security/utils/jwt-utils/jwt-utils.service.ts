import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import type { IGetTokenReturnData, ITokenPayload } from './model';

@Injectable()
export class JwtUtilsService {
  constructor(private readonly jwtService: JwtService) {}

  async getToken(tokenPayload: ITokenPayload): Promise<IGetTokenReturnData> {
    const token = await this.jwtService.signAsync(tokenPayload);

    return {
      access_token: token,
    };
  }
}
