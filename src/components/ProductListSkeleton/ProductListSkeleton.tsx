import ProductCardSkeleton from '../ProductCardSkeleton';
import ProductList from '../ProductList';

export const ProductListSkeleton: React.FC = () => {
  return (
    <ProductList>
      {new Array(8).fill(null).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </ProductList>
  );
};
