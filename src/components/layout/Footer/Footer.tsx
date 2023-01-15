import styles from '../../../styles/components/layout/Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.containerInner}>
        <p>Mateusz Wiśniewski &copy; 2023 - {new Date().getFullYear()}</p>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/wisnies/infinite-feed'
        >
          Github Repo
        </a>
      </div>
    </footer>
  );
};
