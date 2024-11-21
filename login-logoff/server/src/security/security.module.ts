import { Module } from '@nestjs/common';
import { JwtUtilsService } from './utils/jwt-utils/jwt-utils.service';
import { CryptoUtilsService } from './utils/crypto-utils/crypto-utils.service';
import { JwtConfigModule } from './jwt/jwt.module';
import { CookieService } from './utils/cookie/cookie.service';

@Module({
  imports: [JwtConfigModule],
  providers: [JwtUtilsService, CryptoUtilsService, CookieService],
  exports: [JwtUtilsService, CryptoUtilsService, CookieService],
})
export class SecurityModule {}
