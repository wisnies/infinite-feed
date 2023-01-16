import { Link } from 'react-router-dom';
import styles from '../../styles/components/ProjectInfo.module.scss';
import btnStyles from '../../styles/components/layout/Btn.module.scss';
import Card from '../layout/Card';
import RandomRedirect from '../RandomRedirect';

export const ProjectInfo: React.FC = () => {
  return (
    <div className={styles.container}>
      <Card>
        <div className={styles.containerInner}>
          <h1>infinite feed</h1>
          <h3>features:</h3>
          <ul>
            <li>data fetching using rect-query</li>
            <li>data display using paginated and infinite queries</li>
            <li>using cached data to invalidate queries</li>
            <li>using context for ui elements</li>
            <li>project routing</li>
            <li>responsive ui desing</li>
          </ul>
          <h3>data used: </h3>
          <a target='_blank' rel='noreferrer' href='https://dummyjson.com/'>
            https://dummyjson.com/
          </a>
          <h3>Technologies used: </h3>
          <ul>
            <li>react</li>
            <li>react context</li>
            <li>react-router-dom</li>
            <li>react-query</li>
            <li>typescript</li>
            <li>sass</li>
          </ul>
          <div className={styles.btnContainer}>
            <Link to='/products-pag' className={btnStyles.primary}>
              Paginated display
            </Link>
            <Link to='products-inf' className={btnStyles.accent2}>
              Infinite display
            </Link>
          </div>
          <RandomRedirect />
        </div>
      </Card>
    </div>
  );
};
