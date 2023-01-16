import styles from '../../../styles/components/product/ProductGallery.module.scss';
import Card from '../../layout/Card';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useState } from 'react';
type ProductGalleryProps = {
  title: string | undefined;
  thumbnail: string | undefined;
  images: string[] | undefined;
};

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  title,
  thumbnail,
  images = [],
}: ProductGalleryProps) => {
  const [currentImg, setCurrentImg] = useState(thumbnail as string);
  const [currentGallery, setCurrentGallery] = useState(0);
  const [translate, setTranslate] = useState(`translateX(0)`);
  const handleThumbnailChange = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    const img = e.currentTarget;

    setCurrentImg(img.src);
  };
  const handleFeedMove = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentGallery !== 0) {
      const newGallery = currentGallery - 1;
      setCurrentGallery(newGallery);
      setTranslate(`translateX(${newGallery * -130}px)`);
    }
    if (direction === 'next' && currentGallery < images.length - 1) {
      const newGallery = currentGallery + 1;
      setCurrentGallery(newGallery);
      setTranslate(`translateX(${newGallery * -130}px)`);
    }
  };
  return (
    <div className={styles.containerWrapper}>
      <Card>
        <div className={styles.container}>
          <div className={styles.currentImgContainer}>
            <LazyLoadImage
              alt={`${title} current img`}
              effect='blur'
              src={currentImg}
              placeholderSrc={currentImg}
              width='100%'
              className={styles.currentImg}
            />
          </div>
          <div className={styles.galleryContainer}>
            <div
              className={styles.galleryFeed}
              style={{
                transform: translate,
              }}
            >
              {[thumbnail, ...images].map((img, index) => (
                <div key={index} className={styles.galleryImgContainer}>
                  <LazyLoadImage
                    alt={`${title}[${index}]`}
                    effect='blur'
                    src={img}
                    placeholderSrc={img}
                    width='100%'
                    onClick={(e: React.MouseEvent<HTMLImageElement>) =>
                      handleThumbnailChange(e)
                    }
                  />
                </div>
              ))}
            </div>
            <button
              className={styles.galleryBtnPrev}
              disabled={currentGallery === 0}
              onClick={() => handleFeedMove('prev')}
            >
              &lt;&lt;
            </button>
            <button
              className={styles.galleryBtnNext}
              disabled={currentGallery >= Number(thumbnail?.length) - 1}
              onClick={() => handleFeedMove('next')}
            >
              &gt;&gt;
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};
