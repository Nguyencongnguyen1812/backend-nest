// viết xử lý logic

import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.model';

@Injectable()
export class ProductService{
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}
    getProduct(): string {
        console.log()
        return 'nơi viết xử lý logic'
    }
    async getAllProducts(): Promise<Product[]> {
        return this.productModel.find().exec();
      }
    async createProduct(productData: Product): Promise<Product> {
        const createdProduct = new this.productModel(productData);
        return createdProduct.save();
      }
    }