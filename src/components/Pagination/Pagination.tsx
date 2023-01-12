import styles from '../../styles/components/Pagination.module.scss';

type PaginationProps = {
  page: number;
  perPage: number;
  total: number | undefined;
  isPreviousData: boolean;
  hasMore: boolean;
  changePage: (number: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  page,
  perPage,
  total,
  isPreviousData,
  hasMore,
  changePage,
}: PaginationProps) => {
  const pages = new Array(Math.ceil(Number(total) / perPage)).fill(null);

  const handlePrevPage = () => {
    changePage(page - 1);
  };
  const handleNextPage = () => {
    if (!isPreviousData && hasMore) {
      changePage(page + 1);
    }
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.btnActive}
        disabled={page === 0}
        onClick={handlePrevPage}
      >
        Prev
      </button>
      {pages.map((_p, index) => {
        let lowIndex = false;
        let highIndex = false;
        let proximityIndex = false;
        index <= 1 ? (lowIndex = true) : (lowIndex = false);
        index >= pages.length - 2 ? (highIndex = true) : (highIndex = false);
        page - index === -1 || page - index === 0 || page - index === 1
          ? (proximityIndex = true)
          : (proximityIndex = false);

        const display = lowIndex || highIndex || proximityIndex;
        return (
          <button
            key={index}
            className={
              !display
                ? styles.btnInactive
                : page === index
                ? styles.btnCurrent
                : styles.btnActive
            }
            onClick={() => changePage(index)}
          >
            {index + 1}
          </button>
        );
      })}
      <button
        className={styles.btnActive}
        disabled={isPreviousData || !hasMore}
        onClick={handleNextPage}
      >
        Next
      </button>
    </div>
  );
};
