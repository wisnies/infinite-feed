import { useEffect, useState } from 'react';
import {
  QueryKey,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { usePageTitle } from '../../../hooks/usePageTitle';
import { iInfiniteProducts } from '../../../libs/interfaces/InfiniteProducts.interface';
import { iProduct } from '../../../libs/interfaces/Product.interface';
import ProductDescription from '../../product/ProductDescription';
import ProductDetails from '../../product/ProductDetails';
import ProductGallery from '../../product/ProductGallery';
import ProductDescriptionSkeleton from '../../skeletons/ProductDescriptionSkeleton';
import ProductGallerySkeleton from '../../skeletons/ProductGallerySkeleton';

const fetchProduct = async (productId: string): Promise<iProduct> => {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);

  if (res.ok) {
    return await res.json();
  }

  throw new Error('Unable to fetch product');
};

export const ProductPage: React.FC = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [cachedProducts, setCachedProducts] = useState<iProduct[]>([]);

  const queryClient = useQueryClient();

  if (typeof productId !== 'string') {
    navigate('/');
  }

  useEffect(() => {
    const queries = queryClient.getQueriesData('products');

    let products: iProduct[] = [];
    if (queries.length > 0) {
      queries.forEach((q: [QueryKey, any]) => {
        if (q[0].length > 1) {
          products = [...products, ...q[1].products];
        } else {
          q[1].pages.forEach((p: iInfiniteProducts) => {
            products = [...products, ...p.page.products];
          });
        }
      });
      setCachedProducts(products);
    }
  }, [queryClient]);

  const enableQueryByProductId = (id: string) => {
    const index = cachedProducts.findIndex((p) => p.id.toString() === id);
    if (index >= 0) {
      return false;
    } else {
      return true;
    }
  };

  const { isLoading, isError, error, data }: UseQueryResult<iProduct, Error> =
    useQuery<iProduct, Error>(
      ['product', productId],
      () => fetchProduct(productId as string),
      {
        enabled: enableQueryByProductId(productId as string),
        onSuccess: () => {
          document.title = `${data?.title} Details | Infinite feed | wisnies`;
        },
      }
    );
  usePageTitle(`${data?.title} Details`);

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <ProductDetails>
      {isLoading ? (
        <>
          <ProductGallerySkeleton />
          <ProductDescriptionSkeleton />
        </>
      ) : (
        <>
          <ProductGallery
            title={data?.title}
            thumbnail={data?.thumbnail}
            images={data?.images}
          />
          <ProductDescription
            title={data?.title}
            description={data?.description}
            price={data?.price}
            discountPercentage={data?.discountPercentage}
            brand={data?.brand}
            category={data?.category}
            rating={data?.rating}
            stock={data?.stock}
          />
        </>
      )}
    </ProductDetails>
  );
};
