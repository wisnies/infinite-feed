import styles from '../../../styles/components/product/ProductDescription.module.scss';
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
          <p>
            {category} &gt; {brand}
          </p>
          <p>
            Users rating: <span>{rating}</span>
          </p>
          <p>
            Manufacturer: <span>{brand}</span>
          </p>
          <p>{description}</p>
          {stock > 0 ? <p>Product available</p> : <p>Product unavailable</p>}
          <p>
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
      </Card>
    </div>
  );
};
