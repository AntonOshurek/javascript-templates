import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import type { ResponseLoginDto } from './dto/response-login.dto';
import { UserQueryService } from '../user/user-query.service';
import { CryptoUtilsService } from 'src/security/utils/crypto-utils/crypto-utils.service';
import { JwtUtilsService } from 'src/security/utils/jwt-utils/jwt-utils.service';

@Injectable()
export class LoginService {
  constructor(
    private readonly userQueryService: UserQueryService,
    private readonly cryptoUtilsService: CryptoUtilsService,
    private readonly jwtUtils: JwtUtilsService,
  ) {}

  async login(loginDto: LoginDto): Promise<ResponseLoginDto> {
    const findedUser = await this.userQueryService.getUserByEmailWithPassword(
      loginDto.email,
    );

    if (!findedUser) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const comparePasswordResult =
      await this.cryptoUtilsService.comparePasswords(
        loginDto.password,
        findedUser.password,
      );

    if (!comparePasswordResult) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const tokens = await this.jwtUtils.getTokens({
      userId: findedUser._id.toString(),
    });

    return {
      user: findedUser,
      tokens: tokens,
    };
  }
}
