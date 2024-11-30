import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from 'src/security/guards/auth/auth.guard';
import { Request } from 'express';
import { REQUEST_USER_KEY } from 'src/constants/user.constants';
import { TokenPayload } from 'src/security/utils/jwt-utils/model';

@UseGuards(AuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getMyUserData(@Req() req: Request) {
    const { userId }: TokenPayload = req[REQUEST_USER_KEY];

    return this.userService.getMyUserData(userId);
  }
}
