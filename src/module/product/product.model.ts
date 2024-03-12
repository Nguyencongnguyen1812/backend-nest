import { Schema, Document } from 'mongoose';

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  // ... các trường khác
});

export interface Product extends Document {
  name: string;
  description?: string;
  price: number;
  createdAt: Date;
  // ... các trường khác
}

export default ProductSchema;
