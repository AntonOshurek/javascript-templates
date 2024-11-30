import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { SecurityModule } from 'src/security/security.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [SecurityModule, UserModule],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
