import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { LoginModule } from './login/login.module';
import { RegistrationModule } from './registration/registration.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [RegistrationModule, AuthenticationModule, UserModule, LoginModule],
  controllers: [],
})
export class AccountModule {}
