import { Injectable } from '@nestjs/common';
//SERVICES
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
//DTO
import { ResponseRegistrationDto } from './dto/response-registration.dto';
//CRYPTO
import { genSaltSync, hash } from 'bcrypt';
//ENTITYES
import { User } from '../user/entities/user.entity';

@Injectable()
export class RegistrationService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async create(createRegistrationDto): Promise<ResponseRegistrationDto> {
    const passwordHash = await this.generateHash(
      createRegistrationDto.password,
    );

    const userDtoWithHashedPassword = {
      ...createRegistrationDto,
      password: passwordHash,
    };

    const createdUser: User = await this.userService.create(
      userDtoWithHashedPassword,
    );

    const token = await this.jwtService.signAsync({
      email: createdUser.email,
      username: createdUser.userName,
    });

    return { ...createdUser, access_token: token };
  }

  async generateHash(password: string): Promise<string> {
    const salt = genSaltSync(10);
    const hashpass = await hash(password, salt);

    return hashpass;
  }
}
