import styles from '../../../styles/components/product/ProductGallery.module.scss';
import Card from '../../layout/Card';

type ProductGalleryProps = {
  thumbnail: string | undefined;
  images: string[];
};

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  thumbnail,
  images,
}: ProductGalleryProps) => {
  const handleThumbnailChange = () => {};
  const handleFeedMove = (direction: 'prev' | 'next') => {};
  return (
    <div className={styles.containerWrapper}>
      <Card>
        <div className={styles.container}>
          <div className={styles.thumbnailContainer}>
            <img src={thumbnail} />
          </div>
          <div className={styles.galleryContainer}>
            <div className={styles.galleryFeed}>
              {[thumbnail, ...images].map((img) => (
                <img src={img} />
              ))}
            </div>
            <button> &lt;</button>
            <button> &gt;</button>
          </div>
        </div>
      </Card>
    </div>
  );
};
