import { iProduct } from '../../libs/interfaces/Product.interface';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import styles from '../../styles/components/ProductCard.module.scss';
import { useUiContext } from '../../context/uiContext';
import { Link } from 'react-router-dom';
type ProductCardProps = {
  product: iProduct;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
}: ProductCardProps) => {
  const { displayType } = useUiContext();
  return (
    <article className={styles.container}>
      <div
        className={
          displayType === 1
            ? styles.imgContainer1
            : displayType === 2
            ? styles.imgContainer2
            : styles.imgContainer4
        }
      >
        <LazyLoadImage
          alt={`${product.title} thumbnail`}
          effect='blur'
          src={product.thumbnail}
          placeholderSrc={product.thumbnail}
          width='100%'
        />
        <div className={styles.badgeContainer}>
          {product.discountPercentage > 0 && (
            <span className={styles.badgeDiscount}>
              {' '}
              - {product.discountPercentage}%
            </span>
          )}
          {product.stock <= 10 && (
            <span className={styles.badgeStock}>low stock</span>
          )}
        </div>
        <button className={styles.cartBtn}>Add to cart</button>
      </div>
      <div className={styles.detailsContainer}>
        <Link to={`/products/${product.id}`}>{product.title}</Link>
        <p>
          {new Intl.NumberFormat('en-Us', {
            style: 'currency',
            currency: 'USD',
          }).format(
            product.price - product.price * (product.discountPercentage / 100)
          )}
          <span>
            {new Intl.NumberFormat('en-Us', {
              style: 'currency',
              currency: 'USD',
            }).format(product.price)}
          </span>
        </p>
      </div>
    </article>
  );
};
