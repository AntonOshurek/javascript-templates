import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class LoginService {
  login(loginDto: LoginDto) {
    console.log(loginDto);
    return 'This action adds a new login';
  }
}
