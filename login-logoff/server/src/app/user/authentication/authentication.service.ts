import { Injectable } from '@nestjs/common';
import { CreateAuthenticationDto } from './dto/create-authentication.dto';

@Injectable()
export class AuthenticationService {
  create(createAuthenticationDto: CreateAuthenticationDto) {
    console.log(createAuthenticationDto);
    return 'This action adds a new authentication';
  }
}
