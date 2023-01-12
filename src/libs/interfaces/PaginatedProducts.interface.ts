import { iProduct } from './Product.interface';

export interface iPaginatedProducts {
  products: iProduct[];
  hasMore: boolean;
  total: number;
}
