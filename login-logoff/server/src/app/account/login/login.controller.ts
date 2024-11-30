import {
  Controller,
  Post,
  Body,
  HttpCode,
  UsePipes,
  ValidationPipe,
  Res,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';
import { CookieService } from 'src/security/utils/cookie/cookie.service';

@Controller('login')
export class LoginController {
  constructor(
    private readonly loginService: LoginService,
    private readonly cookieService: CookieService,
  ) {}

  @Post()
  @HttpCode(200)
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  create(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const loginResult = this.loginService.login(loginDto);

    this.cookieService.setAuthCookie(res, '', '');

    return loginResult;
  }
}
