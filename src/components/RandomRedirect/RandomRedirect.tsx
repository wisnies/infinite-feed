import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from '../../styles/components/RandomRedirect.module.scss';
import btnStyles from '../../styles/components/layout/Btn.module.scss';

export const RandomRedirect: React.FC = () => {
  const [randomId, setRandomId] = useState(1);

  const generateRandomId = () => {
    const num = Math.floor(Math.random() * 100) + 1;
    setRandomId(num);
  };
  useEffect(() => {
    generateRandomId();
  }, []);
  return (
    <div className={styles.container}>
      <p>Current random id: {randomId}</p>
      <div className={styles.btnContainer}>
        <button onClick={generateRandomId} className={btnStyles.accent2}>
          Generate
        </button>
        <Link to={`/products/${randomId}`} className={btnStyles.primary}>
          Product Details
        </Link>
      </div>
    </div>
  );
};
