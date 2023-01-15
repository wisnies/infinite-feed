import styles from '../../../styles/components/layout/Card.module.scss';

type CardProps = {
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ children }: CardProps) => {
  return <div className={styles.card}>{children}</div>;
};
