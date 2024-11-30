import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
//SERVICES
import { UserService } from '../user/user.service';
import { JwtUtilsService } from 'src/security/utils/jwt-utils/jwt-utils.service';
import { CryptoUtilsService } from 'src/security/utils/crypto-utils/crypto-utils.service';
//DTO
import { ResponseRegistrationDto } from './dto/response-registration.dto';
//ENTITYES
import { User } from '../user/entities/user.entity';
import { UserQueryService } from '../user/user-query.service';
import { Tokens } from 'src/security/utils/jwt-utils/model';

@Injectable()
export class RegistrationService {
  constructor(
    private readonly userQueryService: UserQueryService,
    private readonly userService: UserService,
    private readonly jwtUtilsService: JwtUtilsService,
    private readonly cryptoUtilsService: CryptoUtilsService,
  ) {}

  async create(createRegistrationDto): Promise<ResponseRegistrationDto> {
    const isEmailAlredyIsset: boolean =
      await this.userQueryService.isUserExistByEmail(
        createRegistrationDto.email,
      );

    if (isEmailAlredyIsset) {
      throw new HttpException(
        'User with this email alredy exist',
        HttpStatus.CONFLICT,
      );
    }

    const passwordHash = await this.cryptoUtilsService.generateHash(
      createRegistrationDto.password,
    );

    const userDtoWithHashedPassword = {
      ...createRegistrationDto,
      password: passwordHash,
    };

    const createdUser: User = await this.userService.create(
      userDtoWithHashedPassword,
    );

    const tokens: Tokens = await this.jwtUtilsService.getTokens({
      userId: createdUser._id.toString(),
    });

    const response: ResponseRegistrationDto = {
      user: createdUser,
      tokens,
    };

    return response;
  }
}
