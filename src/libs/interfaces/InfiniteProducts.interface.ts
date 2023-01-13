import { iPaginatedProducts } from './PaginatedProducts.interface';

export interface iInfiniteProducts {
  nextCursor: number | undefined;
  page: iPaginatedProducts;
}
