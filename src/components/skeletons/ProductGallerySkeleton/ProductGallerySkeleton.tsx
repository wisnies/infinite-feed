import styles from '../../../styles/components/layout/Skeletons.module.scss';
import Card from '../../layout/Card';

export const ProductGallerySkeleton: React.FC = () => {
  return (
    <div className={styles.productGalleryContainer}>
      <Card>
        <div className={styles.productGallery}>
          <div className={styles.thumbnail}></div>
          <div className={styles.gallery}>
            <div className={styles.galleryImg}></div>
            <div className={styles.galleryImg}></div>
            <div className={styles.galleryImg}></div>
          </div>
        </div>
      </Card>
    </div>
  );
};
