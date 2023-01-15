import styles from '../../../styles/components/layout/Skeletons.module.scss';
import Card from '../../layout/Card';

export const ProductDescriptionSkeleton: React.FC = () => {
  return (
    <div className={styles.productDescriptionContainer}>
      <Card>
        <div className={styles.productDescription}>
          <p className={styles.title}>a</p>
          <div className={styles.mb20}></div>
          <p className={styles.text40}>a</p>
          <div className={styles.mb20}></div>
          <p className={styles.text80}>a</p>
          <p className={styles.text80}>a</p>
          <p className={styles.text60}>a</p>
        </div>
      </Card>
    </div>
  );
};
