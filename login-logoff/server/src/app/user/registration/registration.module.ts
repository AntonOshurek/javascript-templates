import { Module } from '@nestjs/common';
//SERVICES
import { RegistrationService } from './registration.service';
import { UserModule } from '../user/user.module';
//CONTROLLERS
import { RegistrationController } from './registration.controller';

@Module({
  controllers: [RegistrationController],
  providers: [RegistrationService],
  imports: [UserModule],
})
export class RegistrationModule {}
