// viết router
import { Controller, Get, Post, Body } from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product } from "./product.model";


@Controller('product')
export class ProductController{
    constructor( private readonly productService: ProductService){}
    @Get()
    // getProduct(): string {
    //     return this.productService.getProduct();
    //     // return "hello";
    // }
    async getAllProducts() {
        return this.productService.getAllProducts();
      }
      @Post()
      async createProduct(@Body() productData: Product) {
        return this.productService.createProduct(productData);
      }
}