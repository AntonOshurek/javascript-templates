import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { REQUEST_USER_KEY } from 'src/constants/user.constants';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { TokenPayload } from 'src/security/utils/jwt-utils/model';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(JwtService) private readonly jwtService: JwtService,
    @Inject(ConfigService) private readonly configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractToken(request);

    if (!token) {
      throw new UnauthorizedException(
        'User is not authorized. Token not found.',
      );
    }

    try {
      const payload = await this.jwtService.verifyAsync<TokenPayload>(token, {
        secret: this.configService.get<string>('JWT_SECRET'),
      });

      request[REQUEST_USER_KEY] = payload;
    } catch {
      throw new UnauthorizedException(
        'User is not authorized. Invalid or expired token.',
      );
    }

    return true;
  }

  private extractToken(request: Request): string | undefined {
    const tokenFromCookie = request.cookies?.access_token;
    if (tokenFromCookie) {
      return tokenFromCookie;
    }
  }
}
