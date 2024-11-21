import { Module } from '@nestjs/common';
import { JwtUtilsService } from './utils/jwt-utils/jwt-utils.service';
import { CryptoUtilsService } from './utils/crypto-utils/crypto-utils.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule],
  providers: [JwtUtilsService, CryptoUtilsService],
  exports: [JwtUtilsService, CryptoUtilsService],
})
export class SecurityModule {}
