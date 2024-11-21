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
//DTO
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { ResponseRegistrationDto } from './dto/response-registration.dto';
import { ConfigService } from '@nestjs/config';

@Controller('registration')
export class RegistrationController {
  constructor(
    private readonly registrationService: RegistrationService,
    private readonly configService: ConfigService,
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

    res.cookie('access_token', registredUser.access_token, {
      httpOnly: true,
      secure: this.configService.get<string>('NODE_ENV') === 'production',
      maxAge: 3600000,
    });

    return registredUser;
  }
}
