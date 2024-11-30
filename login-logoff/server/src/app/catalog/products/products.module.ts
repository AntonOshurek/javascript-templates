import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { AuthGuard } from 'src/security/guards/auth/auth.guard';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService, AuthGuard],
})
export class ProductsModule {}
