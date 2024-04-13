import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './module/product/product.module';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { ProductsService } from './products/products.service';
import { UsersService } from './users/users.service';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';
import { User, userSchema } from './users/users.schema';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://jenosluis:DjrPAWqNBfV3RwZ8@db01.jwvkch8.mongodb.net/'),
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
    ProductModule,
    UsersModule,
    ProductsModule
  ],
  controllers: [AppController, UsersController, ProductsController],
  providers: [AppService, ProductsService, UsersService],
})
export class AppModule { }
