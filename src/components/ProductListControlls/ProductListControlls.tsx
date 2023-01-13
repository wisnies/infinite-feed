import { useUiContext } from '../../context/uiContext';

import styles from '../../styles/components/ProductListControlls.module.scss';
type ProductListControllsProps = {
  mode: 'pagination' | 'infinite';
  total: number | undefined;
  page: number;
  perPage: number;
  dataLength?: number;
};

export const ProductListControlls: React.FC<ProductListControllsProps> = ({
  mode,
  total = 0,
  page,
  perPage,
  dataLength = 0,
}: ProductListControllsProps) => {
  const { displayType, setDisplayType } = useUiContext();
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <div className={styles.info}>
          <p>
            {mode === 'pagination'
              ? `Products ${page * perPage + 1} - ${
                  (page + 1) * perPage >= 100 ? 100 : (page + 1) * perPage
                } out of ${total}`
              : `Products ${total > 0 ? 1 : 0} - ${dataLength} out of ${total}`}
          </p>
        </div>
        <div className={styles.controlls}>
          <button
            className={
              displayType === 1
                ? styles.controllsBtn1Active
                : styles.controllsBtn1
            }
            onClick={() => setDisplayType(1)}
          >
            1
          </button>
          <button
            className={
              displayType === 2
                ? styles.controllsBtn2Active
                : styles.controllsBtn2
            }
            onClick={() => setDisplayType(2)}
          >
            2
          </button>
          <button
            className={
              displayType === 4
                ? styles.controllsBtn4Active
                : styles.controllsBtn4
            }
            onClick={() => setDisplayType(4)}
          >
            4
          </button>
        </div>
      </div>
    </div>
  );
};
