import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
//DB
import { MongooseModule } from '@nestjs/mongoose';
//utils
import { JwtConfigModule } from './utils-modules/jwt/jwt.module';
import { RegistrationModule } from './user/registration/registration.module';
import { AuthenticationModule } from './user/authentication/authentication.module';
import { UserModule } from './user/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_PATH'),
      }),
      inject: [ConfigService],
    }),
    JwtConfigModule,
    RegistrationModule,
    AuthenticationModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
