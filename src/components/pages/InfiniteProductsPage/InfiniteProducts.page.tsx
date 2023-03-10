import { Fragment } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  QueryFunctionContext,
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from 'react-query';
import { iInfiniteProducts } from '../../../libs/interfaces/InfiniteProducts.interface';
import { iProductsResponse } from '../../../libs/interfaces/ProductsResponse.interface';
import ProductCard from '../../product/ProductCard';
import ProductList from '../../product/ProductList';
import ProductListControlls from '../../ListControlls';
import ProductListSkeleton from '../../skeletons/ProductListSkeleton';

import styles from '../../../styles/components/product/ProductList.module.scss';
import { usePageTitle } from '../../../hooks/usePageTitle';

const fetchProducts = async (
  { pageParam = 0 }: QueryFunctionContext,
  perPage: number
): Promise<iInfiniteProducts> => {
  const skip = pageParam * perPage;
  const res = await fetch(
    `https://dummyjson.com/products?skip=${skip}&limit=${perPage}`
  );
  if (res.ok) {
    const parsedRes: iProductsResponse = await res.json();
    const { products, total } = parsedRes;
    const lastPage = products.length !== perPage;
    const hasMore = products.length % perPage === 0 && !lastPage;
    const nextCursor = pageParam;

    const page = {
      products,
      hasMore,
      total,
    };

    return {
      nextCursor,
      page,
    };
  }
  throw new Error('Unable to fetch products');
};

export const InfiniteProductsPage: React.FC = () => {
  usePageTitle('Infinite data fetching');
  const perPage = 8;
  const {
    isLoading,
    // isFetchingNextPage,
    isError,
    error,
    data,
    hasNextPage,
    fetchNextPage,
  }: UseInfiniteQueryResult<iInfiniteProducts, Error> = useInfiniteQuery<
    iInfiniteProducts,
    Error
  >(['products'], (ctx: QueryFunctionContext) => fetchProducts(ctx, perPage), {
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.page.products.length === perPage) {
        return pages.length;
      } else {
        return undefined;
      }
    },
  });
  if (isError) {
    return <p>{error.message}</p>;
  }
  return (
    <>
      <ProductListControlls
        mode='infinite'
        total={data?.pages[0].page.total}
        page={Number(data?.pageParams.length)}
        perPage={perPage}
        dataLength={data?.pages.reduce((acc, curr) => {
          return acc + curr.page.products.length;
        }, 0)}
      />
      {isLoading ? (
        <ProductListSkeleton />
      ) : (
        <InfiniteScroll
          dataLength={Number(
            data?.pages.reduce((acc, curr) => {
              return acc + curr.page.products.length;
            }, 0)
          )}
          next={fetchNextPage}
          hasMore={!!hasNextPage}
          loader={<ProductListSkeleton />}
          endMessage={<p className={styles.endMsg}>That is all for now</p>}
        >
          <ProductList>
            {data?.pages.map((page, index) => {
              return (
                <Fragment key={index}>
                  {page.page.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </Fragment>
              );
            })}
          </ProductList>
        </InfiniteScroll>
      )}
    </>
  );
};
