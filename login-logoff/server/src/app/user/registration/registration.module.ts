import { Module } from '@nestjs/common';
//SERVICES
import { RegistrationService } from './registration.service';
import { UserModule } from '../user/user.module';
//CONTROLLERS
import { RegistrationController } from './registration.controller';
//MODULES
import { SecurityModule } from 'src/security/security.module';

@Module({
  controllers: [RegistrationController],
  providers: [RegistrationService],
  imports: [UserModule, SecurityModule],
})
export class RegistrationModule {}
