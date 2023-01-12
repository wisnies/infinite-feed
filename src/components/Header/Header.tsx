import styles from '../../styles/components/Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.containerInner}>Header</div>
    </header>
  );
};
