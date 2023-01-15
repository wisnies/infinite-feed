import { useState } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { iPaginatedProducts } from '../../../libs/interfaces/PaginatedProducts.interface';
import { iProduct } from '../../../libs/interfaces/Product.interface';
import { iProductsResponse } from '../../../libs/interfaces/ProductsResponse.interface';
import Pagination from '../../Pagination';
import ProductCard from '../../product/ProductCard';
import ProductList from '../../product/ProductList';
import ProductListControlls from '../../ListControlls';
import ProductListSkeleton from '../../skeletons/ProductListSkeleton';
import { usePageTitle } from '../../../hooks/usePageTitle';

const fetchProducts = async (
  page: number,
  perPage: number
): Promise<iPaginatedProducts> => {
  const skip = page * perPage;
  const res = await fetch(
    `https://dummyjson.com/products?skip=${skip}&limit=${perPage}`
  );
  if (res.ok) {
    const parsedRes: iProductsResponse = await res.json();
    const { products, total } = parsedRes;
    const lastPage = products.length !== perPage;
    const hasMore = products.length % perPage === 0 && !lastPage;

    return {
      products,
      hasMore,
      total,
    };
  }
  throw new Error('Unable to fetch products');
};
export const PaginatedProductsPage: React.FC = () => {
  usePageTitle('Paginated data fetching');
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const perPage = 8;

  const {
    isLoading,
    isError,
    isPreviousData,
    error,
    data,
  }: UseQueryResult<iPaginatedProducts, Error> = useQuery<
    iPaginatedProducts,
    Error
  >(['products', page, perPage], () => fetchProducts(page, perPage), {
    keepPreviousData: true,
  });

  const changePage = (number: number) => {
    setPage(number);
    navigate(`/products-pag?page=${number + 1}`, {});
  };

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <ProductListControlls
        mode='pagination'
        total={data?.total}
        page={page}
        perPage={perPage}
      />
      {isLoading ? (
        <ProductListSkeleton />
      ) : (
        <>
          <ProductList>
            {data?.products.map((product: iProduct) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </ProductList>
          <Pagination
            page={page}
            perPage={perPage}
            total={data?.total}
            isPreviousData={isPreviousData}
            hasMore={!!data?.hasMore}
            changePage={changePage}
          />
        </>
      )}
    </>
  );
};
