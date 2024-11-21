import {
  Controller,
  Post,
  Body,
  HttpCode,
  UsePipes,
  ValidationPipe,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
//SERVICES
import { RegistrationService } from './registration.service';
import { CookieService } from 'src/security/utils/cookie/cookie.service';
//DTO
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { ResponseRegistrationDto } from './dto/response-registration.dto';

@Controller('registration')
export class RegistrationController {
  constructor(
    private readonly registrationService: RegistrationService,
    private readonly cookieService: CookieService,
  ) {}

  @Post()
  @HttpCode(201)
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async create(
    @Body() createRegistrationDto: CreateRegistrationDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<ResponseRegistrationDto> {
    const registredUser = await this.registrationService.create(
      createRegistrationDto,
    );

    this.cookieService.setAuthCookie(res, registredUser.access_token);

    return registredUser;
  }
}
