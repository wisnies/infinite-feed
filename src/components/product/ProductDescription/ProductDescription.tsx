import { Link } from 'react-router-dom';
import styles from '../../../styles/components/product/ProductDescription.module.scss';
import btnStyles from '../../../styles/components/layout/Btn.module.scss';
import Card from '../../layout/Card';

type ProductDescriptionProps = {
  title: string | undefined;
  description: string | undefined;
  price: number | undefined;
  discountPercentage: number | undefined;
  rating: number | undefined;
  stock: number | undefined;
  brand: string | undefined;
  category: string | undefined;
};

export const ProductDescription: React.FC<ProductDescriptionProps> = ({
  title,
  description,
  price = 0,
  discountPercentage = 0,
  rating = 0,
  stock = 0,
  brand,
  category,
}: ProductDescriptionProps) => {
  return (
    <div className={styles.containerWrapper}>
      <Card>
        <div className={styles.container}>
          <h1>{title}</h1>
          <div className={styles.linkContainer}>
            <Link to='#' className={styles.fadedLink}>
              {category}
            </Link>
            <div>&gt;</div>
            <Link to='#' className={styles.fadedLink}>
              {brand}
            </Link>
          </div>
          <p>
            Users rating: <span className={styles.bold}>{rating}</span>
          </p>
          <p>
            Manufacturer: <span className={styles.bold}>{brand}</span>
          </p>
          <p className={styles.description}>{description}</p>
          {stock > 0 ? (
            <p className={styles.available}>Product available</p>
          ) : (
            <p className={styles.unavailable}>Product unavailable</p>
          )}
          <p className={styles.price}>
            {new Intl.NumberFormat('en-Us', {
              style: 'currency',
              currency: 'USD',
            }).format(price - price * (discountPercentage / 100))}
            <span>
              {new Intl.NumberFormat('en-Us', {
                style: 'currency',
                currency: 'USD',
              }).format(price)}
            </span>
          </p>
        </div>
        <div className={styles.btnContainer}>
          <button className={btnStyles.accent2}>add to cart</button>
        </div>
      </Card>
    </div>
  );
};
