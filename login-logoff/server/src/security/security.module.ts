import { Module } from '@nestjs/common';
import { JwtUtilsService } from './utils/jwt-utils/jwt-utils.service';
import { CryptoUtilsService } from './utils/crypto-utils/crypto-utils.service';
import { JwtConfigModule } from './jwt/jwt.module';

@Module({
  imports: [JwtConfigModule],
  providers: [JwtUtilsService, CryptoUtilsService],
  exports: [JwtUtilsService, CryptoUtilsService],
})
export class SecurityModule {}
