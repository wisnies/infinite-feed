import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from '../../styles/components/ScrollToTopBtn.module.scss';

export const ScrollToTopBtn: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener('scroll', toggleVisibility);
  useEffect(() => {
    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility);
    return window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return createPortal(
    <button
      className={isVisible ? styles.btn : styles.btnNone}
      onClick={handleClick}
    >
      UP
    </button>,
    document.getElementById('scrollToTopBtn') as HTMLElement
  );
};
