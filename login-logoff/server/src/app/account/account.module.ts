import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { RegistrationModule } from './registration/registration.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [RegistrationModule, UserModule, LoginModule],
  controllers: [],
})
export class AccountModule {}
