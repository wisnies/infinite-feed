import styles from '../../../styles/components/product/ProductDetails.module.scss';

type ProductDetailsProps = {
  children: React.ReactNode;
};

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  children,
}: ProductDetailsProps) => {
  return <div className={styles.container}>{children}</div>;
};
