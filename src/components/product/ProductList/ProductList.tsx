import { useUiContext } from '../../../context/uiContext';

import styles from '../../../styles/components/product/ProductList.module.scss';

type ProductListProps = {
  children: React.ReactNode;
};

export const ProductList: React.FC<ProductListProps> = ({
  children,
}: ProductListProps) => {
  const { displayType } = useUiContext();
  return (
    <section
      className={
        displayType === 1
          ? styles.gridCol1
          : displayType === 2
          ? styles.gridCol2
          : styles.gridCol4
      }
    >
      {children}
    </section>
  );
};
