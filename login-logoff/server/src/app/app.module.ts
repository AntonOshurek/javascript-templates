import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
//DB
import { MongooseModule } from '@nestjs/mongoose';
//utils
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
    RegistrationModule,
    AuthenticationModule,
    UserModule,
  ],
  controllers: [],
})
export class AppModule {}
