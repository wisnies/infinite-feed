import { iProduct } from './Product.interface';

export interface iProductsResponse {
  limit: number;
  products: iProduct[];
  skip: number;
  total: number;
}
