import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
//DB
import { MongooseModule } from '@nestjs/mongoose';
//utils
import { AccountModule } from './account/account.module';
import { CatalogModule } from './catalog/catalog.module';

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
    AccountModule,
    CatalogModule,
  ],
  controllers: [],
})
export class AppModule {}
