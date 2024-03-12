import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './module/product/product.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/config'),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
