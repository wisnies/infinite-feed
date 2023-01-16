import { useUiContext } from '../../../context/uiContext';
import styles from '../../../styles/components/product/ProductCard.module.scss';
import Card from '../../layout/Card';

export const ProductCardSkeleton: React.FC = () => {
  const { displayType } = useUiContext();

  return (
    <Card>
      <div className={styles.container}>
        <div
          className={
            displayType === 1
              ? styles.imgContainer1
              : displayType === 2
              ? styles.imgContainer2
              : styles.imgContainer4
          }
        ></div>
        <div className={styles.detailsContainer}>
          <span className={styles.mockText80}>title</span>
          <span className={styles.mockText40}>price</span>
          <span className={styles.mockText60}>price</span>
        </div>
      </div>
    </Card>
  );
};
